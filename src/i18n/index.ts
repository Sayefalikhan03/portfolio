// Site languages. English is the default (unprefixed) locale; German lives under /de/.
export const languages = { en: 'EN', de: 'DE' } as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

// Absolute path to the home page for a given locale, respecting the /portfolio base.
// en -> /portfolio/ , de -> /portfolio/de/
export function homePath(lang: Lang): string {
  return lang === defaultLang ? `${base}/` : `${base}/${lang}/`;
}

// The "other" language — used by the nav toggle on a single-page site.
export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'de' : 'en';
}
