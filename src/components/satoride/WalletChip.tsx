import { Fuel, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useDemoWallet } from '@/lib/wallet';
import { useToast } from '@/hooks/useToast';
import { useTranslation } from '@/lib/i18n';

/** Demo Lightning wallet balance with a testnet-style faucet top-up. */
export function WalletChip() {
  const { balance, faucetAmount, topUp } = useDemoWallet();
  const { toast } = useToast();
  const { t } = useTranslation();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-1.5 rounded-full border-amber-500/40 bg-amber-500/10 font-semibold text-amber-700 hover:bg-amber-500/20 hover:text-amber-800 dark:text-amber-300 dark:hover:text-amber-200"
        >
          <Zap className="size-3.5 fill-current" aria-hidden />
          <span className="tabular-nums">{balance.toLocaleString()}</span>
          <span className="hidden sm:inline">{t('wallet.sats')}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-72">
        <div className="space-y-3">
          <div>
            <p className="text-sm font-semibold">{t('wallet.title')}</p>
            <p className="text-muted-foreground mt-0.5 text-xs leading-relaxed">
              {t('wallet.description')}
            </p>
          </div>
          <div className="rounded-lg bg-amber-500/10 p-3 text-center">
            <p className="text-2xl font-bold tabular-nums text-amber-600 dark:text-amber-400">
              ⚡ {balance.toLocaleString()}
            </p>
            <p className="text-muted-foreground text-xs">{t('wallet.available')}</p>
          </div>
          <Button
            className="w-full gap-1.5"
            variant="secondary"
            onClick={() => {
              topUp();
              toast({
                title: t('wallet.topUpToast'),
                description: t('wallet.topUpToastDesc', {
                  amount: faucetAmount.toLocaleString(),
                }),
              });
            }}
          >
            <Fuel className="size-4" aria-hidden />
            {t('wallet.topUp', { amount: faucetAmount.toLocaleString() })}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
