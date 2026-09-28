import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LANGUAGES, useTranslation } from '@/lib/i18n';

/**
 * Compact language toggle. With two languages a single tap flips between
 * English and Kiswahili; the button shows the current language code.
 */
export function LanguageSwitcher() {
  const { lang, setLang, t } = useTranslation();

  const next = LANGUAGES.find((l) => l.code !== lang) ?? LANGUAGES[0];
  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLang(next.code)}
      title={t('lang.switch')}
      aria-label={t('lang.switch')}
      className="gap-1.5 px-2.5 font-semibold"
    >
      <Globe className="size-4" aria-hidden />
      <span className="text-xs tracking-wide">{current.short}</span>
    </Button>
  );
}
