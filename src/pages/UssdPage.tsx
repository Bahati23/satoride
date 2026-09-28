import { useMemo, useRef, useState } from 'react';
import { useSeoMeta } from '@unhead/react';
import { Accessibility, PhoneCall, Signal, Undo2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { SiteHeader } from '@/components/satoride/SiteHeader';
import { SiteFooter } from '@/components/satoride/SiteFooter';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useDemoWallet } from '@/lib/wallet';
import { useVehicles } from '@/hooks/useVehicles';
import { useWorkerPayments } from '@/hooks/usePayments';
import { useWorkerSettings } from '@/hooks/useWorkerSettings';
import { usePayFare } from '@/hooks/useSatorideActions';
import { useTranslation } from '@/lib/i18n';
import {
  DEMO_FLEET_PUBKEY,
  formatKes,
  isToday,
  type VehicleService,
} from '@/lib/satoride';

/**
 * USSD simulator.
 *
 * Demonstrates the "A — Accessible" promise: every core SatoRide function on a
 * basic feature phone, no smartphone or data bundle required. The payment path
 * is real — it settles through the same demo wallet and Nostr receipt pipeline
 * as the smartphone app, and the whole session speaks your language.
 */

type Screen =
  | { id: 'idle' }
  | { id: 'menu' }
  | { id: 'pay-plate' }
  | { id: 'pay-confirm'; vehicle: VehicleService }
  | { id: 'pay-processing'; vehicle: VehicleService }
  | { id: 'pay-done'; receipt: string; vehicle: VehicleService }
  | { id: 'pay-failed'; message: string }
  | { id: 'balance' }
  | { id: 'savings' }
  | { id: 'emergency' }
  | { id: 'earnings' }
  | { id: 'invalid'; message: string; backTo: Screen }
  | { id: 'ended' };

export default function UssdPage() {
  const { t } = useTranslation();

  useSeoMeta({
    title: t('seo.ussd.title'),
    description: t('seo.ussd.desc'),
  });

  const { user } = useCurrentUser();
  const workerPubkey = user?.pubkey ?? DEMO_FLEET_PUBKEY;

  const wallet = useDemoWallet();
  const { data: vehicles } = useVehicles();
  const { data: payments } = useWorkerPayments(workerPubkey);
  const { data: settings } = useWorkerSettings(workerPubkey);
  const payFare = usePayFare();

  const [screen, setScreen] = useState<Screen>({ id: 'idle' });
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const workerStats = useMemo(() => {
    const all = payments ?? [];
    const today = all.filter((p) => isToday(p.createdAt));
    const grossToday = today.reduce((s, p) => s + p.amount, 0);
    const grossAll = all.reduce((s, p) => s + p.amount, 0);
    return { grossToday, grossAll, tripsToday: today.length };
  }, [payments]);

  const savingsTotal = (workerStats.grossAll * (settings?.savingsPercent ?? 5)) / 100;
  const emergencyTotal = (workerStats.grossAll * (settings?.emergencyPercent ?? 5)) / 100;
  const emergencyGoal = settings?.emergencyGoal ?? 20000;
  const emergencyPct = Math.min(100, Math.round((emergencyTotal / emergencyGoal) * 100));

  const focusInput = () => setTimeout(() => inputRef.current?.focus(), 50);

  const send = (raw?: string) => {
    const value = (raw ?? input).trim();
    setInput('');

    switch (screen.id) {
      case 'idle': {
        if (value === '*384#' || value === '') {
          setScreen({ id: 'menu' });
        } else {
          setScreen({
            id: 'invalid',
            message: t('ussd.s.unknownCode', { value }),
            backTo: { id: 'idle' },
          });
        }
        break;
      }
      case 'menu': {
        const next: Record<string, Screen> = {
          '1': { id: 'pay-plate' },
          '2': { id: 'balance' },
          '3': { id: 'savings' },
          '4': { id: 'emergency' },
          '5': { id: 'earnings' },
          '0': { id: 'ended' },
        };
        setScreen(next[value] ?? { id: 'invalid', message: t('ussd.s.invalidChoice'), backTo: { id: 'menu' } });
        break;
      }
      case 'pay-plate': {
        const code = value.toUpperCase().replace(/[\s-]/g, '');
        const vehicle = (vehicles ?? []).find(
          (v) =>
            v.plate?.replace(/[\s-]/g, '').toUpperCase() === code ||
            v.d.replace(/[\s-]/g, '').toUpperCase() === code,
        );
        if (!value) {
          setScreen({ id: 'menu' });
        } else if (vehicle) {
          setScreen({ id: 'pay-confirm', vehicle });
        } else {
          setScreen({
            id: 'invalid',
            message: t('ussd.s.notFound', { value }),
            backTo: { id: 'pay-plate' },
          });
        }
        break;
      }
      case 'pay-confirm': {
        if (value === '1') {
          const vehicle = screen.vehicle;
          setScreen({ id: 'pay-processing', vehicle });
          payFare.mutate(vehicle, {
            onSuccess: (result) =>
              setScreen({ id: 'pay-done', receipt: result.receipt, vehicle }),
            onError: (error) => setScreen({ id: 'pay-failed', message: error.message }),
          });
        } else {
          setScreen({ id: 'menu' });
        }
        break;
      }
      case 'invalid': {
        setScreen(screen.backTo);
        break;
      }
      case 'pay-failed':
      case 'pay-done':
      case 'balance':
      case 'savings':
      case 'emergency':
      case 'earnings': {
        setScreen({ id: 'menu' });
        break;
      }
      case 'ended':
      case 'pay-processing':
        break;
    }
    focusInput();
  };

  const reset = () => {
    setScreen({ id: 'idle' });
    setInput('');
  };

  const infoCards: { title: string; detail: string }[] = [
    { title: t('ussd.card1Title'), detail: t('ussd.card1Desc') },
    { title: t('ussd.card2Title'), detail: t('ussd.card2Desc') },
    { title: t('ussd.card3Title'), detail: t('ussd.card3Desc') },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="container flex-1 py-10">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_auto]">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="bg-card inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold tracking-wide shadow-sm">
                <Accessibility className="size-3.5 text-primary" aria-hidden />
                A — ACCESSIBLE
              </p>
              <h1 className="font-display text-4xl font-extrabold leading-tight md:text-5xl">
                {t('ussd.title1')}
                <br />
                {t('ussd.title2')}
              </h1>
              <p className="text-muted-foreground max-w-lg text-lg leading-relaxed">
                {t('ussd.desc')}
              </p>
            </div>

            <div className="space-y-3">
              {infoCards.map((item) => (
                <Card key={item.title}>
                  <CardContent className="flex gap-3 p-4">
                    <PhoneCall className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.detail}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Phone mockup */}
          <div className="mx-auto w-full max-w-[320px]">
            <div className="rounded-[2.5rem] border-[10px] border-zinc-800 bg-zinc-800 shadow-2xl dark:border-zinc-700 dark:bg-zinc-700">
              {/* Earpiece */}
              <div className="flex justify-center py-2">
                <div className="h-1.5 w-16 rounded-full bg-zinc-600" />
              </div>
              {/* Screen */}
              <div className="mx-2 rounded-lg bg-[#e8f0e3] p-3 font-mono text-[13px] leading-relaxed text-zinc-900 shadow-inner">
                <div className="mb-2 flex items-center justify-between border-b border-zinc-400/50 pb-1 text-[10px] text-zinc-600">
                  <span className="flex items-center gap-1">
                    <Signal className="size-3" aria-hidden /> SafariNet
                  </span>
                  <span>*384#</span>
                </div>
                <div className="min-h-[240px] whitespace-pre-wrap break-words">
                  <ScreenText
                    screen={screen}
                    balance={wallet.balance}
                    savingsTotal={savingsTotal}
                    emergencyTotal={emergencyTotal}
                    emergencyGoal={emergencyGoal}
                    emergencyPct={emergencyPct}
                    grossToday={workerStats.grossToday}
                    tripsToday={workerStats.tripsToday}
                  />
                </div>
              </div>

              {/* Input + keys */}
              <div className="space-y-2 p-3">
                {screen.id !== 'idle' && screen.id !== 'ended' && screen.id !== 'pay-processing' && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      send();
                    }}
                    className="flex gap-2"
                  >
                    <Input
                      ref={inputRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder={screen.id === 'pay-plate' ? 'KCA 123A' : t('ussd.replyPlaceholder')}
                      className="h-9 border-zinc-600 bg-zinc-900 font-mono text-sm text-zinc-100 placeholder:text-zinc-500"
                      aria-label={t('ussd.replyAria')}
                      autoComplete="off"
                    />
                    <Button type="submit" size="sm" className="h-9 rounded-md px-4 font-mono">
                      {t('ussd.send')}
                    </Button>
                  </form>
                )}

                {screen.id === 'idle' && (
                  <Button
                    className="h-9 w-full rounded-md font-mono font-bold"
                    onClick={() => {
                      setScreen({ id: 'menu' });
                      focusInput();
                    }}
                  >
                    {t('ussd.dial')}
                  </Button>
                )}

                {(screen.id === 'ended' || screen.id === 'pay-processing') && (
                  <Button
                    variant="secondary"
                    className="h-9 w-full rounded-md font-mono"
                    disabled={screen.id === 'pay-processing'}
                    onClick={reset}
                  >
                    {screen.id === 'pay-processing' ? t('ussd.settling') : t('ussd.newSession')}
                  </Button>
                )}

                {/* Quick replies */}
                <QuickReplies screen={screen} onSend={send} />
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              <Button variant="ghost" size="sm" className="gap-1.5 text-xs" onClick={reset}>
                <Undo2 className="size-3.5" aria-hidden />
                {t('ussd.reset')}
              </Button>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

/* ------------------------------------------------------------------ */

function ScreenText({
  screen,
  balance,
  savingsTotal,
  emergencyTotal,
  emergencyGoal,
  emergencyPct,
  grossToday,
  tripsToday,
}: {
  screen: Screen;
  balance: number;
  savingsTotal: number;
  emergencyTotal: number;
  emergencyGoal: number;
  emergencyPct: number;
  grossToday: number;
  tripsToday: number;
}) {
  const { t } = useTranslation();

  switch (screen.id) {
    case 'idle':
      return <span className="text-zinc-500">{t('ussd.s.idle')}</span>;
    case 'menu':
      return <span>{t('ussd.s.menu')}</span>;
    case 'pay-plate':
      return <span>{t('ussd.s.payPlate')}</span>;
    case 'pay-confirm': {
      const lines = [screen.vehicle.name, screen.vehicle.plate, screen.vehicle.route]
        .filter(Boolean)
        .join('\n');
      return (
        <span>
          {t('ussd.s.confirm', { lines, fare: formatKes(screen.vehicle.fare) })}
        </span>
      );
    }
    case 'pay-processing':
      return <span>{t('ussd.s.processing')}</span>;
    case 'pay-done':
      return (
        <span className="text-emerald-800">
          {t('ussd.s.done', {
            fare: formatKes(screen.vehicle.fare),
            name: screen.vehicle.name,
            receipt: screen.receipt,
          })}
        </span>
      );
    case 'pay-failed':
      return (
        <span className="text-red-700">{t('ussd.s.failed', { message: screen.message })}</span>
      );
    case 'balance':
      return <span>{t('ussd.s.balance', { balance: balance.toLocaleString() })}</span>;
    case 'savings':
      return <span>{t('ussd.s.savings', { total: formatKes(savingsTotal) })}</span>;
    case 'emergency':
      return (
        <span>
          {t('ussd.s.emergency', {
            total: formatKes(emergencyTotal),
            goal: formatKes(emergencyGoal),
            pct: emergencyPct,
          })}
        </span>
      );
    case 'earnings':
      return (
        <span>
          {t('ussd.s.earnings', { gross: formatKes(grossToday), trips: tripsToday })}
        </span>
      );
    case 'invalid':
      return (
        <span className="text-red-700">{t('ussd.s.invalid', { message: screen.message })}</span>
      );
    case 'ended':
      return <span className="text-zinc-500">{t('ussd.s.ended')}</span>;
  }
}

function QuickReplies({ screen, onSend }: { screen: Screen; onSend: (value: string) => void }) {
  let options: string[] = [];
  if (screen.id === 'menu') options = ['1', '2', '3', '4', '5', '0'];
  if (screen.id === 'pay-confirm') options = ['1', '0'];

  if (options.length === 0) return null;

  return (
    <div className="grid grid-cols-6 gap-1.5">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onSend(option)}
          className="rounded-md bg-zinc-900/80 py-1.5 font-mono text-sm text-zinc-200 transition-colors hover:bg-zinc-900"
        >
          {option}
        </button>
      ))}
    </div>
  );
}
