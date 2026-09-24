import { CheckCircle2, Zap } from 'lucide-react';
import type { VehicleService } from '@/lib/satoride';
import { formatKes } from '@/lib/satoride';
import { cn } from '@/lib/utils';

interface ReceiptTicketProps {
  service: VehicleService;
  receipt: string;
  sats: number;
  timestamp?: number;
  className?: string;
}

/**
 * A thermal-printer style fare receipt with punched side notches and a
 * perforated separator — the moment of trust after a payment.
 */
export function ReceiptTicket({ service, receipt, sats, timestamp, className }: ReceiptTicketProps) {
  const date = timestamp ? new Date(timestamp * 1000) : new Date();

  return (
    <div
      className={cn(
        'animate-receipt-in relative mx-auto w-full max-w-xs overflow-hidden rounded-2xl border bg-card shadow-lg shadow-orange-950/5',
        className,
      )}
    >
      {/* Header strip */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 px-5 py-3 text-center">
        <p className="font-display text-sm font-bold tracking-[0.25em] text-orange-50">
          SATORIDE
        </p>
      </div>

      <div className="space-y-4 px-5 py-5">
        <div className="flex flex-col items-center gap-1 text-center">
          <CheckCircle2 className="size-8 text-emerald-500" aria-hidden />
          <p className="text-sm font-semibold tracking-wide text-emerald-600 dark:text-emerald-400">
            PAYMENT CONFIRMED
          </p>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground text-xs uppercase tracking-wider">Amount</p>
          <p className="font-display text-4xl font-bold tabular-nums">
            {formatKes(service.fare)}
          </p>
          <p className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-amber-600 dark:text-amber-400">
            <Zap className="size-3 fill-current" aria-hidden />
            {sats.toLocaleString()} sats · settled instantly
          </p>
        </div>

        {/* Perforated separator with punched notches */}
        <div className="relative" aria-hidden>
          <div className="border-t-2 border-dashed" />
          <span className="bg-background absolute -left-7 top-1/2 size-5 -translate-y-1/2 rounded-full border" />
          <span className="bg-background absolute -right-7 top-1/2 size-5 -translate-y-1/2 rounded-full border" />
        </div>

        <dl className="space-y-1.5 text-sm">
          <Row label="Service" value={service.name} />
          {service.plate && <Row label="Vehicle" value={service.plate} />}
          {service.route && <Row label="Route" value={service.route} />}
          <Row
            label="Date"
            value={date.toLocaleString('en-KE', {
              day: 'numeric',
              month: 'short',
              hour: '2-digit',
              minute: '2-digit',
            })}
          />
        </dl>

        <div className="rounded-lg bg-secondary px-3 py-2 text-center">
          <p className="text-muted-foreground text-[11px] uppercase tracking-wider">Receipt №</p>
          <p className="font-mono text-sm font-semibold tracking-widest">{receipt}</p>
        </div>

        {/* Faux barcode */}
        <div className="flex h-8 items-stretch justify-center gap-[3px] pt-1" aria-hidden>
          {[3, 1, 2, 1, 1, 3, 1, 2, 2, 1, 3, 1, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2, 1].map(
            (w, i) => (
              <span
                key={i}
                className="bg-foreground/80"
                style={{ width: `${w}px` }}
              />
            ),
          )}
        </div>
        <p className="text-muted-foreground pb-1 text-center text-[11px]">
          Asante! Recorded on Nostr · satoride
        </p>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className="text-muted-foreground shrink-0 text-xs uppercase tracking-wider">{label}</dt>
      <dd className="truncate text-right font-medium">{value}</dd>
    </div>
  );
}
