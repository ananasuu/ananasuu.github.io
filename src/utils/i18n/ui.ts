// src/utils/i18n/ui.ts - Zentrale UI-Übersetzungen
import type { Locale } from "../../types";

/**
 * UI translations for all user-facing strings
 * Add new translations here to keep them centralized and maintainable
 */
export const ui = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.resume": "Resume",
    "nav.skills": "Skills",
    "nav.certificates": "Certificates",
    "nav.projects": "Projects",
    "nav.imprint": "Imprint",
    "nav.intro": "Introduction",
    "nav.cosplays": "Cosplays",
    "nav.helpfulLinks": "Helpful Links",

    // Buttons & Actions
    "button.buildbook": "Build Book",
    "button.myWork": "About my Work",
    "button.myCosplay": "My Cosplay Portfolio",

    // Labels
    "label.present": "Present",
    "label.grade": "Grade",
    "label.issued": "Issued",
    "label.role": "Role",

    // Sections
    "section.cosplays.title": "Cosplays & Buildbooks",
    "section.helpfulLinks.title": "Helpful Links",
    "section.resume.title": "Resume",
    "section.skills.title": "Skills",
    "section.certificates.title": "Certificates",
    "section.projects.title": "Projects",
    "section.interests.title": "Interests",

    // Section Descriptions
    "section.cosplays.description":
      "Here you'll find all my costumes! If you'd like to do a photoshoot together, just send me a DM on Instagram or an email — I'd love to hear from you!",
    "section.cosplays.description2":
      "Whenever possible, I've linked my build books so you can see how I brought each costume to life. All of them were created in Canva and are available through Google Drive — I hope they inspire your own projects!",
    "section.helpfulLinks.description":
      "Here are some of my favorite resources for cosplay, crafting, and creativity. Whether you're looking for tutorials, inspiration, or tools, these links have got you covered!",
    "section.certificates.description":
      "While certificates don't replace hands-on experience, they reflect my dedication to learning and growing as a developer. Here are a few I've earned along the way.",
    "section.skills.description":
      "It's hard to pin down my skills, as I'm always curious and enjoy learning new things. This list doesn't cover everything, but it highlights the areas I'm most interested in and actively working with.",
    "section.projects.description":
      "Some of my work was created in internal company environments and can't be shared publicly. The projects described here are based on my hands-on experience and the results of that work.",
    "section.interests.description":
      "Somehow I've managed to reach the point of having so many hobbies, that I sometimes get hit with decision fatigue! But I love them nonetheless",

    // Spotlight/Hero sections
    "hero.cosplay.intro":
      "What started as simply putting together matching clothes quickly turned into creating fully self-made outfits complete with magical props. Since 2022, I've been diving deep into crafting my own cosplays from scratch, bringing characters to life in my own way — all while starting my career as a software developer shortly after.",
    "hero.work.intro1":
      "I create accessible, user-centered frontends where clean code meets thoughtful design.",
    "hero.work.intro2":
      "With a background in modern web development, I focus on building responsive digital experiences that are inclusive, maintainable and intentionally crafted.",
    "hero.work.cosplayCard.title": "Where creativity comes to life",
    "hero.work.cosplayCard.description":
      "Cosplay is where my creativity takes over! From crafting costumes to researching and understanding the characters behind them, I love the entire process of bringing fictional worlds to life.",

    // Accessibility
    "aria.languageSwitch": "Language switch",

    // Footer
    "footer.copyright": "Design",
    "footer.contactForm": "Contact Form",

    // Page titles
    "title.cosplay": "NinuMakes - Cosplay & Crafting Portfolio",
    "title.work": "NinuMakes - Development & Accessibility",
  },
  de: {
    // Navigation
    "nav.about": "Über mich",
    "nav.resume": "Lebenslauf",
    "nav.skills": "Fähigkeiten",
    "nav.certificates": "Zertifikate",
    "nav.projects": "Projekte",
    "nav.imprint": "Impressum",
    "nav.intro": "Vorstellung",
    "nav.cosplays": "Cosplays",
    "nav.helpfulLinks": "Hilfreiche Links",

    // Buttons & Actions
    "button.buildbook": "Build Book",
    "button.myWork": "Meine Arbeit",
    "button.myCosplay": "Mein Cosplay-Portfolio",

    // Labels
    "label.present": "Heute",
    "label.grade": "Note",
    "label.issued": "Ausgestellt",
    "label.role": "Rolle",

    // Sections
    "section.cosplays.title": "Cosplays & Buildbooks",
    "section.helpfulLinks.title": "Hilfreiche Links",
    "section.resume.title": "Lebenslauf",
    "section.skills.title": "Fähigkeiten",
    "section.certificates.title": "Zertifikate",
    "section.projects.title": "Projekte",
    "section.interests.title": "Interessen",

    // Section Descriptions
    "section.cosplays.description":
      "Hier findest du alle meine Kostüme! Wenn du Lust auf ein gemeinsames Fotoshooting hast, schick mir einfach eine Instagram-DM oder eine E-Mail — ich freue mich darauf!",
    "section.cosplays.description2":
      "Wann immer möglich, habe ich meine Buildbooks verlinkt, damit du sehen kannst, wie ich jedes Kostüm umgesetzt habe. Alle wurden in Canva erstellt und sind über Google Drive verfügbar — vielleicht inspirieren sie dich für eigene Projekte!",
    "section.helpfulLinks.description":
      "Hier findest du einige meiner liebsten Ressourcen rund um Cosplay, Crafting und Kreativität. Egal ob du nach Tutorials, Inspiration oder Tools suchst — diese Links helfen dir weiter!",
    "section.certificates.description":
      "Zertifikate ersetzen keine praktische Erfahrung, zeigen aber mein Engagement für Lernen und Weiterentwicklung. Hier sind einige, die ich erworben habe, um meine Kenntnisse und Expertise zu belegen.",
    "section.skills.description":
      "Meine Fähigkeiten genau zu benennen ist schwer, da ich neugierig bin und gerne Neues lerne. Diese Liste zeigt die Bereiche, die mich besonders interessieren und mit denen ich aktiv arbeite.",
    "section.projects.description":
      "Einige meiner Arbeiten entstanden in internen Unternehmensumgebungen und können nicht öffentlich geteilt werden. Die hier beschriebenen Projekte spiegeln meine praktische Arbeit und die Ergebnisse daraus wider.",
    "section.interests.description":
      "Irgendwie habe ich es geschafft, so viele Hobbys zu haben, dass ich manchmal von Entscheidungsmüdigkeit getroffen werde! Aber ich liebe sie trotzdem",

    // Spotlight/Hero sections
    "hero.cosplay.intro":
      "Angefangen habe ich damit, einfach passende Kleidung zusammenzustellen. Schon bald entstanden komplette, selbstgemachte Outfits mit magischen Requisiten. Seit 2022 bastle ich aktiv Cosplays von Grund auf und habe kurz darauf meine Karriere als Softwareentwicklerin gestartet.",
    "hero.work.intro1":
      "Ich gestalte benutzerzentrierte, wartbare und barrierefreie Frontends, in denen sauberer Code auf durchdachtes Design trifft.",
    "hero.work.intro2":
      "Mit Erfahrung in moderner Webentwicklung liegt mein Fokus auf responsiven digitalen Erlebnissen, die inklusiv, langlebig und bewusst gestaltet sind.",
    "hero.work.cosplayCard.title": "Fokus auf meine Kreativität",
    "hero.work.cosplayCard.description":
      "Cosplay ist mein kreativer Ausgleich! Vom Entwerfen der Kostüme bis hin zum Eintauchen in die Charaktere liebe ich den gesamten Prozess, der die Figuren und Geschichten für mich greifbar macht.",

    // Accessibility
    "aria.languageSwitch": "Sprachauswahl",

    // Footer
    "footer.copyright": "Design",
    "footer.contactForm": "Kontaktformular",

    // Page titles
    "title.cosplay": "NinuMakes - Cosplay & Crafting Portfolio",
    "title.work": "NinuMakes - Development & Accessibility",
  },
} as const;

export type UIKey = keyof (typeof ui)["en"];

/**
 * Get a translation function for the given locale
 * @param locale - The target locale
 * @returns Translation function that takes a key and returns the translated string
 *
 * @example
 * const t = useTranslations('de');
 * t('nav.about') // returns 'Über mich'
 */
export function useTranslations(locale: Locale) {
  return (key: UIKey): string => {
    return ui[locale][key] ?? ui.en[key] ?? key;
  };
}

/**
 * Get all translations for a given locale
 * @param locale - The target locale
 * @returns Object with all translated strings
 */
export function getTranslations(locale: Locale) {
  return ui[locale];
}
