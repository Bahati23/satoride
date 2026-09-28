import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSeoMeta } from '@unhead/react';
import { ArrowLeft, Zap } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { SiteHeader } from '@/components/satoride/SiteHeader';
import { SiteFooter } from '@/components/satoride/SiteFooter';
import { ServiceIcon } from '@/components/satoride/ServiceIcon';
import { PayDialog } from '@/components/satoride/PayDialog';
import { EmptyState } from '@/components/satoride/EmptyState';
import { useVehicle } from '@/hooks/useVehicles';
import { SERVICE_TYPE_KEYS, useTranslation } from '@/lib/i18n';
import { formatKes, kesToSats } from '@/lib/satoride';

/**
 * The page a passenger lands on after scanning a vehicle QR code
 * (the QR encodes an naddr URL handled by the NIP-19 router).
 */
export function VehiclePayPage({ pubkey, d }: { pubkey: string; d: string }) {
  const { data: service, isLoading } = useVehicle(pubkey, d);
  const [payOpen, setPayOpen] = useState(false);
  const { t } = useTranslation();

  useSeoMeta({
    title: service
      ? t('seo.payService.title', { name: service.name })
      : t('seo.payService.titleFallback'),
    description: service
      ? t('seo.payService.desc', { fare: formatKes(service.fare), name: service.name })
      : t('seo.payService.descFallback'),
  });

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="container flex flex-1 flex-col items-center py-10">
        <div className="w-full max-w-md space-y-6">
          <Button asChild variant="ghost" size="sm" className="gap-1.5 -ml-2">
            <Link to="/ride">
              <ArrowLeft className="size-4" aria-hidden />
              {t('vp.back')}
            </Link>
          </Button>

          {isLoading ? (
            <Card>
              <CardContent className="space-y-5 p-6">
                <div className="flex items-center gap-3">
                  <Skeleton className="size-14 rounded-2xl" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-5 w-2/3" />
                    <Skeleton className="h-4 w-1/3" />
                  </div>
                </div>
                <Skeleton className="mx-auto h-12 w-40" />
                <Skeleton className="h-12 w-full rounded-xl" />
              </CardContent>
            </Card>
          ) : !service ? (
            <EmptyState title={t('vp.notFoundTitle')} description={t('vp.notFoundDesc')} />
          ) : (
            <>
              <Card className="overflow-hidden">
                <div className="bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-4 text-orange-50">
                  <p className="font-display text-xs font-bold tracking-[0.25em]">SATORIDE</p>
                  <p className="mt-1 text-sm opacity-90">{t('vp.scanned')}</p>
                </div>
                <CardContent className="space-y-6 p-6">
                  <div className="flex items-center gap-4">
                    <ServiceIcon type={service.type} className="size-14" iconClassName="size-7" />
                    <div className="min-w-0">
                      <p className="truncate text-lg font-bold">{service.name}</p>
                      <p className="text-muted-foreground truncate text-sm">
                        {service.route || t(SERVICE_TYPE_KEYS[service.type])}
                      </p>
                    </div>
                    {service.plate && (
                      <Badge variant="outline" className="ml-auto shrink-0 font-mono">
                        {service.plate}
                      </Badge>
                    )}
                  </div>

                  <div className="py-2 text-center">
                    <p className="text-muted-foreground text-xs font-semibold uppercase tracking-widest">
                      {t('vp.fare')}
                    </p>
                    <p className="font-display mt-1 text-6xl font-extrabold tabular-nums">
                      {formatKes(service.fare)}
                    </p>
                    <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-amber-600 dark:text-amber-400">
                      <Zap className="size-4 fill-current" aria-hidden />
                      {t('vp.satsLine', { sats: kesToSats(service.fare).toLocaleString() })}
                    </p>
                  </div>

                  <Button
                    size="lg"
                    className="w-full gap-2 rounded-xl text-lg font-bold shadow-lg shadow-orange-900/20"
                    onClick={() => setPayOpen(true)}
                  >
                    <Zap className="size-5 fill-current" aria-hidden />
                    {t('vp.pay', { fare: formatKes(service.fare) })}
                  </Button>

                  <p className="text-muted-foreground text-center text-xs leading-relaxed">
                    {t('vp.noSignup')}
                  </p>
                </CardContent>
              </Card>

              <PayDialog service={service} open={payOpen} onOpenChange={setPayOpen} />
            </>
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
