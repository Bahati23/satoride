import { Zap } from 'lucide-react';
import { useAllPayments } from '@/hooks/usePayments';
import { formatKes } from '@/lib/satoride';
import { SERVICE_TYPE_KEYS, useTranslation } from '@/lib/i18n';
import { Skeleton } from '@/components/ui/skeleton';

/**
 * Live strip of the latest fare payments across the platform — proof that the
 * records layer is real Nostr data, not a screenshot.
 */
export function ActivityTicker({ limit = 6 }: { limit?: number }) {
  const { data: payments, isLoading } = useAllPayments(30);
  const { t, timeAgo } = useTranslation();
  const latest = payments?.slice(0, limit) ?? [];

  if (isLoading) {
    return (
      <div className="flex gap-3 overflow-hidden">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-10 w-44 shrink-0 rounded-full" />
        ))}
      </div>
    );
  }

  if (latest.length === 0) return null;

  return (
    <div
      className="flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      aria-label={t('ticker.aria')}
    >
      {latest.map((payment) => (
        <div
          key={payment.id}
          className="bg-card flex shrink-0 items-center gap-2 rounded-full border py-1.5 pl-2 pr-3.5 text-sm shadow-sm"
        >
          <span className="grid size-6 place-items-center rounded-full bg-amber-500/15">
            <Zap className="size-3 fill-amber-500 text-amber-500" aria-hidden />
          </span>
          <span className="font-semibold tabular-nums">{formatKes(payment.amount)}</span>
          <span className="text-muted-foreground text-xs">
            {t(SERVICE_TYPE_KEYS[payment.service])} · {timeAgo(payment.createdAt)}
          </span>
        </div>
      ))}
    </div>
  );
}
