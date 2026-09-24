import { useMemo } from 'react';
import { useSeoMeta } from '@unhead/react';
import { Activity, ArrowRight, CircleDollarSign, Users, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { SiteHeader } from '@/components/satoride/SiteHeader';
import { SiteFooter } from '@/components/satoride/SiteFooter';
import { StatCard } from '@/components/satoride/StatCard';
import { ServiceIcon } from '@/components/satoride/ServiceIcon';
import { EmptyState } from '@/components/satoride/EmptyState';
import { useAllPayments } from '@/hooks/usePayments';
import { useVehicles } from '@/hooks/useVehicles';
import {
  SERVICE_TYPE_LABEL,
  formatKes,
  timeAgo,
  type ServiceType,
} from '@/lib/satoride';

/** Operator / SACCO view — fleet-wide revenue and activity. */
export default function OperatorPage() {
  useSeoMeta({
    title: 'Operator dashboard — SatoRide',
    description:
      'Fleet-wide view: vehicles, transactions and revenue across the SatoRide network.',
  });

  const { data: payments, isLoading: paymentsLoading } = useAllPayments(300);
  const { data: vehicles, isLoading: vehiclesLoading } = useVehicles();

  const stats = useMemo(() => {
    const all = payments ?? [];
    const revenue = all.reduce((sum, p) => sum + p.amount, 0);
    const workers = new Set(all.map((p) => p.worker)).size;

    const byType = new Map<ServiceType, { count: number; revenue: number }>();
    for (const p of all) {
      const entry = byType.get(p.service) ?? { count: 0, revenue: 0 };
      entry.count += 1;
      entry.revenue += p.amount;
      byType.set(p.service, entry);
    }

    const byVehicle = new Map<string, { count: number; revenue: number }>();
    for (const p of all) {
      const entry = byVehicle.get(p.coordinate) ?? { count: 0, revenue: 0 };
      entry.count += 1;
      entry.revenue += p.amount;
      byVehicle.set(p.coordinate, entry);
    }

    return { revenue, count: all.length, workers, byType, byVehicle };
  }, [payments]);

  const maxTypeRevenue = Math.max(1, ...[...stats.byType.values()].map((v) => v.revenue));

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="container flex-1 space-y-8 py-10">
        <div className="space-y-2">
          <h1 className="font-display text-4xl font-extrabold">Operator dashboard</h1>
          <p className="text-muted-foreground max-w-lg">
            The view for SACCOs, fleet operators and mobility businesses — every
            vehicle, transaction and shilling, aggregated live from Nostr.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={CircleDollarSign}
            tone="flame"
            label="Total revenue"
            value={formatKes(stats.revenue)}
            hint="all recorded fares"
          />
          <StatCard
            icon={Activity}
            tone="leaf"
            label="Transactions"
            value={String(stats.count)}
            hint="confirmed payments"
          />
          <StatCard
            icon={Wallet}
            tone="gold"
            label="Active services"
            value={String(vehicles?.length ?? 0)}
            hint="published listings"
          />
          <StatCard
            icon={Users}
            label="Workers earning"
            value={String(stats.workers)}
            hint="unique payees"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          {/* Revenue by service type */}
          <Card>
            <CardHeader>
              <CardTitle className="font-display text-lg">Revenue by service</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {paymentsLoading ? (
                Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-10 w-full rounded-lg" />
                ))
              ) : stats.byType.size === 0 ? (
                <p className="text-muted-foreground py-6 text-center text-sm">
                  No transactions recorded yet.
                </p>
              ) : (
                [...stats.byType.entries()]
                  .sort((a, b) => b[1].revenue - a[1].revenue)
                  .map(([type, data]) => (
                    <div key={type} className="space-y-1.5">
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2 font-medium">
                          <ServiceIcon type={type} className="size-7" iconClassName="size-3.5" />
                          {SERVICE_TYPE_LABEL[type]}
                        </span>
                        <span className="font-semibold tabular-nums">
                          {formatKes(data.revenue)}
                        </span>
                      </div>
                      <div className="bg-secondary h-2.5 overflow-hidden rounded-full">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-orange-600 to-amber-400 transition-all duration-700"
                          style={{ width: `${(data.revenue / maxTypeRevenue) * 100}%` }}
                        />
                      </div>
                      <p className="text-muted-foreground text-xs tabular-nums">
                        {data.count} payment{data.count === 1 ? '' : 's'}
                      </p>
                    </div>
                  ))
              )}
            </CardContent>
          </Card>

          {/* Fleet table */}
          <Card>
            <CardHeader>
              <CardTitle className="font-display text-lg">Fleet performance</CardTitle>
            </CardHeader>
            <CardContent>
              {vehiclesLoading ? (
                <div className="space-y-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton key={i} className="h-10 w-full rounded-lg" />
                  ))}
                </div>
              ) : (vehicles ?? []).length === 0 ? (
                <EmptyState
                  title="No services yet"
                  description="Registered vehicles and services will appear here."
                />
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Service</TableHead>
                      <TableHead className="text-right">Fare</TableHead>
                      <TableHead className="text-right">Payments</TableHead>
                      <TableHead className="text-right">Revenue</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {(vehicles ?? []).map((vehicle) => {
                      const perf = stats.byVehicle.get(vehicle.coordinate);
                      return (
                        <TableRow key={vehicle.coordinate}>
                          <TableCell>
                            <div className="flex items-center gap-2.5">
                              <ServiceIcon type={vehicle.type} className="size-8" iconClassName="size-4" />
                              <div className="min-w-0">
                                <p className="truncate text-sm font-medium">{vehicle.name}</p>
                                <p className="text-muted-foreground truncate text-xs">
                                  {[vehicle.plate, vehicle.route].filter(Boolean).join(' · ')}
                                </p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="text-right tabular-nums">
                            {formatKes(vehicle.fare)}
                          </TableCell>
                          <TableCell className="text-right tabular-nums">
                            {perf?.count ?? 0}
                          </TableCell>
                          <TableCell className="text-right font-semibold tabular-nums">
                            {formatKes(perf?.revenue ?? 0)}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Recent transactions */}
        <Card>
          <CardHeader className="flex-row items-center justify-between space-y-0">
            <CardTitle className="font-display text-lg">Latest transactions</CardTitle>
            <Link
              to="/ride"
              className="text-primary inline-flex items-center gap-1 text-sm font-medium hover:underline"
            >
              Open passenger app
              <ArrowRight className="size-3.5" aria-hidden />
            </Link>
          </CardHeader>
          <CardContent className="space-y-2">
            {paymentsLoading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-12 w-full rounded-lg" />
              ))
            ) : (payments ?? []).length === 0 ? (
              <p className="text-muted-foreground py-6 text-center text-sm">
                No transactions yet.
              </p>
            ) : (
              (payments ?? []).slice(0, 10).map((payment) => (
                <div
                  key={payment.id}
                  className="hover:bg-secondary/60 flex items-center gap-3 rounded-lg px-2 py-2 transition-colors"
                >
                  <ServiceIcon type={payment.service} className="size-9" iconClassName="size-4" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">
                      {payment.event.content || 'Fare payment'}
                    </p>
                    <p className="text-muted-foreground font-mono text-xs">{payment.receipt}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold tabular-nums">{formatKes(payment.amount)}</p>
                    <p className="text-muted-foreground text-xs">{timeAgo(payment.createdAt)}</p>
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </main>

      <SiteFooter />
    </div>
  );
}
