'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale, defaultLocale, getTranslation } from '@/lib/i18n';

type I18nContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: any;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const [translations, setTranslations] = useState<any>(getTranslation(defaultLocale));

  useEffect(() => {
    // Try to get locale from localStorage or browser
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && ['en', 'de', 'fr', 'ru'].includes(savedLocale)) {
      setLocale(savedLocale);
      setTranslations(getTranslation(savedLocale));
    }
  }, []);

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    setTranslations(getTranslation(newLocale));
    localStorage.setItem('locale', newLocale);
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale: changeLocale, t: translations }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}