import { Link } from 'react-router-dom';
import { useSeoMeta } from '@unhead/react';
import {
  Accessibility,
  ArrowRight,
  BadgeCheck,
  Bus,
  CircleDollarSign,
  Eye,
  HandHeart,
  History,
  Landmark,
  Motorbike,
  PiggyBank,
  QrCode,
  Shield,
  Smartphone,
  SquareParking,
  Wifi,
  Zap,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { SiteHeader } from '@/components/satoride/SiteHeader';
import { SiteFooter } from '@/components/satoride/SiteFooter';
import { ActivityTicker } from '@/components/satoride/ActivityTicker';
import { useTranslation } from '@/lib/i18n';
import type { TranslationKey } from '@/lib/locales/en';

export default function Index() {
  const { t } = useTranslation();

  useSeoMeta({
    title: t('seo.home.title'),
    description: t('seo.home.desc'),
  });

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <Hero />
        <Problem />
        <CoreInsight />
        <HowItWorks />
        <OneWallet />
        <WorkerFeatures />
        <HauteFramework />
        <CrossBorder />
        <FinalCta />
      </main>

      <SiteFooter />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden">
      {/* Backdrop washes */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(42rem 28rem at 85% -10%, hsl(21 90% 47% / 0.14), transparent 60%), radial-gradient(36rem 26rem at -10% 30%, hsl(152 56% 36% / 0.10), transparent 60%), radial-gradient(30rem 22rem at 60% 110%, hsl(42 96% 46% / 0.12), transparent 60%)',
        }}
      />

      <div className="container grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-fade-up space-y-7">
          <p className="bg-card inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold tracking-wide shadow-sm">
            <Zap className="size-3.5 fill-amber-500 text-amber-500" aria-hidden />
            {t('hero.badge')}
          </p>

          <h1 className="font-display text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
            {t('hero.title1')}
            <br />
            {t('hero.title2')}{' '}
            <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              {t('hero.title3')}
            </span>
          </h1>

          <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="gap-2 rounded-full px-6 text-base font-bold shadow-lg shadow-orange-900/20">
              <Link to="/ride">
                <QrCode className="size-5" aria-hidden />
                {t('hero.ctaPay')}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 rounded-full px-6 text-base font-semibold">
              <Link to="/worker">
                {t('hero.ctaWorker')}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
          </div>

          <div className="space-y-2.5 pt-2">
            <p className="text-muted-foreground flex items-center gap-2 text-xs font-semibold uppercase tracking-widest">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              {t('hero.live')}
            </p>
            <ActivityTicker />
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:150ms]">
          <WorkerCardMock />
        </div>
      </div>
    </section>
  );
}

/** Stylised preview of the worker dashboard — the product's "aha" moment. */
function WorkerCardMock() {
  const { t } = useTranslation();
  const recent = [80, 150, 100, 70, 80];

  return (
    <div className="relative mx-auto max-w-md">
      {/* Glow */}
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-orange-500/25 via-amber-400/10 to-emerald-500/20 blur-2xl"
      />
      <Card className="overflow-hidden rounded-3xl border shadow-2xl shadow-orange-950/15">
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 px-5 py-4 text-orange-50">
          <div className="flex items-center justify-between">
            <p className="font-display text-sm font-bold tracking-[0.22em]">SATORIDE</p>
            <p className="text-xs font-medium opacity-90">{t('hero.mockRider')}</p>
          </div>
          <p className="mt-3 text-xs uppercase tracking-wider opacity-80">{t('hero.mockToday')}</p>
          <p className="font-display text-4xl font-extrabold tabular-nums">KSh 4,280</p>
          <div className="mt-2 flex gap-4 text-xs font-medium">
            <span>{t('hero.mockTrips')}</span>
            <span>{t('hero.mockPassengers')}</span>
          </div>
        </div>

        <CardContent className="space-y-4 p-5">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-emerald-500/10 p-3">
              <p className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                <PiggyBank className="size-3.5" aria-hidden /> {t('hero.mockAutoSave')}
              </p>
              <p className="mt-1 text-lg font-bold tabular-nums">KSh 214</p>
            </div>
            <div className="rounded-xl bg-amber-500/10 p-3">
              <p className="flex items-center gap-1.5 text-xs font-semibold text-amber-700 dark:text-amber-400">
                <Shield className="size-3.5" aria-hidden /> {t('hero.mockEmergency')}
              </p>
              <p className="mt-1 text-lg font-bold tabular-nums">KSh 8,450</p>
            </div>
          </div>

          <div>
            <div className="mb-1.5 flex justify-between text-xs font-medium">
              <span className="text-muted-foreground">{t('hero.mockGoal')}</span>
              <span className="tabular-nums">42%</span>
            </div>
            <Progress value={42} className="h-2" />
          </div>

          <div className="space-y-1.5 border-t pt-3">
            <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">
              {t('hero.mockRecent')}
            </p>
            {recent.map((amount, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2">
                  <BadgeCheck className="size-4 text-emerald-500" aria-hidden />
                  <span className="tabular-nums font-medium">KSh {amount}</span>
                </span>
                <span className="text-muted-foreground text-xs tabular-nums">
                  ⚡ {(amount * 100).toLocaleString()} sats
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Problem                                                             */
/* ------------------------------------------------------------------ */

function Problem() {
  const { t } = useTranslation();
  const passengerItems: TranslationKey[] = ['problem.p1', 'problem.p2', 'problem.p3', 'problem.p4'];
  const workerItems: TranslationKey[] = ['problem.w1', 'problem.w2', 'problem.w3', 'problem.w4'];

  return (
    <section className="container space-y-10 py-16 md:py-20">
      <SectionHeading
        eyebrow={t('problem.eyebrow')}
        title={t('problem.title')}
        description={t('problem.desc')}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-l-4 border-l-orange-500">
          <CardContent className="space-y-4 p-6">
            <h3 className="font-display text-xl font-bold">{t('problem.passengerTitle')}</h3>
            <ul className="text-muted-foreground space-y-2.5 text-sm leading-relaxed">
              {passengerItems.map((key) => (
                <li key={key} className="flex gap-2.5">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-orange-500" aria-hidden />
                  {t(key)}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-emerald-600">
          <CardContent className="space-y-4 p-6">
            <h3 className="font-display text-xl font-bold">{t('problem.workerTitle')}</h3>
            <ul className="text-muted-foreground space-y-2.5 text-sm leading-relaxed">
              {workerItems.map((key) => (
                <li key={key} className="flex gap-2.5">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-600" aria-hidden />
                  {t(key)}
                </li>
              ))}
            </ul>
            <blockquote className="rounded-xl bg-secondary p-4 text-sm italic leading-relaxed">
              {t('problem.quote')}
            </blockquote>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Core insight                                                        */
/* ------------------------------------------------------------------ */

function CoreInsight() {
  const { t } = useTranslation();

  const steps: { label: TranslationKey; detail: TranslationKey }[] = [
    { label: 'insight.s1t', detail: 'insight.s1d' },
    { label: 'insight.s2t', detail: 'insight.s2d' },
    { label: 'insight.s3t', detail: 'insight.s3d' },
    { label: 'insight.s4t', detail: 'insight.s4d' },
    { label: 'insight.s5t', detail: 'insight.s5d' },
  ];

  return (
    <section className="border-y bg-gradient-to-b from-orange-500/[0.06] to-transparent">
      <div className="container space-y-10 py-16 md:py-20">
        <SectionHeading
          eyebrow={t('insight.eyebrow')}
          title={t('insight.title')}
          description={t('insight.desc')}
        />

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <li key={step.label} className="relative">
              <Card className="h-full transition-transform duration-300 hover:-translate-y-1">
                <CardContent className="flex h-full flex-col gap-2 p-5">
                  <span className="font-display text-sm font-extrabold text-primary">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="font-display text-lg font-bold">{t(step.label)}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(step.detail)}</p>
                </CardContent>
              </Card>
              {i < steps.length - 1 && (
                <ArrowRight
                  className="absolute -right-3.5 top-1/2 z-10 hidden size-5 -translate-y-1/2 text-orange-500 lg:block"
                  aria-hidden
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* How it works                                                        */
/* ------------------------------------------------------------------ */

function HowItWorks() {
  const { t } = useTranslation();

  const steps: { icon: typeof QrCode; title: TranslationKey; description: TranslationKey }[] = [
    { icon: QrCode, title: 'how.s1t', description: 'how.s1d' },
    { icon: Zap, title: 'how.s2t', description: 'how.s2d' },
    { icon: BadgeCheck, title: 'how.s3t', description: 'how.s3d' },
  ];

  return (
    <section className="container space-y-10 py-16 md:py-20">
      <SectionHeading
        eyebrow={t('how.eyebrow')}
        title={t('how.title')}
        description={t('how.desc')}
      />

      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <div key={step.title} className="relative">
            <Card className="h-full">
              <CardContent className="space-y-4 p-6">
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-orange-500/12 text-orange-600 dark:text-orange-400">
                    <step.icon className="size-6" aria-hidden />
                  </span>
                  <span className="font-display text-4xl font-extrabold text-muted">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold">{t(step.title)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(step.description)}</p>
              </CardContent>
            </Card>
            {i < steps.length - 1 && (
              <div
                aria-hidden
                className="route-line absolute -right-6 top-1/2 hidden w-8 -translate-y-1/2 text-orange-400 md:block"
              />
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Button asChild size="lg" className="gap-2 rounded-full px-8 font-bold">
          <Link to="/ride">
            {t('how.cta')}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </Button>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* One wallet, every ride                                              */
/* ------------------------------------------------------------------ */

function OneWallet() {
  const { t } = useTranslation();

  const services: { icon: typeof Bus; name: TranslationKey; fare: string; note: TranslationKey }[] = [
    { icon: Bus, name: 'onewallet.matatu', fare: 'KSh 80', note: 'onewallet.matatuNote' },
    { icon: Motorbike, name: 'onewallet.boda', fare: 'KSh 150', note: 'onewallet.bodaNote' },
    { icon: SquareParking, name: 'onewallet.parking', fare: 'KSh 50/hr', note: 'onewallet.parkingNote' },
    { icon: Zap, name: 'onewallet.charging', fare: 'KSh 30', note: 'onewallet.chargingNote' },
    { icon: Wifi, name: 'onewallet.wifi', fare: 'KSh 5', note: 'onewallet.wifiNote' },
  ];

  return (
    <section className="border-y bg-secondary/50">
      <div className="container space-y-10 py-16 md:py-20">
        <SectionHeading
          eyebrow={t('onewallet.eyebrow')}
          title={t('onewallet.title')}
          description={t('onewallet.desc')}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <Card key={service.name} className="transition-transform duration-300 hover:-translate-y-1">
              <CardContent className="flex h-full flex-col gap-3 p-5">
                <service.icon className="size-7 text-primary" aria-hidden />
                <p className="font-display font-bold leading-tight">{t(service.name)}</p>
                <p className="text-muted-foreground mt-auto text-xs leading-relaxed">{t(service.note)}</p>
                <p className="font-display text-lg font-extrabold tabular-nums text-primary">
                  {service.fare}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Worker features                                                     */
/* ------------------------------------------------------------------ */

function WorkerFeatures() {
  const { t } = useTranslation();

  return (
    <section className="container space-y-10 py-16 md:py-20">
      <SectionHeading
        eyebrow={t('wf.eyebrow')}
        title={t('wf.title')}
        description={t('wf.desc')}
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="overflow-hidden">
          <CardContent className="space-y-4 p-6">
            <span className="grid size-12 place-items-center rounded-2xl bg-emerald-500/12 text-emerald-600 dark:text-emerald-400">
              <PiggyBank className="size-6" aria-hidden />
            </span>
            <h3 className="font-display text-xl font-bold">{t('wf.saveTitle')}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{t('wf.saveDesc')}</p>
            <div className="space-y-2 rounded-xl bg-secondary p-3 text-sm">
              <div className="flex justify-between">
                <span>{t('wf.fareReceived')}</span>
                <span className="font-semibold tabular-nums">KSh 200</span>
              </div>
              <div className="flex justify-between text-emerald-600 dark:text-emerald-400">
                <span>{t('wf.autoSaved')}</span>
                <span className="font-semibold tabular-nums">KSh 10</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span>{t('wf.available')}</span>
                <span className="font-semibold tabular-nums">KSh 190</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardContent className="space-y-4 p-6">
            <span className="grid size-12 place-items-center rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400">
              <Shield className="size-6" aria-hidden />
            </span>
            <h3 className="font-display text-xl font-bold">{t('wf.efTitle')}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{t('wf.efDesc')}</p>
            <div className="space-y-2 rounded-xl bg-secondary p-3">
              <div className="flex justify-between text-sm">
                <span>{t('wf.efProgress')}</span>
                <span className="font-semibold tabular-nums">42%</span>
              </div>
              <Progress value={42} className="h-2.5" />
              <p className="text-muted-foreground text-xs">{t('wf.efMonth')}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardContent className="space-y-4 p-6">
            <span className="grid size-12 place-items-center rounded-2xl bg-sky-500/12 text-sky-600 dark:text-sky-400">
              <History className="size-6" aria-hidden />
            </span>
            <h3 className="font-display text-xl font-bold">{t('wf.historyTitle')}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{t('wf.historyDesc')}</p>
            <div className="grid grid-cols-2 gap-2 rounded-xl bg-secondary p-3 text-sm">
              <MiniStat label={t('wf.stat30')} value="KSh 78,400" />
              <MiniStat label={t('wf.statTrips')} value="612" />
              <MiniStat label={t('wf.statAvg')} value="KSh 3,267" />
              <MiniStat label={t('wf.statSaved')} value="KSh 3,920" />
            </div>
          </CardContent>
        </Card>
      </div>

      <p className="text-muted-foreground mx-auto max-w-2xl text-center text-sm leading-relaxed">
        {t('wf.consent')}
      </p>
    </section>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-muted-foreground text-[11px] uppercase tracking-wide">{label}</p>
      <p className="font-semibold tabular-nums">{value}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* HAUTE framework                                                     */
/* ------------------------------------------------------------------ */

function HauteFramework() {
  const { t } = useTranslation();

  const items: { icon: typeof HandHeart; letter: string; title: TranslationKey; description: TranslationKey }[] = [
    { icon: HandHeart, letter: 'H', title: 'haute.hTitle', description: 'haute.hDesc' },
    { icon: Accessibility, letter: 'A', title: 'haute.aTitle', description: 'haute.aDesc' },
    { icon: Zap, letter: 'U', title: 'haute.uTitle', description: 'haute.uDesc' },
    { icon: Eye, letter: 'T', title: 'haute.tTitle', description: 'haute.tDesc' },
    { icon: Smartphone, letter: 'E', title: 'haute.eTitle', description: 'haute.eDesc' },
  ];

  return (
    <section className="border-y bg-secondary/50">
      <div className="container space-y-10 py-16 md:py-20">
        <SectionHeading
          eyebrow={t('haute.eyebrow')}
          title={t('haute.title')}
          description={t('haute.desc')}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item) => (
            <Card key={item.letter} className="transition-transform duration-300 hover:-translate-y-1">
              <CardContent className="space-y-3 p-5">
                <div className="flex items-center gap-3">
                  <span className="font-display grid size-10 place-items-center rounded-xl bg-primary text-lg font-extrabold text-primary-foreground">
                    {item.letter}
                  </span>
                  <item.icon className="size-5 text-muted-foreground" aria-hidden />
                </div>
                <p className="font-display font-bold">{t(item.title)}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(item.description)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Cross-border vision                                                 */
/* ------------------------------------------------------------------ */

function CrossBorder() {
  const { t } = useTranslation();
  const countries = ['Kenya', 'Uganda', 'Tanzania', 'Ghana', 'Nigeria'];

  return (
    <section className="container space-y-10 py-16 md:py-20">
      <div className="mx-auto max-w-3xl space-y-8 text-center">
        <SectionHeading
          eyebrow={t('cb.eyebrow')}
          title={t('cb.title')}
          description={t('cb.desc')}
        />
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          {countries.map((country, i) => (
            <span key={country} className="flex items-center gap-3">
              <span className="bg-card rounded-full border px-4 py-2 text-sm font-semibold shadow-sm">
                {country}
              </span>
              {i < countries.length - 1 && (
                <Zap className="size-4 fill-amber-500 text-amber-500" aria-hidden />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Final CTA                                                           */
/* ------------------------------------------------------------------ */

function FinalCta() {
  const { t } = useTranslation();

  return (
    <section className="container pb-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 px-6 py-14 text-center text-orange-50 shadow-2xl shadow-orange-900/25 md:py-20">
        <div
          aria-hidden
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, white 1.5px, transparent 1.5px), radial-gradient(circle at 80% 60%, white 1.5px, transparent 1.5px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="relative space-y-6">
          <h2 className="font-display mx-auto max-w-2xl text-4xl font-extrabold leading-tight md:text-5xl">
            {t('cta.title')}
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-orange-100">
            {t('cta.desc')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" variant="secondary" className="gap-2 rounded-full px-7 font-bold">
              <Link to="/ride">
                <QrCode className="size-5" aria-hidden />
                {t('cta.pay')}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 rounded-full border-orange-200/60 bg-transparent px-7 font-bold text-orange-50 hover:bg-white/10 hover:text-white"
            >
              <Link to="/worker">
                <Landmark className="size-5" aria-hidden />
                {t('cta.worker')}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 rounded-full border-orange-200/60 bg-transparent px-7 font-bold text-orange-50 hover:bg-white/10 hover:text-white"
            >
              <Link to="/ussd">
                <CircleDollarSign className="size-5" aria-hidden />
                {t('cta.ussd')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Shared bits                                                         */
/* ------------------------------------------------------------------ */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl space-y-3 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="font-display text-3xl font-extrabold leading-tight md:text-4xl">{title}</h2>
      {description && (
        <p className="text-muted-foreground text-base leading-relaxed">{description}</p>
      )}
    </div>
  );
}
