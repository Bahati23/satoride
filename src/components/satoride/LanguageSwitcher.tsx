import { Check, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LANGUAGES, useTranslation } from '@/lib/i18n';
import { cn } from '@/lib/utils';

/** Language picker — English, Kiswahili, Français, Yorùbá and Hausa. */
export function LanguageSwitcher() {
  const { lang, setLang, t } = useTranslation();
  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-1.5 px-2.5 font-semibold"
          title={t('lang.switch')}
          aria-label={t('lang.switch')}
        >
          <Globe className="size-4" aria-hidden />
          <span className="text-xs tracking-wide">{current.short}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-44">
        {LANGUAGES.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => setLang(language.code)}
            className="gap-2"
          >
            <Check
              className={cn(
                'size-4',
                language.code === lang ? 'opacity-100' : 'opacity-0',
              )}
              aria-hidden
            />
            <span className={cn(language.code === lang && 'font-semibold')}>
              {language.label}
            </span>
            <span className="text-muted-foreground ml-auto text-xs">{language.short}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
