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
 * as the smartphone app.
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
  useSeoMeta({
    title: 'USSD simulator — SatoRide',
    description:
      'Experience SatoRide on a basic phone: pay, check balances, savings and earnings over USSD.',
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
            message: `Unknown code "${value}". Dial *384# for SatoRide.`,
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
        setScreen(next[value] ?? { id: 'invalid', message: 'Invalid choice.', backTo: { id: 'menu' } });
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
            message: `Vehicle "${value}" not found. Check the code on the sticker.`,
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
                No smartphone?
                <br />
                No problem.
              </h1>
              <p className="text-muted-foreground max-w-lg text-lg leading-relaxed">
                A third of commuters may only have a basic phone. SatoRide's USSD
                channel brings pay, savings and earnings to any handset — try the
                live simulator.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  title: 'Dial *384#',
                  detail: 'Works on any GSM phone — no data bundle, no app install.',
                },
                {
                  title: 'Same engine underneath',
                  detail:
                    'The simulator settles through the same demo Lightning wallet and writes real receipts to Nostr.',
                },
                {
                  title: 'Try vehicle code KCA 123A',
                  detail:
                    'Choose 1 (Pay), enter the plate from the matatu sticker, confirm — a real receipt comes back.',
                },
              ].map((item) => (
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
                  <span>*384# session</span>
                </div>
                <div className="min-h-[240px] whitespace-pre-wrap break-words">
                  <ScreenText
                    screen={screen}
                    balance={wallet.balance}
                    savingsTotal={savingsTotal}
                    emergencyTotal={emergencyTotal}
                    emergencyGoal={emergencyGoal}
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
                      placeholder={screen.id === 'pay-plate' ? 'KCA 123A' : 'Reply…'}
                      className="h-9 border-zinc-600 bg-zinc-900 font-mono text-sm text-zinc-100 placeholder:text-zinc-500"
                      aria-label="USSD reply"
                      autoComplete="off"
                    />
                    <Button type="submit" size="sm" className="h-9 rounded-md px-4 font-mono">
                      Send
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
                    Dial *384#
                  </Button>
                )}

                {(screen.id === 'ended' || screen.id === 'pay-processing') && (
                  <Button
                    variant="secondary"
                    className="h-9 w-full rounded-md font-mono"
                    disabled={screen.id === 'pay-processing'}
                    onClick={reset}
                  >
                    {screen.id === 'pay-processing' ? 'Settling…' : 'New session'}
                  </Button>
                )}

                {/* Quick replies */}
                <QuickReplies screen={screen} onSend={send} />
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              <Button variant="ghost" size="sm" className="gap-1.5 text-xs" onClick={reset}>
                <Undo2 className="size-3.5" aria-hidden />
                Reset simulator
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
  grossToday,
  tripsToday,
}: {
  screen: Screen;
  balance: number;
  savingsTotal: number;
  emergencyTotal: number;
  emergencyGoal: number;
  grossToday: number;
  tripsToday: number;
}) {
  switch (screen.id) {
    case 'idle':
      return (
        <span className="text-zinc-500">
          Welcome to SatoRide.{'\n\n'}Dial <strong>*384#</strong> to start a session — pay fares,
          check savings and earnings from any phone.
        </span>
      );
    case 'menu':
      return (
        <span>
          <strong>SATORIDE</strong>{'\n'}
          1. Pay fare{'\n'}
          2. Wallet balance{'\n'}
          3. My savings{'\n'}
          4. Emergency fund{'\n'}
          5. Today's earnings{'\n'}
          0. Exit
        </span>
      );
    case 'pay-plate':
      return (
        <span>
          <strong>PAY FARE</strong>{'\n'}
          Enter the vehicle code on the sticker (e.g. KCA 123A).{'\n'}
          Send empty to go back.
        </span>
      );
    case 'pay-confirm':
      return (
        <span>
          <strong>CONFIRM PAYMENT</strong>{'\n'}
          {screen.vehicle.name}
          {'\n'}
          {screen.vehicle.plate ? `${screen.vehicle.plate}\n` : ''}
          {screen.vehicle.route ? `${screen.vehicle.route}\n` : ''}
          {'\n'}
          Fare: <strong>{formatKes(screen.vehicle.fare)}</strong>
          {'\n\n'}
          1. Confirm{'\n'}
          0. Cancel
        </span>
      );
    case 'pay-processing':
      return (
        <span>
          Processing payment…{'\n'}
          Settling over Lightning.{'\n\n'}Please wait.
        </span>
      );
    case 'pay-done':
      return (
        <span className="text-emerald-800">
          <strong>PAYMENT CONFIRMED ✓</strong>{'\n\n'}
          {formatKes(screen.vehicle.fare)} paid to {screen.vehicle.name}.{'\n'}
          Receipt: {screen.receipt}
          {'\n\n'}
          Asante! Send any key for menu.
        </span>
      );
    case 'pay-failed':
      return (
        <span className="text-red-700">
          Payment failed.{'\n'}
          {screen.message}
          {'\n\n'}Send any key for menu.
        </span>
      );
    case 'balance':
      return (
        <span>
          <strong>WALLET BALANCE</strong>{'\n\n'}⚡ {balance.toLocaleString()} sats (demo)
          {'\n\n'}Send any key for menu.
        </span>
      );
    case 'savings':
      return (
        <span>
          <strong>MY SAVINGS</strong>{'\n\n'}
          Total saved: <strong>{formatKes(savingsTotal)}</strong>
          {'\n'}
          Auto-save rule: every fare contributes.
          {'\n\n'}Send any key for menu.
        </span>
      );
    case 'emergency':
      return (
        <span>
          <strong>EMERGENCY FUND</strong>{'\n\n'}
          Balance: <strong>{formatKes(emergencyTotal)}</strong>
          {'\n'}
          Goal: {formatKes(emergencyGoal)} ({Math.min(100, Math.round((emergencyTotal / emergencyGoal) * 100))}%)
          {'\n\n'}Send any key for menu.
        </span>
      );
    case 'earnings':
      return (
        <span>
          <strong>TODAY'S EARNINGS</strong>{'\n\n'}
          Gross: <strong>{formatKes(grossToday)}</strong>
          {'\n'}
          Payments: {tripsToday}
          {'\n\n'}Send any key for menu.
        </span>
      );
    case 'invalid':
      return (
        <span className="text-red-700">
          {screen.message}
          {'\n\n'}Send any key to go back.
        </span>
      );
    case 'ended':
      return (
        <span className="text-zinc-500">
          Session ended.{'\n\n'}Asante for riding with SatoRide. Move. Earn. Save. Thrive.
        </span>
      );
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
