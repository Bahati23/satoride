import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

import { en, type TranslationKey } from './locales/en';
import { sw } from './locales/sw';
import type { ServiceType } from '@/lib/satoride';

export type Language = 'en' | 'sw';

export const LANGUAGES: { code: Language; label: string; short: string }[] = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'sw', label: 'Kiswahili', short: 'KIS' },
];

const dictionaries: Record<Language, Translations> = { en, sw };

type Translations = Record<TranslationKey, string>;
type Vars = Record<string, string | number>;

interface I18nContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  /** Translate a key, interpolating `{var}` placeholders. */
  t: (key: TranslationKey, vars?: Vars) => string;
  /** BCP-47 locale for date/number formatting. */
  locale: string;
  /** Translated relative time ("5 min ago" / "dakika 5 zilizopita"). */
  timeAgo: (timestamp: number) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = 'satoride:language';

function initialLanguage(): Language {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'sw' || stored === 'en') return stored;
  } catch {
    // Storage unavailable — fall through.
  }
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(initialLanguage);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage unavailable — language lives in memory only.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<I18nContextValue>(() => {
    const dict = dictionaries[lang];
    const locale = lang === 'sw' ? 'sw-KE' : 'en-KE';

    const t = (key: TranslationKey, vars?: Vars): string => {
      let text: string = dict[key] ?? en[key] ?? key;
      if (vars) {
        for (const [name, replacement] of Object.entries(vars)) {
          text = text.replaceAll(`{${name}}`, String(replacement));
        }
      }
      return text;
    };

    const timeAgo = (timestamp: number): string => {
      const seconds = Math.max(1, Math.floor(Date.now() / 1000) - timestamp);
      if (seconds < 60) return t('time.justNow');
      const minutes = Math.floor(seconds / 60);
      if (minutes < 60) return t('time.minAgo', { n: minutes });
      const hours = Math.floor(minutes / 60);
      if (hours < 24) return t('time.hrAgo', { n: hours });
      const days = Math.floor(hours / 24);
      if (days < 7) return t(days === 1 ? 'time.dayAgoOne' : 'time.dayAgoMany', { n: days });
      return new Date(timestamp * 1000).toLocaleDateString(locale, {
        day: 'numeric',
        month: 'short',
      });
    };

    return { lang, setLang, t, locale, timeAgo };
  }, [lang, setLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useTranslation(): I18nContextValue {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}

/** Translation keys for service-type labels, for use with `t()`. */
export const SERVICE_TYPE_KEYS: Record<ServiceType, TranslationKey> = {
  matatu: 'type.matatu',
  boda: 'type.boda',
  taxi: 'type.taxi',
  parking: 'type.parking',
  charging: 'type.charging',
  wifi: 'type.wifi',
  other: 'type.other',
};
