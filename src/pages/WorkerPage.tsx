import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { useSeoMeta } from '@unhead/react';
import {
  BadgeCheck,
  Bus,
  CalendarDays,
  Landmark,
  PiggyBank,
  Plus,
  QrCode,
  Route,
  Shield,
  Sparkles,
  Zap,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Skeleton } from '@/components/ui/skeleton';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

import { SiteHeader } from '@/components/satoride/SiteHeader';
import { SiteFooter } from '@/components/satoride/SiteFooter';
import { StatCard } from '@/components/satoride/StatCard';
import { EmptyState } from '@/components/satoride/EmptyState';
import { ServiceIcon } from '@/components/satoride/ServiceIcon';
import { VehicleQrDialog } from '@/components/satoride/VehicleQrDialog';
import { LoginArea } from '@/components/auth/LoginArea';

import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useToast } from '@/hooks/useToast';
import { useMyVehicles } from '@/hooks/useVehicles';
import { useWorkerPayments } from '@/hooks/usePayments';
import { useWorkerSettings } from '@/hooks/useWorkerSettings';
import {
  useRegisterVehicle,
  useSimulatePassengerPayment,
  useUpdateWorkerSettings,
} from '@/hooks/useSatorideActions';
import {
  DEMO_FLEET_PUBKEY,
  SERVICE_TYPES,
  SERVICE_TYPE_LABEL,
  formatKes,
  isToday,
  timeAgo,
  type ServiceType,
  type VehicleService,
} from '@/lib/satoride';

export default function WorkerPage() {
  useSeoMeta({
    title: 'Worker dashboard — SatoRide',
    description:
      'Track earnings in real time, grow automatic savings and an emergency fund with every fare.',
  });

  const { user } = useCurrentUser();
  const workerPubkey = user?.pubkey ?? DEMO_FLEET_PUBKEY;
  const isDemo = !user;

  const { data: vehicles, isLoading: vehiclesLoading } = useMyVehicles(workerPubkey);
  const { data: payments, isLoading: paymentsLoading } = useWorkerPayments(workerPubkey);
  const { data: settings } = useWorkerSettings(workerPubkey);

  const stats = useMemo(() => {
    const all = payments ?? [];
    const today = all.filter((p) => isToday(p.createdAt));

    const sum = (list: typeof all) => list.reduce((s, p) => s + p.amount, 0);
    const grossToday = sum(today);
    const grossAll = sum(all);

    // Last 30 days
    const thirtyDaysAgo = Math.floor(Date.now() / 1000) - 30 * 24 * 60 * 60;
    const last30 = all.filter((p) => p.createdAt >= thirtyDaysAgo);
    const gross30 = sum(last30);
    const activeDays = new Set(
      last30.map((p) => new Date(p.createdAt * 1000).toDateString()),
    ).size;

    // Last 7 days for the chart
    const days: { label: string; total: number }[] = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dayStart = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() / 1000;
      const total = sum(
        all.filter(
          (p) => p.createdAt >= dayStart && p.createdAt < dayStart + 24 * 60 * 60,
        ),
      );
      days.push({
        label: date.toLocaleDateString('en-KE', { weekday: 'short' }),
        total,
      });
    }

    const sevenDaysAgo = Math.floor(Date.now() / 1000) - 7 * 24 * 60 * 60;
    const trips7 = all.filter((p) => p.createdAt >= sevenDaysAgo).length;

    return {
      today,
      grossToday,
      grossAll,
      gross30,
      tripsToday: today.length,
      trips7,
      trips30: last30.length,
      activeDays,
      avgPerDay: activeDays > 0 ? gross30 / activeDays : 0,
      days,
    };
  }, [payments]);

  const savingsToday = (stats.grossToday * settings.savingsPercent) / 100;
  const emergencyTotal = (stats.grossAll * settings.emergencyPercent) / 100;
  const savingsTotal = (stats.grossAll * settings.savingsPercent) / 100;
  const availableToday = stats.grossToday - savingsToday - (stats.grossToday * settings.emergencyPercent) / 100;
  const emergencyProgress = Math.min(
    100,
    Math.round((emergencyTotal / settings.emergencyGoal) * 100),
  );

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="container flex-1 space-y-8 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2">
            <h1 className="font-display text-4xl font-extrabold">Worker dashboard</h1>
            <p className="text-muted-foreground max-w-lg">
              Every fare becomes earnings history, automatic savings and an
              emergency fund — live from Nostr.
            </p>
          </div>
          {isDemo && (
            <Badge variant="outline" className="border-amber-500/50 bg-amber-500/10 px-3 py-1.5 text-amber-700 dark:text-amber-300">
              Viewing demo fleet data
            </Badge>
          )}
        </div>

        {isDemo && (
          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="flex flex-col items-start gap-3 p-5 sm:flex-row sm:items-center">
              <Sparkles className="size-6 shrink-0 text-primary" aria-hidden />
              <p className="flex-1 text-sm leading-relaxed">
                This is the <strong>demo fleet</strong> dashboard. Log in to register
                your own matatu, boda or service, set your savings rules and start
                receiving payments.
              </p>
              <LoginArea className="max-w-44" />
            </CardContent>
          </Card>
        )}

        {/* Today hero */}
        <Card className="overflow-hidden">
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-6 text-orange-50">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-80">
                  Today's earnings
                </p>
                <p className="font-display mt-1 text-5xl font-extrabold tabular-nums">
                  {formatKes(stats.grossToday)}
                </p>
                <p className="mt-1 text-sm opacity-90">
                  {stats.tripsToday} payment{stats.tripsToday === 1 ? '' : 's'} ·{' '}
                  {formatKes(availableToday)} available after savings
                </p>
              </div>
              <div className="flex gap-6 text-sm">
                <div>
                  <p className="opacity-80">Auto-saved</p>
                  <p className="text-lg font-bold tabular-nums">{formatKes(savingsToday)}</p>
                </div>
                <div>
                  <p className="opacity-80">7-day trips</p>
                  <p className="text-lg font-bold tabular-nums">{stats.trips7}</p>
                </div>
              </div>
            </div>
          </div>
          <CardContent className="p-5">
            <WeeklyBars days={stats.days} />
          </CardContent>
        </Card>

        {/* Stat cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={PiggyBank}
            tone="leaf"
            label="Total saved"
            value={formatKes(savingsTotal)}
            hint={`${settings.savingsPercent}% of every payment`}
          />
          <StatCard
            icon={Shield}
            tone="gold"
            label="Emergency fund"
            value={formatKes(emergencyTotal)}
            hint={`${emergencyProgress}% of ${formatKes(settings.emergencyGoal)} goal`}
          />
          <StatCard
            icon={Route}
            tone="flame"
            label="Trips (30 days)"
            value={String(stats.trips30)}
            hint={`${stats.activeDays} active days`}
          />
          <StatCard
            icon={CalendarDays}
            label="Avg per active day"
            value={formatKes(stats.avgPerDay)}
            hint={`${formatKes(stats.gross30)} in 30 days`}
          />
        </div>

        {/* Emergency goal progress */}
        <Card>
          <CardContent className="space-y-3 p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="flex items-center gap-2 font-semibold">
                <Shield className="size-5 text-amber-500" aria-hidden />
                Emergency fund goal
              </p>
              <p className="text-muted-foreground text-sm tabular-nums">
                {formatKes(emergencyTotal)} of {formatKes(settings.emergencyGoal)} ·{' '}
                {emergencyProgress}%
              </p>
            </div>
            <Progress value={emergencyProgress} className="h-3" />
            <p className="text-muted-foreground text-xs leading-relaxed">
              For breakdowns, medical costs and slow weeks. {settings.emergencyPercent}%
              of every fare flows here automatically — the worker controls the rule
              and the withdrawals.
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          {/* Recent payments */}
          <Card>
            <CardHeader className="flex-row items-center justify-between space-y-0">
              <CardTitle className="font-display text-lg">Live payments</CardTitle>
              <span className="text-muted-foreground flex items-center gap-1.5 text-xs">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                updating live
              </span>
            </CardHeader>
            <CardContent className="space-y-2">
              {paymentsLoading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton key={i} className="h-12 w-full rounded-lg" />
                ))
              ) : stats.today.length === 0 && (payments ?? []).length === 0 ? (
                <p className="text-muted-foreground py-8 text-center text-sm">
                  No payments yet. Share your vehicle QR to start receiving fares.
                </p>
              ) : (
                (payments ?? []).slice(0, 12).map((payment) => (
                  <div
                    key={payment.id}
                    className="hover:bg-secondary/60 flex items-center gap-3 rounded-lg px-2 py-2 transition-colors"
                  >
                    <BadgeCheck className="size-5 shrink-0 text-emerald-500" aria-hidden />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">
                        {formatKes(payment.amount)} · {SERVICE_TYPE_LABEL[payment.service]}
                      </p>
                      <p className="text-muted-foreground font-mono text-xs">
                        {payment.receipt}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-medium text-amber-600 tabular-nums dark:text-amber-400">
                        ⚡ {payment.sats.toLocaleString()}
                      </p>
                      <p className="text-muted-foreground text-xs">{timeAgo(payment.createdAt)}</p>
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>

          {/* Savings rules */}
          <SavingsRulesCard disabled={isDemo} settings={settings} />
        </div>

        {/* Vehicles */}
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-display text-2xl font-bold">Vehicles & services</h2>
            {!isDemo && <RegisterVehicleDialog />}
          </div>

          {vehiclesLoading ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-40 w-full rounded-xl" />
              ))}
            </div>
          ) : (vehicles ?? []).length === 0 ? (
            <EmptyState
              title="No vehicles registered yet"
              description="Register your matatu, boda or service to get a payment QR passengers can scan."
            >
              {!isDemo && <RegisterVehicleDialog triggerLabel="Register your first vehicle" />}
            </EmptyState>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {(vehicles ?? []).map((vehicle) => (
                <WorkerVehicleCard key={vehicle.coordinate} vehicle={vehicle} isDemo={isDemo} />
              ))}
            </div>
          )}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Weekly bar chart (CSS only)                                         */
/* ------------------------------------------------------------------ */

function WeeklyBars({ days }: { days: { label: string; total: number }[] }) {
  const max = Math.max(1, ...days.map((d) => d.total));
  return (
    <div>
      <p className="text-muted-foreground mb-3 text-xs font-semibold uppercase tracking-wider">
        Last 7 days
      </p>
      <div className="flex h-28 items-end gap-2">
        {days.map((day, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
            <span className="text-muted-foreground text-[10px] tabular-nums">
              {day.total > 0 ? day.total.toLocaleString() : ''}
            </span>
            <div
              className="w-full rounded-t-md bg-gradient-to-t from-orange-600 to-amber-400 transition-all duration-500"
              style={{ height: `${Math.max(4, (day.total / max) * 72)}px` }}
              role="img"
              aria-label={`${day.label}: KSh ${day.total}`}
            />
            <span className="text-muted-foreground text-[10px] font-medium">{day.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Savings rules                                                       */
/* ------------------------------------------------------------------ */

function SavingsRulesCard({
  disabled,
  settings,
}: {
  disabled: boolean;
  settings: { savingsPercent: number; emergencyPercent: number; emergencyGoal: number };
}) {
  const [savings, setSavings] = useState(settings.savingsPercent);
  const [emergency, setEmergency] = useState(settings.emergencyPercent);
  const [goal, setGoal] = useState(String(settings.emergencyGoal));
  const [dirty, setDirty] = useState(false);

  const updateSettings = useUpdateWorkerSettings();
  const { toast } = useToast();

  // Sync the form when settings load or change and the form is untouched.
  useEffect(() => {
    if (!dirty) {
      setSavings(settings.savingsPercent);
      setEmergency(settings.emergencyPercent);
      setGoal(String(settings.emergencyGoal));
    }
  }, [dirty, settings.savingsPercent, settings.emergencyPercent, settings.emergencyGoal]);

  const save = () => {
    const parsedGoal = Number(goal);
    updateSettings.mutate(
      {
        savingsPercent: savings,
        emergencyPercent: emergency,
        emergencyGoal: Number.isFinite(parsedGoal) && parsedGoal > 0 ? parsedGoal : 20000,
      },
      {
        onSuccess: () => {
          setDirty(false);
          toast({ title: 'Savings rules saved', description: `Every payment now auto-saves ${savings}% and puts ${emergency}% into your emergency fund.` });
        },
        onError: (error) =>
          toast({ variant: 'destructive', title: 'Could not save rules', description: error.message }),
      },
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-display flex items-center gap-2 text-lg">
          <Landmark className="size-5 text-primary" aria-hidden />
          My savings rules
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="savings-rule">Automatic savings</Label>
            <span className="font-display text-lg font-bold tabular-nums text-emerald-600 dark:text-emerald-400">
              {savings}%
            </span>
          </div>
          <Slider
            id="savings-rule"
            min={0}
            max={25}
            step={1}
            value={[savings]}
            onValueChange={([v]) => {
              setSavings(v);
              setDirty(true);
            }}
            disabled={disabled}
            aria-label="Automatic savings percent"
          />
          <p className="text-muted-foreground text-xs">
            On a {formatKes(200)} fare, {formatKes((200 * savings) / 100)} is saved
            automatically.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="emergency-rule">Emergency fund</Label>
            <span className="font-display text-lg font-bold tabular-nums text-amber-600 dark:text-amber-400">
              {emergency}%
            </span>
          </div>
          <Slider
            id="emergency-rule"
            min={0}
            max={25}
            step={1}
            value={[emergency]}
            onValueChange={([v]) => {
              setEmergency(v);
              setDirty(true);
            }}
            disabled={disabled}
            aria-label="Emergency fund percent"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="emergency-goal">Emergency goal (KSh)</Label>
          <Input
            id="emergency-goal"
            type="number"
            min={1000}
            step={500}
            value={goal}
            onChange={(e) => {
              setGoal(e.target.value);
              setDirty(true);
            }}
            disabled={disabled}
          />
        </div>

        <Button
          className="w-full rounded-xl font-semibold"
          disabled={disabled || updateSettings.isPending || !dirty}
          onClick={save}
        >
          {updateSettings.isPending ? 'Saving…' : 'Save rules'}
        </Button>
        {disabled && (
          <p className="text-muted-foreground text-center text-xs">
            Log in to set your own rules.
          </p>
        )}
      </CardContent>
    </Card>
  );
}

/* ------------------------------------------------------------------ */
/* Worker vehicle card                                                 */
/* ------------------------------------------------------------------ */

function WorkerVehicleCard({ vehicle, isDemo }: { vehicle: VehicleService; isDemo: boolean }) {
  const [qrOpen, setQrOpen] = useState(false);
  const simulate = useSimulatePassengerPayment();
  const { toast } = useToast();

  const handleSimulate = () => {
    simulate.mutate(vehicle, {
      onSuccess: () =>
        toast({
          title: 'Passenger payment simulated',
          description: `${formatKes(vehicle.fare)} just landed in Live payments.`,
        }),
      onError: (error) =>
        toast({ variant: 'destructive', title: 'Simulation failed', description: error.message }),
    });
  };

  return (
    <Card className="flex flex-col">
      <CardContent className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex items-start gap-3">
          <ServiceIcon type={vehicle.type} />
          <div className="min-w-0 flex-1">
            <p className="truncate font-semibold">{vehicle.name}</p>
            <p className="text-muted-foreground truncate text-sm">
              {vehicle.route || SERVICE_TYPE_LABEL[vehicle.type]}
            </p>
          </div>
          {vehicle.plate && (
            <Badge variant="outline" className="shrink-0 font-mono text-[11px]">
              {vehicle.plate}
            </Badge>
          )}
        </div>

        <p className="font-display text-2xl font-bold tabular-nums">
          {formatKes(vehicle.fare)}
          <span className="text-muted-foreground ml-1.5 text-xs font-normal">per trip</span>
        </p>

        <div className="mt-auto flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 gap-1.5"
            onClick={() => setQrOpen(true)}
          >
            <QrCode className="size-4" aria-hidden />
            Payment QR
          </Button>
          <Button
            variant="secondary"
            size="sm"
            className="flex-1 gap-1.5"
            onClick={handleSimulate}
            disabled={simulate.isPending}
            title="Simulate a passenger paying this fare (demo)"
          >
            <Zap className="size-4" aria-hidden />
            {simulate.isPending ? 'Paying…' : isDemo ? 'Simulate fare' : 'Simulate'}
          </Button>
        </div>
      </CardContent>

      <VehicleQrDialog service={vehicle} open={qrOpen} onOpenChange={setQrOpen} />
    </Card>
  );
}

/* ------------------------------------------------------------------ */
/* Register vehicle dialog                                             */
/* ------------------------------------------------------------------ */

function RegisterVehicleDialog({ triggerLabel }: { triggerLabel?: string }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [plate, setPlate] = useState('');
  const [type, setType] = useState<ServiceType>('matatu');
  const [route, setRoute] = useState('');
  const [fare, setFare] = useState('');

  const register = useRegisterVehicle();
  const { toast } = useToast();

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const fareNumber = Number(fare);
    if (!name.trim()) {
      toast({ variant: 'destructive', title: 'Name required', description: 'Give your vehicle or service a name.' });
      return;
    }
    if (!Number.isFinite(fareNumber) || fareNumber <= 0) {
      toast({ variant: 'destructive', title: 'Invalid fare', description: 'Enter a fare in KSh, e.g. 80.' });
      return;
    }
    register.mutate(
      { name, plate, type, route, fare: fareNumber },
      {
        onSuccess: () => {
          toast({ title: 'Vehicle registered', description: 'Your payment QR is ready to share.' });
          setOpen(false);
          setName('');
          setPlate('');
          setRoute('');
          setFare('');
        },
        onError: (error) =>
          toast({ variant: 'destructive', title: 'Registration failed', description: error.message }),
      },
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-1.5 rounded-full">
          <Plus className="size-4" aria-hidden />
          {triggerLabel ?? 'Add vehicle'}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display flex items-center gap-2">
            <Bus className="size-5 text-primary" aria-hidden />
            Register a vehicle or service
          </DialogTitle>
          <DialogDescription>
            Published to Nostr as your service listing. You can update it any time
            by registering again with the same plate.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="v-name">Name</Label>
            <Input
              id="v-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ngong Line Express"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="v-plate">Plate (optional)</Label>
              <Input
                id="v-plate"
                value={plate}
                onChange={(e) => setPlate(e.target.value)}
                placeholder="KCA 123A"
              />
            </div>
            <div className="space-y-2">
              <Label>Type</Label>
              <Select value={type} onValueChange={(v) => setType(v as ServiceType)}>
                <SelectTrigger aria-label="Service type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {SERVICE_TYPES.map((t) => (
                    <SelectItem key={t} value={t}>
                      {SERVICE_TYPE_LABEL[t]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="v-route">Route / location</Label>
            <Input
              id="v-route"
              value={route}
              onChange={(e) => setRoute(e.target.value)}
              placeholder="CBD → Ngong"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="v-fare">Fare (KSh)</Label>
            <Input
              id="v-fare"
              type="number"
              min={1}
              value={fare}
              onChange={(e) => setFare(e.target.value)}
              placeholder="80"
              required
            />
          </div>
          <Button type="submit" className="w-full rounded-xl font-semibold" disabled={register.isPending}>
            {register.isPending ? 'Publishing…' : 'Publish service'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
