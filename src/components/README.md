# Component Structure

Components sind in drei logische Kategorien organisiert, um Wartbarkeit und Verständlichkeit zu verbessern.

## 📁 Verzeichnis-Struktur

```
src/components/
├── layout/           # Layout-Container (globale Struktur)
│   ├── Header.astro        # Globale Navigation
│   ├── Section.astro       # Allgemeiner Section-Container
│   └── Spotlight.astro     # Hero/Spotlight-Section-Container
├── features/         # Kleine, reusable UI-Komponenten
│   └── LinkCard.astro      # Link-Karten für Ressourcen
└── sections/         # Große, daten-rendernde Komponenten
    ├── CosCard.astro       # Cosplay-Portfolio-Liste
    ├── Certificates.astro  # Zertifikate-Liste
    ├── ListCard.astro      # Generische Listen (Skills, Interests)
    ├── Projects.astro      # Projekts-Liste
    ├── Resume.astro        # Lebenslauf-Einträge
    └── Ressources.astro    # Ressourcen/Links nach Kategorien
```

## 🎯 Komponenten-Kategorien

### `layout/` - Layout-Container
Komponenten, die die **globale Struktur** definieren.

- **Header.astro**: Globale Navigation mit Language-Switch
- **Section.astro**: Container für Content-Sections (mit ID, Title, Description-Slot)
- **Spotlight.astro**: Hero-Section mit Profil-Bild und Card-Slots

**Verwendung**: In Pages als Wrapper um Inhalte.

### `features/` - Reusable UI-Komponenten
Kleine, **in sich geschlossene** UI-Komponenten, die unabhängig verwendet werden können.

- **LinkCard.astro**: Karte für extern verlinkte Ressourcen

**Verwendung**: Importiert von anderen Komponenten (z.B. Ressources.astro).

### `sections/` - Daten-rendernde Komponenten
Große Komponenten, die **mit JSON-Daten arbeiten** und komplette Listen rendern.

- **CosCard.astro**: Rendert alle Cosplay-Einträge aus JSON
- **Certificates.astro**: Rendert Zertifikate aus JSON
- **ListCard.astro**: Generische Listen-Komponente (Skills, Interests)
- **Projects.astro**: Rendert Projekte aus JSON
- **Resume.astro**: Rendert Lebenslauf-Einträge aus JSON
- **Ressources.astro**: Rendert Ressourcen nach Kategorien aus JSON

**Merkmale**:
- Laden JSON-Daten via `import()`
- Verwenden i18n für Lokalisierung
- Rendern komplette Listen/Seiten

**Verwendung**: In Pages als einzelne Komponente.

## 🔄 Import-Konventionen

```astro
// ✅ Pages importieren Komponenten mit vollständigem Pfad
import Header from "@/components/layout/Header.astro";
import CosCard from "@/components/sections/CosCard.astro";
import Section from "@/components/layout/Section.astro";

// ✅ Komponenten verwenden @ Alias für Daten
import data from "@/data/work/projects.json";

// ✅ Relationale Imports innerhalb eines Verzeichnisses
import LinkCard from "../features/LinkCard.astro";
```

## 📝 Best Practices

1. **Neue Komponenten einstufen**: Ist es Daten-basiert → `sections/`, ist es reusable UI → `features/`, ist es strukturell → `layout/`
2. **Imports konsistent halten**: Verwende `@/` Alias für Data-Imports
3. **Lokalisierung**: Alle Komponenten sollten `getLocaleFromUrl()` und `getLocalizedContent()` verwenden
4. **Props typen**: Definiere Props-Types in `src/types/index.ts`

## 🎨 Component Props Template

```astro
---
import type { SectionProps } from "@/types";

interface Props {
  id: string;
  title: string;
  class?: string;
}

const { id, title, class: className } = Astro.props as Props;
---
```

