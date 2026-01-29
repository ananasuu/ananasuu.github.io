/**
 * Determines the locale based on a pathname.
 * If the pathname starts with '/de' or contains '/de/', the locale is 'de'.
 * Otherwise, the locale defaults to 'en'.
 * 
 * @param {string} pathname - The URL pathname
 * @returns {string} The determined locale ('de' or 'en')
 */
export function getLocaleFromUrl(pathname: string): 'de' | 'en' {
    const path = pathname.trim().toLowerCase();
    return path.startsWith('/de') ? 'de' : 'en';
}


/**
 * Gets the current locale, with fallback to browser language detection.
 * 
 * @param {string} [pathname] - Optional pathname string for SSR context
 * @returns {string} The current locale ('de' or 'en')
 */
export function getCurrentLocale(pathname?: string): string {
    return getLocaleFromUrl(pathname);
}

/**
 * Gets localized content from a data object based on locale.
 * 
 * @param {any} content - The content object containing base content and optional 'de' property
 * @param {string} locale - The target locale ('de' or 'en')
 * @returns {any} The localized content object
 */
export function getLocalizedContent<T extends Record<string, any>>(
    content: T & { de?: Partial<T> },
    locale: 'de' | 'en'
): T {
    const { de, ...baseContent } = content;
    return locale === 'de' && de ? { ...baseContent, ...de } as T : baseContent as T;
}