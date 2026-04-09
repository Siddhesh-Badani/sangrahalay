export const SECTIONS = ["vichar", "katha", "itihas", "kavita"] as const;

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
  vichar: {
    name: "Vichār \\ Reflections",
    devanagari: "विचार",
    descriptor: "Short pieces on life, ideas and meaning.",
    listingDescription: "",
    portalDescription:
      "The things that linger after the thinking is done. Short fragments and reflections on life, ideas and meaning.",
    accentColor: "var(--gold)",
  },
  katha: {
    name: "Kathā \\ Tales",
    devanagari: "कथा",
    descriptor: "Stories told through character and arc.",
    listingDescription: "",
    portalDescription:
      "Some truths arrive only through story. Narrative work, fiction and explorations told through character and arc.",
    accentColor: "#c9687e",
  },
  itihas: {
    name: "Itihās \\ As It Was",
    devanagari: "इतिहास",
    descriptor: "Memory and lived experience, revisited.",
    listingDescription: "",
    portalDescription:
      "What was lived before it became memory. Personal history, memoir and accounts drawn from experience.",
    accentColor: "#b5623a",
  },
  kavita: {
    name: "Kavitā \\ Poems",
    devanagari: "कविता",
    descriptor: "Language at its most distilled.",
    listingDescription: "",
    portalDescription:
      "Where language is asked to carry more than meaning. Poetry and lyrical expression in its many forms.",
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
