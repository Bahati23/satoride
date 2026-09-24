import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSeoMeta } from '@unhead/react';
import { ArrowLeft, ReceiptText } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { SiteHeader } from '@/components/satoride/SiteHeader';
import { SiteFooter } from '@/components/satoride/SiteFooter';
import { ServiceIcon } from '@/components/satoride/ServiceIcon';
import { EmptyState } from '@/components/satoride/EmptyState';
import { usePassengerPayments } from '@/hooks/usePayments';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { getGuestPubkey } from '@/lib/guest';
import { formatKes, timeAgo } from '@/lib/satoride';

/** Passenger receipt history — for the logged-in account or the guest key. */
export default function ReceiptsPage() {
  useSeoMeta({
    title: 'My receipts — SatoRide',
    description: 'Every fare you have paid, with a verifiable receipt stored on Nostr.',
  });

  const { user } = useCurrentUser();
  const identity = user?.pubkey ?? getGuestPubkey();
  const { data: payments, isLoading } = usePassengerPayments(identity);

  const total = useMemo(
    () => (payments ?? []).reduce((sum, p) => sum + p.amount, 0),
    [payments],
  );

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="container flex-1 space-y-8 py-10">
        <div className="space-y-2">
          <Button asChild variant="ghost" size="sm" className="gap-1.5 -ml-2">
            <Link to="/ride">
              <ArrowLeft className="size-4" aria-hidden />
              Pay a fare
            </Link>
          </Button>
          <h1 className="font-display text-4xl font-extrabold">My receipts</h1>
          <p className="text-muted-foreground max-w-md">
            {user
              ? 'Receipts linked to your Nostr account — portable across any client.'
              : 'Receipts saved to this device via your guest key. Log in to attach them to your Nostr account.'}
          </p>
        </div>

        {isLoading ? (
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-16 w-full rounded-xl" />
            ))}
          </div>
        ) : !payments || payments.length === 0 ? (
          <EmptyState
            title="No receipts yet"
            description="Pay your first fare and your receipt will appear here instantly."
          >
            <Button asChild className="mt-1 gap-2 rounded-full">
              <Link to="/ride">
                <ReceiptText className="size-4" aria-hidden />
                Pay a fare
              </Link>
            </Button>
          </EmptyState>
        ) : (
          <>
            <Card className="bg-gradient-to-r from-orange-600 to-orange-500 text-orange-50">
              <CardContent className="flex flex-wrap items-center justify-between gap-4 p-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest opacity-80">
                    Total mobility spend
                  </p>
                  <p className="font-display text-3xl font-extrabold tabular-nums">
                    {formatKes(total)}
                  </p>
                </div>
                <div className="text-right text-sm">
                  <p className="font-semibold tabular-nums">{payments.length} payments</p>
                  <p className="opacity-80">all confirmed on Nostr</p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-2.5">
              {payments.map((payment) => (
                <Card key={payment.id} className="transition-colors hover:border-primary/40">
                  <CardContent className="flex items-center gap-3 p-4">
                    <ServiceIcon type={payment.service} className="size-10" iconClassName="size-4.5" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">
                        {payment.event.content || 'Fare payment'}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {payment.receipt} · {timeAgo(payment.createdAt)}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold tabular-nums">{formatKes(payment.amount)}</p>
                      <p className="text-xs text-amber-600 tabular-nums dark:text-amber-400">
                        ⚡ {payment.sats.toLocaleString()}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
