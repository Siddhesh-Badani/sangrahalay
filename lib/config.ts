export const SECTIONS = ["vichar", "katha", "itihas", "kavita"] as const;

export type Section = (typeof SECTIONS)[number];

export type Post = {
  title: string;
  section: Section;
  slug: string;
  date: string;
  excerpt: string;
  devanagari?: string;
  form?: string;
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
    listingDescription:
      "Vichār comes from vi- and char. Char means to move, to walk. Vi- suggests separation, discernment, moving through something with intention. Together, vichār is not simply thinking. It is walking through thought. Traversing an idea from every side until the surface cracks and something truer emerges from underneath. Most of what is written today is first-draft thinking published at the speed of reaction. Vichār asks for the opposite - To sit with something long enough that the obvious falls away and what remains is worth saying. These are pieces written in that patience.",
    portalDescription:
      "The things that linger after the thinking is done. Short fragments and reflections on life, ideas and meaning.",
    accentColor: "var(--gold)",
  },
  katha: {
    name: "Kathā \\ Tales",
    devanagari: "कथा",
    descriptor: "Stories told through character and arc.",
    listingDescription: "The oldest stories in the Indic tradition were never just stories. The Panchatantra dressed wisdom as animal fable. The Hitopadesha taught kings through fiction what no advisor could say directly. Kathā understood something that modern writing often forgets: that a truth told directly can be too abstract to perceive and too plain to remember, but a truth carried inside a story arrives whole. These are tales written in that faith. That the right story, told well, does what argument cannot.",
    portalDescription:
      "Some truths arrive only through story. Narrative work, fiction and explorations told through character and arc.",
    accentColor: "#c9687e",
  },
  itihas: {
    name: "Itihās \\ As It Was",
    devanagari: "इतिहास",
    descriptor: "Memory and lived experience, revisited.",
    listingDescription: "Itihās is often mistranslated as history. Its root is more honest and more humble: iti-ha-āsa. So indeed it was. Not \"this is what happened\" but \"this is how it was, as best as one person can say.\" There is no claim of objectivity in itihās. Just a person, remembering as honestly as they can. These are writings drawn from memory and experience. Personal, biased yet true in the way only first-person accounts can be.",
    portalDescription:
      "What was lived before it became memory. Personal history, memoir and accounts drawn from experience.",
    accentColor: "#b5623a",
  },
  kavita: {
    name: "Kavitā \\ Poems",
    devanagari: "कविता",
    descriptor: "Language at its most distilled.",
    listingDescription: "The word kavi, from which kavitā descends, did not originally mean poet. It meant seer. The one who sees. Someone who perceived what others walked past. In the Vedic tradition, poetry was not craft or decoration. It was the closest language could get to direct seeing. To saying what was glimpsed, before it could be reasoned into something safer. That ambition has not changed. These are attempts to use fewer words than the thought demands and somehow still arrive. Some land. Others reach.",
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
