// lib/i18n.ts
export type Locale = 'en' | 'de' | 'fr' | 'ru';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      cases: 'Case Studies',
      pricing: 'Pricing',
      contact: 'Contact',
      cta: 'Get Free Estimate',
    },
    hero: {
      badge: 'Accepting new projects — Q2 2026',
      title: 'Stop Losing Money.<br><span class="acc">Scale with IT.</span>',
      subtitle: 'European businesses lose €2.3M/year on manual processes and legacy systems. MoraTech replaces chaos with scalable software — in weeks, not years.',
      primaryCta: 'Get Free ROI Estimate',
      secondaryCta: 'See Case Studies',
    },
    // ... добавляй остальные ключи по мере необходимости
  },
  de: {
    nav: {
      home: 'Startseite',
      services: 'Leistungen',
      cases: 'Referenzen',
      pricing: 'Preise',
      contact: 'Kontakt',
      cta: 'Kostenloses Angebot',
    },
    hero: {
      badge: 'Neue Projekte — Q2 2026',
      title: 'Hören Sie auf, Geld zu verlieren.<br><span class="acc">Skalieren Sie mit IT.</span>',
      subtitle: 'Europäische Unternehmen verlieren 2,3 Mio. €/Jahr durch manuelle Prozesse. MoraTech ersetzt Chaos durch skalierbare Software — in Wochen, nicht Jahren.',
      primaryCta: 'Kostenlose ROI-Analyse',
      secondaryCta: 'Referenzen ansehen',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      cases: 'Réalisations',
      pricing: 'Tarifs',
      contact: 'Contact',
      cta: 'Devis Gratuit',
    },
    hero: {
      badge: 'Nouveaux projets — T2 2026',
      title: 'Arrêtez de perdre de l\'argent.<br><span class="acc">Scalez avec l\'IT.</span>',
      subtitle: 'Les entreprises européennes perdent 2,3 M€/an à cause de processus manuels. MoraTech remplace le chaos par des logiciels évolutifs — en semaines, pas en années.',
      primaryCta: 'Analyse ROI Gratuite',
      secondaryCta: 'Voir les réalisations',
    },
  },
  ru: {
    nav: {
      home: 'Главная',
      services: 'Услуги',
      cases: 'Кейсы',
      pricing: 'Цены',
      contact: 'Контакты',
      cta: 'Бесплатная оценка',
    },
    hero: {
      badge: 'Принимаем проекты — Q2 2026',
      title: 'Хватит терять деньги.<br><span class="acc">Масштабируйтесь с IT.</span>',
      subtitle: 'Европейский бизнес теряет €2.3 млн/год на ручных процессах. MoraTech заменяет хаос масштабируемым ПО — за недели, а не годы.',
      primaryCta: 'Бесплатный расчёт ROI',
      secondaryCta: 'Смотреть кейсы',
    },
  },
} as const;

export const defaultLocale: Locale = 'en';