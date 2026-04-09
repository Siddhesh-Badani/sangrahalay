export const SECTIONS = ["sutra", "vichar", "katha", "itihas"] as const;

export type Section = (typeof SECTIONS)[number];

export type Post = {
  title: string;
  section: Section;
  slug: string;
  date: string;
  excerpt: string;
  devanagari?: string;
  body: string;
};

export type SectionMeta = {
  name: string;
  devanagari: string;
  descriptor: string;
  listingDescription: string;
  portalDescription: string;
  accentColor: string;
};

export const ARCHIVE_ESTABLISHED_YEAR = 2026;

export const SECTION_META: Record<Section, SectionMeta> = {
  sutra: {
    name: "Sūtra",
    devanagari: "सूत्र",
    descriptor: "aphorisms & condensed principles",
    listingDescription:
      "This series gathers short formulations intended for repeated reading. The entries are brief by design and assume return, comparison, and commentary rather than immediate completion.",
    portalDescription:
      "Condensed principles and interpretive notes written for slow rereading.",
    accentColor: "var(--gold)",
  },
  vichar: {
    name: "Vichār",
    devanagari: "विचार",
    descriptor: "essays & intellectual observations",
    listingDescription:
      "Extended observations on language, learning, form, and record. These essays remain close to material practices while allowing argument to unfold at full length.",
    portalDescription:
      "Essays and observations on language, form, memory, and institutions.",
    accentColor: "#c9687e",
  },
  katha: {
    name: "Kathā",
    devanagari: "कथा",
    descriptor: "stories, parables & narrative",
    listingDescription:
      "Narrative entries in which incidents carry argument without announcing it. Stories are treated as primary containers of knowledge, not ornamental diversions.",
    portalDescription:
      "Narratives, parables, and remembered scenes treated as archival material.",
    accentColor: "#b5623a",
  },
  itihas: {
    name: "Itihās",
    devanagari: "इतिहास",
    descriptor: "historical & cultural inquiry",
    listingDescription:
      "Materials for the long view: craft, infrastructure, domestic objects, and institutional habits. The aim is to read history through things that outlast their first use.",
    portalDescription:
      "Historical inquiry through objects, craft processes, and public records.",
    accentColor: "#7a6848",
  },
};

export function getPostHref(post: Pick<Post, "section" | "slug">) {
  return `/${post.section}/${post.slug}`;
}

export function getSectionHref(section: Section) {
  return `/${section}`;
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
