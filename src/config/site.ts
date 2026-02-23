export const siteConfig = {
  name: "NinuMakes",
  author: "Nina Friedrich",
  url: "https://ananasuu.github.io/",
  defaultLocale: "en" as const,

  title: "NinuMakes - Cosplay & Crafting Portfolio",

  meta: {
    description: {
      en: "Nina's creative portfolio showcasing her cosplay and crafting skills while also showcasing good resources.",
      de: "Ninas kreatives Portfolio mit Cosplay und Handwerkskunst sowie nützlichen Ressourcen.",
    },
    keywords:
      "cosplay, crafting, portfolio, costume design, prop making, creative arts, web development, accessibility",
  },

  social: {
    instagram: "https://www.instagram.com/ninumakes/",
    github: "https://github.com/ananasuu",
    tiktok: "https://www.tiktok.com/@ananasu.exe",
  },

  images: {
    profilePath: "/assets/img/Nina_Pfp.jpg",
  },

  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    jobTitle: {
      en: "Cosplayer & Crafter",
      de: "Cosplayerin & Kreative",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
