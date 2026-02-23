// src/utils/i18n/i18n.ts - Erweiterte i18n Utilities (mit Verbesserungen)
import type { Locale, LocalizedContent } from "../../types";

/**
 * Determines the locale based on a pathname.
 * If the pathname starts with '/de' or contains '/de/', the locale is 'de'.
 * Otherwise, the locale defaults to 'en'.
 *
 * @param {string} pathname - The URL pathname
 * @returns {Locale} The determined locale ('de' or 'en')
 *
 * @example
 * getLocaleFromUrl('/de/work') // returns 'de'
 * getLocaleFromUrl('/work') // returns 'en'
 */
export function getLocaleFromUrl(pathname: string): Locale {
  const path = pathname.trim().toLowerCase();
  return path.startsWith("/de") || path.includes("/de/") ? "de" : "en";
}

/**
 * Gets the current locale, with fallback to browser language detection.
 *
 * @param {string} [pathname] - Optional pathname string for SSR context
 * @returns {Locale} The current locale ('de' or 'en')
 */
export function getCurrentLocale(pathname?: string): Locale {
  return getLocaleFromUrl(pathname ?? "/");
}

/**
 * Gets localized content from a data object based on locale.
 * Merges base content with locale-specific overrides.
 *
 * @param {T & LocalizedContent<T>} content - The content object containing base content and optional locale overrides
 * @param {Locale} locale - The target locale ('de' or 'en')
 * @returns {T} The localized content object
 *
 * @example
 * const data = { title: 'Hello', description: 'World', de: { title: 'Hallo' } };
 * getLocalizedContent(data, 'de') // returns { title: 'Hallo', description: 'World' }
 */
export function getLocalizedContent<T extends Record<string, unknown>>(
  content: T & LocalizedContent<T>,
  locale: Locale,
): T {
  const { de, ...baseContent } = content;
  return locale === "de" && de
    ? ({ ...baseContent, ...de } as T)
    : (baseContent as T);
}

/**
 * Generates alternate language path for the given pathname
 *
 * @param {string} pathname - Current pathname
 * @param {Locale} targetLocale - Target locale
 * @returns {string} Alternate path
 *
 * @example
 * getAlternatePath('/work', 'de') // returns '/de/work'
 * getAlternatePath('/de/work', 'en') // returns '/work'
 */
export function getAlternatePath(
  pathname: string,
  targetLocale: Locale,
): string {
  const currentLocale = getLocaleFromUrl(pathname);

  if (currentLocale === targetLocale) {
    return pathname;
  }

  if (targetLocale === "de") {
    // Convert to German path
    return pathname === "/" ? "/de" : `/de${pathname}`;
  }

  // Convert to English path (remove /de prefix)
  return pathname.replace(/^\/de(\/|$)/, (_, suffix) => suffix || "/");
}
