import { Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  formatKes,
  kesToSats,
  type VehicleService,
} from '@/lib/satoride';
import { SERVICE_TYPE_KEYS, useTranslation } from '@/lib/i18n';
import { ServiceIcon } from './ServiceIcon';

export function VehicleCard({
  service,
  onPay,
}: {
  service: VehicleService;
  onPay: (service: VehicleService) => void;
}) {
  const { t } = useTranslation();

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-950/10">
      <CardContent className="space-y-4 p-4">
        <div className="flex items-start gap-3">
          <ServiceIcon type={service.type} />
          <div className="min-w-0 flex-1">
            <p className="truncate font-semibold leading-tight">{service.name}</p>
            <p className="text-muted-foreground mt-0.5 truncate text-sm">
              {service.route || t(SERVICE_TYPE_KEYS[service.type])}
            </p>
          </div>
          {service.plate && (
            <Badge variant="outline" className="shrink-0 font-mono text-[11px] tracking-wide">
              {service.plate}
            </Badge>
          )}
        </div>

        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="font-display text-2xl font-bold tabular-nums leading-none">
              {formatKes(service.fare)}
            </p>
            <p className="mt-1 text-xs font-medium text-amber-600 dark:text-amber-400">
              ⚡ {kesToSats(service.fare).toLocaleString()} {t('wallet.sats')}
            </p>
          </div>
          <Button
            size="sm"
            className="gap-1.5 rounded-full font-bold"
            onClick={() => onPay(service)}
            aria-label={t('vcard.payAria', { fare: formatKes(service.fare), name: service.name })}
          >
            <Zap className="size-3.5 fill-current" aria-hidden />
            {t('vcard.pay')}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
