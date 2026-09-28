import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSeoMeta } from '@unhead/react';
import { ArrowRight, ReceiptText, Search } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SiteHeader } from '@/components/satoride/SiteHeader';
import { SiteFooter } from '@/components/satoride/SiteFooter';
import { VehicleCard } from '@/components/satoride/VehicleCard';
import { PayDialog } from '@/components/satoride/PayDialog';
import { EmptyState } from '@/components/satoride/EmptyState';
import { useVehicles } from '@/hooks/useVehicles';
import { SERVICE_TYPE_KEYS, useTranslation } from '@/lib/i18n';
import {
  SERVICE_TYPES,
  type ServiceType,
  type VehicleService,
} from '@/lib/satoride';
import { cn } from '@/lib/utils';

export default function RidePage() {
  const { t } = useTranslation();

  useSeoMeta({
    title: t('seo.ride.title'),
    description: t('seo.ride.desc'),
  });

  const { data: services, isLoading } = useVehicles();
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<ServiceType | 'all'>('all');
  const [payTarget, setPayTarget] = useState<VehicleService | null>(null);

  const filtered = useMemo(() => {
    if (!services) return [];
    const q = query.trim().toLowerCase();
    return services.filter((service) => {
      if (typeFilter !== 'all' && service.type !== typeFilter) return false;
      if (!q) return true;
      return [service.name, service.plate ?? '', service.route]
        .join(' ')
        .toLowerCase()
        .includes(q);
    });
  }, [services, query, typeFilter]);

  const activeTypes = useMemo(() => {
    const present = new Set(services?.map((s) => s.type));
    return SERVICE_TYPES.filter((type) => present.has(type));
  }, [services]);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="container flex-1 space-y-8 py-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="space-y-2">
            <h1 className="font-display text-4xl font-extrabold">{t('ride.title')}</h1>
            <p className="text-muted-foreground max-w-md">{t('ride.desc')}</p>
          </div>
          <Button asChild variant="outline" className="gap-2 rounded-full">
            <Link to="/receipts">
              <ReceiptText className="size-4" aria-hidden />
              {t('ride.myReceipts')}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="text-muted-foreground absolute left-3 top-1/2 size-4 -translate-y-1/2" aria-hidden />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('ride.searchPlaceholder')}
              className="pl-9"
              aria-label={t('ride.searchAria')}
            />
          </div>
          <div className="flex flex-wrap gap-1.5" role="group" aria-label={t('ride.filterAria')}>
            <FilterPill
              active={typeFilter === 'all'}
              onClick={() => setTypeFilter('all')}
              label={t('ride.all')}
            />
            {activeTypes.map((type) => (
              <FilterPill
                key={type}
                active={typeFilter === type}
                onClick={() => setTypeFilter(type)}
                label={t(SERVICE_TYPE_KEYS[type])}
              />
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i}>
                <CardContent className="space-y-4 p-4">
                  <div className="flex items-center gap-3">
                    <Skeleton className="size-11 rounded-xl" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-4 w-2/3" />
                      <Skeleton className="h-3 w-1/3" />
                    </div>
                  </div>
                  <div className="flex items-end justify-between">
                    <Skeleton className="h-7 w-20" />
                    <Skeleton className="h-8 w-16 rounded-full" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <EmptyState title={t('ride.emptyTitle')} description={t('ride.emptyDesc')} />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((service) => (
              <VehicleCard key={service.coordinate} service={service} onPay={setPayTarget} />
            ))}
          </div>
        )}
      </main>

      <PayDialog
        service={payTarget}
        open={payTarget !== null}
        onOpenChange={(open) => !open && setPayTarget(null)}
      />

      <SiteFooter />
    </div>
  );
}

function FilterPill({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors',
        active
          ? 'border-primary bg-primary text-primary-foreground'
          : 'bg-card text-muted-foreground hover:text-foreground',
      )}
    >
      {label}
    </button>
  );
}
