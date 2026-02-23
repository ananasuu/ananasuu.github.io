/**
 * Supported locales in the application
 */
export type Locale = "en" | "de";

/**
 * Localized content wrapper - base content with optional localized overrides
 */
export interface LocalizedContent<T> {
  /** Base content (typically English) */
  [K: string]: unknown;
  /** German translations/overrides */
  de?: Partial<T>;
}

/**
 * Social media links
 */
export interface SocialMedia {
  instagram: string;
  github: string;
  tiktok: string;
}

/**
 * Imprint/Contact information
 */
export interface Imprint {
  name: string;
  address: string;
  street: string;
  city: string;
  email: string;
  url: string;
  socialMedia: SocialMedia;
}

/**
 * Navigation item [href, label]
 */
export type NavItem = [string, string];

/**
 * Header configuration
 */
export interface HeaderConfig {
  header: string;
  description: string;
  nav: NavItem[];
}

/**
 * BaseLayout component props
 */
export interface BaseLayoutProps {
  title?: string;
  header?: HeaderConfig;
  description?: string;
}

/**
 * Section layout component props
 */
export interface SectionProps {
  id: string;
  title: string;
  class?: string;
}

/**
 * Cosplay portfolio item
 */
export interface CosplayItem {
  title: string;
  source: string;
  imageUrl: string;
  genres: string;
  description: string;
  buildbookUrl: string;
}

/**
 * Work project item
 */
export interface Project {
  title: string;
  role: string;
  description: string;
  url: string;
}

/**
 * Resume entry
 */
export interface ResumeEntry {
  title: string;
  institution: string;
  start: string;
  end?: string;
  description: string | string[];
  grade?: string;
}

/**
 * Certificate item
 */
export interface Certificate {
  title: string;
  institution: string;
  link: string;
  issued: string;
}

/**
 * Skill item with experience level
 */
export interface SkillWithExperience {
  skill: string;
  experience: string;
}

/**
 * Generic list item - can be a string or an object with skill and experience
 */
export interface ListItem {
  title: string;
  description?: string;
  items: (string | SkillWithExperience)[];
  de?: {
    title?: string;
    description?: string;
    items?: (string | SkillWithExperience)[];
  };
}

/**
 * Skills category
 */
export interface SkillsCategory {
  title: string;
  description?: string;
  items: (string | SkillWithExperience)[];
}

/**
 * Interest item
 */
export interface Interest {
  en: string;
  de: string;
}

/**
 * Resource/Link item
 */
export interface ResourceLink {
  title: string;
  url: string;
  description?: string;
}

/**
 * Resource category
 */
export interface ResourceCategory {
  title: string;
  description?: string;
  ressourcen: ResourceLink[];
}
