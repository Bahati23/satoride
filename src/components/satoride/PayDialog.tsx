import { useEffect, useState } from 'react';
import { Fuel, Loader2, Zap } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { usePayFare, type PayFareResult } from '@/hooks/useSatorideActions';
import { useDemoWallet } from '@/lib/wallet';
import { useToast } from '@/hooks/useToast';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { SERVICE_TYPE_KEYS, useTranslation } from '@/lib/i18n';
import type { TranslationKey } from '@/lib/locales/en';
import {
  formatKes,
  kesToSats,
  type VehicleService,
} from '@/lib/satoride';
import { ReceiptTicket } from './ReceiptTicket';
import { ServiceIcon } from './ServiceIcon';

type Step = 'confirm' | 'processing' | 'success';

const PROCESSING_LINE_KEYS: TranslationKey[] = [
  'pay.line1',
  'pay.line2',
  'pay.line3',
  'pay.line4',
];

export function PayDialog({
  service,
  open,
  onOpenChange,
}: {
  service: VehicleService | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [step, setStep] = useState<Step>('confirm');
  const [result, setResult] = useState<PayFareResult | null>(null);
  const [lineIndex, setLineIndex] = useState(0);

  const { balance, topUp, faucetAmount } = useDemoWallet();
  const { user } = useCurrentUser();
  const { toast } = useToast();
  const { t } = useTranslation();
  const payFare = usePayFare();

  const sats = service ? kesToSats(service.fare) : 0;
  const insufficient = service ? balance < sats : false;

  // Reset whenever a new service is opened.
  useEffect(() => {
    if (open) {
      setStep('confirm');
      setResult(null);
      setLineIndex(0);
    }
  }, [open, service?.coordinate]);

  // Cycle the processing status lines while the mutation runs.
  useEffect(() => {
    if (step !== 'processing') return;
    const timer = setInterval(
      () => setLineIndex((i) => (i + 1) % PROCESSING_LINE_KEYS.length),
      900,
    );
    return () => clearInterval(timer);
  }, [step]);

  if (!service) return null;

  const handlePay = () => {
    setStep('processing');
    payFare.mutate(service, {
      onSuccess: (data) => {
        setResult(data);
        setStep('success');
      },
      onError: (error) => {
        setStep('confirm');
        toast({
          variant: 'destructive',
          title: t('pay.failed'),
          description: error.message,
        });
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        {step === 'confirm' && (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-xl">{t('pay.confirmTitle')}</DialogTitle>
              <DialogDescription>{t('pay.confirmDesc')}</DialogDescription>
            </DialogHeader>

            <div className="mt-2 space-y-5">
              <div className="flex items-center gap-3 rounded-xl border p-3">
                <ServiceIcon type={service.type} />
                <div className="min-w-0">
                  <p className="truncate font-semibold">{service.name}</p>
                  <p className="text-muted-foreground truncate text-sm">
                    {[service.plate, service.route || t(SERVICE_TYPE_KEYS[service.type])]
                      .filter(Boolean)
                      .join(' · ')}
                  </p>
                </div>
              </div>

              <div className="py-1 text-center">
                <p className="font-display text-5xl font-bold tabular-nums">
                  {formatKes(service.fare)}
                </p>
                <p className="mt-1.5 inline-flex items-center gap-1 text-sm font-medium text-amber-600 dark:text-amber-400">
                  <Zap className="size-3.5 fill-current" aria-hidden />
                  {sats.toLocaleString()} {t('wallet.sats')}
                </p>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-secondary px-3 py-2 text-sm">
                <span className="text-muted-foreground">{t('pay.walletBalance')}</span>
                <span className="font-semibold tabular-nums">⚡ {balance.toLocaleString()}</span>
              </div>

              {insufficient ? (
                <div className="space-y-3">
                  <p className="text-destructive text-center text-sm font-medium">
                    {t('pay.insufficient')}
                  </p>
                  <Button className="w-full gap-1.5" variant="secondary" onClick={topUp}>
                    <Fuel className="size-4" aria-hidden />
                    {t('pay.topUp', { amount: faucetAmount.toLocaleString() })}
                  </Button>
                </div>
              ) : (
                <Button
                  size="lg"
                  className="w-full gap-2 rounded-xl text-base font-bold shadow-md shadow-orange-900/20"
                  onClick={handlePay}
                >
                  <Zap className="size-5 fill-current" aria-hidden />
                  {t('pay.button', { fare: formatKes(service.fare) })}
                </Button>
              )}

              {!user && (
                <p className="text-muted-foreground text-center text-xs leading-relaxed">
                  {t('pay.guest')}
                </p>
              )}
            </div>
          </>
        )}

        {step === 'processing' && (
          <div className="flex flex-col items-center gap-6 py-10">
            <DialogDescription className="sr-only">
              {t('pay.processing', { fare: formatKes(service.fare) })}
            </DialogDescription>
            <div className="grid size-20 place-items-center rounded-full bg-amber-500/15">
              <Zap className="animate-bolt-pulse size-10 fill-amber-500 text-amber-500" aria-hidden />
            </div>
            <div className="space-y-2 text-center">
              <p className="font-display text-lg font-semibold">
                {t('pay.processing', { fare: formatKes(service.fare) })}
              </p>
              <p className="text-muted-foreground flex items-center justify-center gap-2 text-sm">
                <Loader2 className="size-3.5 animate-spin" aria-hidden />
                {t(PROCESSING_LINE_KEYS[lineIndex])}
              </p>
            </div>
          </div>
        )}

        {step === 'success' && result && (
          <div className="space-y-5 py-2">
            <DialogDescription className="sr-only">
              {t('receipt.confirmed')}
            </DialogDescription>
            <ReceiptTicket
              service={service}
              receipt={result.receipt}
              sats={result.sats}
            />
            <Button
              size="lg"
              variant="secondary"
              className="w-full rounded-xl font-semibold"
              onClick={() => onOpenChange(false)}
            >
              {t('pay.done')}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
