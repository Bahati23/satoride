import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { LoginArea } from '@/components/auth/LoginArea';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { WalletChip } from './WalletChip';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslation } from '@/lib/i18n';
import type { TranslationKey } from '@/lib/locales/en';
import { cn } from '@/lib/utils';

const NAV_ITEMS: { to: string; labelKey: TranslationKey }[] = [
  { to: '/ride', labelKey: 'nav.ride' },
  { to: '/worker', labelKey: 'nav.worker' },
  { to: '/operator', labelKey: 'nav.operator' },
  { to: '/ussd', labelKey: 'nav.ussd' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="bg-background/85 sticky top-0 z-40 border-b backdrop-blur-md">
      <div className="container flex h-16 items-center gap-3">
        <Logo />

        <nav className="ml-6 hidden items-center gap-1 md:flex" aria-label={t('nav.main')}>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
                )
              }
            >
              {t(item.labelKey)}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <WalletChip />
          <LanguageSwitcher />
          <ThemeToggle />
          <LoginArea className="hidden max-w-40 sm:inline-flex" />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label={t('nav.openMenu')}>
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>
                  <Logo compact={false} />
                </SheetTitle>
                <SheetDescription className="sr-only">
                  {t('footer.tagline')}
                </SheetDescription>
              </SheetHeader>
              <nav className="mt-4 flex flex-col gap-1" aria-label={t('nav.mobile')}>
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="hover:bg-secondary rounded-lg px-3 py-2.5 text-base font-medium transition-colors"
                  >
                    {t(item.labelKey)}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 border-t pt-4">
                <LoginArea className="w-full" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
