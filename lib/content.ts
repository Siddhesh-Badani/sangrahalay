export const SECTIONS = ["sutra", "vichar", "katha", "itihas"] as const;

export type Section = (typeof SECTIONS)[number];

export type Post = {
  title: string;
  section: Section;
  slug: string;
  date: string;
  excerpt: string;
  devanagari?: string;
  body: string[];
};

export type SectionMeta = {
  name: string;
  devanagari: string;
  descriptor: string;
  listingDescription: string;
  portalDescription: string;
  accentColor: string;
};

export const ARCHIVE_ESTABLISHED_YEAR = 2024;

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
    accentColor: "#c97b96",
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
    accentColor: "#5a6b8a",
  },
};

export const posts: Post[] = [
  {
    title: "On Register and Witness",
    devanagari: "पंजी और साक्ष्य",
    section: "sutra",
    slug: "on-register-and-witness",
    date: "2025-09-11",
    excerpt:
      "A record is not true because it is written. It becomes trustworthy when writing, witness, and procedure agree in time.",
    body: [
      "1. In matters of grain, land, or instruction, the first entry is only an intention to remember. The record acquires force when the person who made it, the mark that seals it, and the circumstance it names can still be brought together.",
      "2. A register without witness becomes rhetoric; witness without a register becomes rumor. Administration begins where the two are made to meet under a known rule.",
      "3. When doubt arises, preserve the sequence before preserving opinion. Date, hand, correction, and margin often resolve what argument cannot.",
    ],
  },
  {
    title: "Margin Is Part of the Text",
    devanagari: "हाशिया भी पाठ है",
    section: "sutra",
    slug: "margin-is-part-of-the-text",
    date: "2025-06-04",
    excerpt:
      "The note in the margin is not secondary by position alone. Many traditions survive because the edge was used as a second page.",
    body: [
      "1. A manuscript page teaches two readings: the central line and the response it gathers at the edge. To ignore the margin is to mistake transmission for repetition.",
      "2. Students, copyists, and commentators leave signs of use where there is room, not where theory assigns importance. The archive should respect this economy of space.",
      "3. Therefore catalog the margin as action: gloss, correction, ownership, route mark, or memory aid. Form is evidence of function.",
    ],
  },
  {
    title: "Repair Without Erasure",
    devanagari: "संशोधन बिना लोप",
    section: "sutra",
    slug: "repair-without-erasure",
    date: "2024-11-19",
    excerpt:
      "Correction is part of stewardship. The aim is not a clean surface but an honest one that shows what was amended and why.",
    body: [
      "1. Every repair changes the object. The question is whether the change can be accounted for by the next reader.",
      "2. A patch is preferable to a concealed substitution when the loss itself carries information. Damage, too, belongs to history.",
      "3. The archivist's restraint is technical: intervene enough to keep the object legible, and leave a trace sufficient to describe the intervention later.",
    ],
  },
  {
    title: "Measure Before Meaning",
    devanagari: "अर्थ से पहले माप",
    section: "sutra",
    slug: "measure-before-meaning",
    date: "2024-03-04",
    excerpt:
      "Before interpretation, note size, weight, count, and sequence. Many errors begin when commentary outruns measurement.",
    body: [
      "1. The first discipline of reading is not opinion but measure. Folio count, line count, missing leaves, and hand changes narrow the field of possible claims.",
      "2. In śāstra and in revenue records alike, proportion often carries the argument. A misplaced unit may produce a doctrine where there was only arithmetic.",
      "3. Meaning should be invited after measure has prepared the room for it.",
    ],
  },
  {
    title: "The Afterlife of Notes",
    devanagari: "टिप्पणियों का परजीवन",
    section: "vichar",
    slug: "the-afterlife-of-notes",
    date: "2025-12-03",
    excerpt:
      "Most notes are written for a single sitting and survive that moment by accident. Their second life begins when someone else can understand the conditions of their making.",
    body: [
      "A note is often mistaken for unfinished writing. In practice, it is a record of a temporary alignment: a reader, a text, an urgency, and the nearest available surface. The weakness of notes is obvious; they omit transitions, context, and often grammar. Their strength is equally clear. They preserve the moment before thought is regularized for publication.",
      "In classrooms, research rooms, and offices, notes migrate. A penciled line in the margin becomes a lecture point. A lecture point becomes a chapter heading. A chapter footnote returns years later as an index term. The archive inherits these movements long after the original intention has passed. To preserve notes well, one must preserve their relation to larger systems: notebook series, page order, date, and the text to which they answer.",
      "For this reason, the question is not whether notes are polished enough to keep. The question is whether their chain of reference remains visible. When that chain is maintained, fragmentary writing becomes an instrument of intellectual history rather than a pile of private residue.",
    ],
  },
  {
    title: "The Index as Argument",
    devanagari: "अनुक्रमणिका एक तर्क",
    section: "vichar",
    slug: "the-index-as-argument",
    date: "2025-10-14",
    excerpt:
      "An index does not merely help a reader find what is already there. It declares what the book believes can be found together.",
    body: [
      "Indexes are frequently described as mechanical appendices, compiled after the real writing is done. This description hides their interpretive work. Every indexed term is a judgment about recurrence; every cross-reference is a judgment about relation. The compiler is not outside the text but inside its last and often most practical argument.",
      "Older schoolbooks and government reports in India sometimes show this vividly. Terms such as village, survey, irrigation, custom, and district appear not only as content but as administrative coordinates. The index teaches the reader how the material is expected to be re-entered. It is a map of authorized return.",
      "To read an index historically is therefore to ask: what pathways were made easy, and which ones were left unmarked? The answers reveal more than convenience. They reveal the architecture of attention.",
    ],
  },
  {
    title: "Script and Speech in the Classroom",
    devanagari: "कक्षा में लिपि और वाणी",
    section: "vichar",
    slug: "script-and-speech-in-the-classroom",
    date: "2025-07-22",
    excerpt:
      "School knowledge moves in two tempos: what can be spoken quickly and what must be copied slowly. The classroom is where these tempos are forced into agreement.",
    body: [
      "A lesson enters the room as speech, chalk, printed page, and memory at once. Teachers compress paragraphs into sentences; students expand sentences back into pages of copied notes. What appears to be duplication is often translation between media with different speeds and different tolerances for error.",
      "This matters for archives of educational culture. Printed textbooks preserve official phrasing, but notebooks preserve the operational form of knowledge: abbreviations, diagrams, transliterated terms, and local substitutions that make a concept teachable within a given room. Script here is not merely a vessel for speech. It is the site where speech is stabilized, revised, and redistributed.",
      "When we examine classroom remnants, we should resist ranking print above copy. The textbook states the curriculum; the notebook records how the curriculum became usable.",
    ],
  },
  {
    title: "What a Copy Preserves",
    devanagari: "प्रतिलिपि क्या बचाती है",
    section: "vichar",
    slug: "what-a-copy-preserves",
    date: "2025-03-18",
    excerpt:
      "A copy does not preserve an original in full. It preserves certain relations: sequence, wording, layout habits, and the labor of transmission.",
    body: [
      "Modern criticism often treats copies as failed originals, useful only until a better witness appears. This is too narrow for archival work. Copies preserve conditions of use that originals may not show: what was worth recopying, which sections circulated, and what corrections had become standard by the time the copyist worked.",
      "In legal, pedagogic, and ritual traditions, copying is not secondary labor but a method of continuity. The copyist's decisions about line breaks, headings, and emphasis create a record of what counted as necessary structure. Even when wording is stable, the page may reveal changes in readership.",
      "A mature archive therefore describes copies on their own terms. Fidelity matters, but so does evidence of transmission. We preserve not only the text, but the history of its passage.",
    ],
  },
  {
    title: "Slow Reading and Statecraft",
    devanagari: "धीमा पठन और राज्यकर्म",
    section: "vichar",
    slug: "slow-reading-and-statecraft",
    date: "2024-09-09",
    excerpt:
      "Administrative texts reward a slower reading than they seem to invite. Their force often lies in qualifications, sequencing, and procedural exceptions.",
    body: [
      "Documents associated with governance are usually approached for extractable facts: names, dates, notifications, allocations. Yet administrative language is designed to regulate action through conditions. The phrase after the comma, the proviso at the end, and the order of procedural steps often carry more practical meaning than the headline declaration.",
      "Classical treatises and modern circulars share this trait in different registers. Both build authority through arrangement. One must read not only what is prescribed, but how the prescription is nested among limits, jurisdictions, and evidentiary requirements.",
      "Slow reading in this context is not literary indulgence. It is a technical method for avoiding false certainty.",
    ],
  },
  {
    title: "Cataloging the Ordinary",
    devanagari: "साधारण का सूचीकरण",
    section: "vichar",
    slug: "cataloging-the-ordinary",
    date: "2024-02-13",
    excerpt:
      "Archives are often judged by rare objects, but their public value is built from ordinary things described carefully and kept in relation.",
    body: [
      "The ordinary object resists display because it appears to explain itself. A school timetable, a ration card sleeve, a stitched file cover, or a tin label can seem too familiar to merit description. In fact, familiarity is precisely what makes these objects difficult to study later. Their functions are assumed and therefore left unwritten.",
      "Cataloging restores that missing description. Measurements, material notes, maker marks, purchase stamps, and evidence of repair transform an everyday thing into a historical witness. The object does not become important by being elevated; it becomes legible by being situated.",
      "An archive that neglects the ordinary eventually loses the ground on which extraordinary artifacts once stood.",
    ],
  },
  {
    title: "The Librarian and the Seal",
    devanagari: "पुस्तकपाल और मुहर",
    section: "katha",
    slug: "the-librarian-and-the-seal",
    date: "2025-11-08",
    excerpt:
      "A new librarian inherits a brass seal with no handle and a drawer of accession cards whose numbering breaks at unpredictable intervals.",
    body: [
      "When the district reading room reopened after repairs, the first object handed to the new librarian was not a key but a brass seal wrapped in newspaper. The wooden handle had long gone missing. She placed the seal on the table, face down, and spent the morning sorting cards whose numbers leaped from 412 to 417 and then back to 415 in another hand.",
      "By afternoon she understood that the breaks were not carelessness. The missing numbers marked books sent for binding, transferred to a school, or withdrawn after termite damage. None of this was recorded on the front of the cards. The evidence sat in faint pencil notes on the reverse, visible only when held against the window.",
      "She cut a temporary handle from a neem branch, wrapped the joint in cotton thread, and began restamping each repaired card with the date of review rather than the date of arrival. Visitors asked when the catalog would be modernized. She answered that it already was. Modernization, in that room, meant making the old sequence readable again.",
    ],
  },
  {
    title: "A Lamp in the Record Room",
    devanagari: "अभिलेख कक्ष में दीपक",
    section: "katha",
    slug: "a-lamp-in-the-record-room",
    date: "2025-05-02",
    excerpt:
      "During a power cut, a clerk continues sorting village maps by lantern light and discovers a folded tracing inserted into the wrong taluk bundle forty years earlier.",
    body: [
      "The power failed just as the monsoon rain began, and the ceiling fans slowed into silence. In the record room, where the windows were kept high for security, the clerk lit a kerosene lamp and continued tying map bundles because the inspection was due the next morning and delay would only produce more delay.",
      "He worked by district, then taluk, then village, reading the pencil annotations aloud to keep himself from misfiling them in the half-light. In one bundle he felt a sheet thinner than the others. It was a tracing, folded twice, showing a canal diversion that appeared in no later survey map. The date in the corner was from a year of flood, and the signature belonged to an engineer whose name survived only on a broken plaque outside the irrigation office.",
      "The tracing did not solve any present dispute. It did something quieter. It explained a field boundary that elders still described as temporary though it had lasted two generations. By the time electricity returned, the clerk had added one note to the bundle cover: 'Tracing found enclosed; retain with village maps.' The lamp smoked; the record held.",
    ],
  },
  {
    title: "The Copyist at Kumbakonam",
    devanagari: "कुंभकोणम् का नकलनवीस",
    section: "katha",
    slug: "the-copyist-at-kumbakonam",
    date: "2024-10-27",
    excerpt:
      "A temple accountant asks a local copyist to reproduce a ledger before the paper fails, and the copyist discovers that the margins contain the history everyone cites but nobody reads.",
    body: [
      "The ledger was brought wrapped in a faded towel, tied with string that had been retied too many times. Its paper had become brittle at the fold, and the temple accountant said only that the annual audit required a usable copy. The copyist in Kumbakonam spread the book on a low desk and began with the columns: date, donor, quantity, purpose.",
      "By the second afternoon he realized the ledger's real text lived in the margins. Beside routine entries were notes about delayed boats, shortage of jaggery, a mason's strike, and a year's interruption to a festival procession because the river steps were under repair. These were written in smaller hands, added over decades, and never carried into the summary statements.",
      "When he delivered the copy, he reproduced the margin notes in a separate column and marked them as 'concurrent remarks.' The accountant frowned at the extra pages until he noticed a note that explained an old discrepancy still discussed at meetings. The copyist said nothing. He accepted his fee, wrapped the original again, and wrote the date of completion on the string tag.",
    ],
  },
  {
    title: "Rain Over the Granary Ledger",
    devanagari: "कोठार बही पर वर्षा",
    section: "katha",
    slug: "rain-over-the-granary-ledger",
    date: "2024-04-16",
    excerpt:
      "A village school uses an old granary ledger for arithmetic practice until a teacher recognizes the entries as a local record of famine relief grain.",
    body: [
      "The ledger arrived at the school as scrap paper. Its cover was gone, and half the leaves had been removed. The teacher used the remaining pages for arithmetic because the ruled columns helped children line up sums. They copied numbers without asking what the headings once meant.",
      "One evening, while checking notebooks during rain, the teacher noticed repeated abbreviations beside the quantities: names of hamlets, not merchants. The dates matched a year older residents spoke of simply as 'the dry year.' The entries listed grain issued, returned, and waived, and the last pages carried marks beside names that had no numbers at all.",
      "The next week he stopped tearing pages from the ledger. He asked the oldest member of the panchayat to read the names aloud. Several families still lived in the same lanes. The school kept the ledger in the headmaster's cupboard after that, and arithmetic moved to fresh notebooks. The children still learned subtraction; they also learned that numbers can remember hunger.",
    ],
  },
  {
    title: "Ink Stamps and Public Trust",
    devanagari: "स्याही की मुहर और लोक-विश्वास",
    section: "itihas",
    slug: "ink-stamps-and-public-trust",
    date: "2025-08-29",
    excerpt:
      "The routine office stamp is a small technology of credibility. Its history reveals how institutions taught the public to recognize authorized documents at a glance.",
    body: [
      "Across South Asia, the ink stamp became ordinary so thoroughly that its administrative significance is easy to miss. Yet stamps solved a recurring problem in expanding paper bureaucracies: how to make authenticity quickly visible in crowded offices where clerks, petitioners, and messengers handled documents in rapid succession.",
      "The stamp condensed several signals into one impression: office name, jurisdiction, and often date. It reduced dependence on handwriting recognition and made document handling more standardized across transfers and archives. Even when signatures remained legally necessary, the stamp trained expectations about format and authority.",
      "To study the stamp historically is to study public trust as a material practice. The object itself is small, but it helped stabilize transactions in schools, courts, revenue offices, and libraries by making institutional presence reproducible on paper.",
    ],
  },
  {
    title: "How the School Atlas Entered the Home",
    devanagari: "स्कूल एटलस घर में कैसे आया",
    section: "itihas",
    slug: "how-the-school-atlas-entered-the-home",
    date: "2025-01-12",
    excerpt:
      "The school atlas became a domestic object through exam culture, second-hand circulation, and the habit of storing textbooks as family reference works.",
    body: [
      "The printed school atlas was designed for classrooms, but its life in India often exceeded that setting. Families retained atlases after examinations because maps served multiple domestic functions: locating a relative's posting, tracing a train route, or simply settling arguments about state boundaries after political reorganization.",
      "This migration from school desk to household shelf was supported by the durability of textbook binding and the economy of reuse. Older siblings passed volumes to younger ones; neighbors borrowed them during admissions season; stationery shops sold outdated editions cheaply once new syllabi appeared. An educational tool became a general reference object by sustained circulation rather than deliberate publishing strategy.",
      "The history matters because it shows how public knowledge infrastructures enter private memory. The atlas in the home is not only a remnant of schooling. It is evidence that certain forms of state-produced knowledge were considered practical enough to keep.",
    ],
  },
  {
    title: "Archaeology of the Tea Tin",
    devanagari: "चाय के टिन की पुरातत्वी कथा",
    section: "itihas",
    slug: "archaeology-of-the-tea-tin",
    date: "2024-08-01",
    excerpt:
      "The metal tea tin survives because households repeatedly reassigned it to storage. Its labels preserve a commercial history while its dents preserve domestic use.",
    body: [
      "The tea tin enters the archive by refusing to disappear. Once emptied, it becomes a container for buttons, temple wicks, sewing thread, receipts, or spice packets. This reassignment is not incidental; it is the object's long life. The printed label records one economy, while the residue of use records another.",
      "Material details matter here: hinge failure, replacement lids, rust patterns near the base, handwritten labels pasted over branded graphics. Each alteration marks a new domestic regime of storage. The tin's value in historical inquiry lies precisely in the coexistence of commercial print and improvised household classification.",
      "An archaeology of everyday life requires patience with such objects. They do not announce periodization dramatically. They reveal it through repeated use, repair, and retention.",
    ],
  },
  {
    title: "The History of the Steel Trunk",
    devanagari: "लोहे के बक्से का इतिहास",
    section: "itihas",
    slug: "history-of-the-steel-trunk",
    date: "2024-05-24",
    excerpt:
      "The steel trunk served as storage, furniture, transport, and inheritance chest. Its persistence marks changes in mobility, domestic planning, and trust in lockable space.",
    body: [
      "The steel trunk became a staple object in twentieth-century households because it answered multiple needs at once. It could be locked, stacked, moved by rail, and repurposed across life stages. Students carried books in it; newly married couples stored textiles; office workers kept papers safe during transfers; families used it as a bench when space was limited.",
      "Its standardization also mattered. Local metalworkers and regional manufacturers produced trunks in predictable sizes, making them compatible with transport and storage routines. Painted names, railway labels, and stencil numbers turned the trunk into a record surface as much as a container.",
      "When trunks remain in homes today, they preserve more than contents. They preserve an older logic of mobility in which valuable things had to remain ready for movement but safe between journeys.",
    ],
  },
  {
    title: "Public Reading Rooms and the Newspaper Rack",
    devanagari: "सार्वजनिक वाचनालय और समाचार-रैक",
    section: "itihas",
    slug: "public-reading-rooms-and-the-newspaper-rack",
    date: "2024-01-30",
    excerpt:
      "The newspaper rack in public reading rooms organized not just paper but civic time, gathering readers around daily sequence and shared reference.",
    body: [
      "In many towns, the newspaper rack was the most actively used piece of furniture in the reading room. It held papers in visible order, protected them from quick removal, and distributed access by making readers wait their turn for the same issue. The rack therefore shaped reading as a public sequence rather than a private possession.",
      "Its design varied, but the principle was consistent: attach the paper to a rod, preserve the fold, and allow browsing without easy tearing. This simple apparatus extended the life of fragile newsprint and made a small budget serve many readers across the day.",
      "To document reading rooms historically, one must document furniture as infrastructure. The rack is a modest example, but it reveals how institutions converted ephemeral print into a shared civic resource.",
    ],
  },
];

function compareDateDesc(a: Post, b: Post) {
  return new Date(`${b.date}T00:00:00Z`).getTime() - new Date(`${a.date}T00:00:00Z`).getTime();
}

function compareDateAsc(a: Post, b: Post) {
  return new Date(`${a.date}T00:00:00Z`).getTime() - new Date(`${b.date}T00:00:00Z`).getTime();
}

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

export function getAllPostsSorted() {
  return [...posts].sort(compareDateDesc);
}

export function getAllPostsChronological() {
  return [...posts].sort(compareDateAsc);
}

export function getRecentPosts(limit = 4) {
  return getAllPostsSorted().slice(0, limit);
}

export function getPostsBySection(section: Section) {
  return posts.filter((post) => post.section === section).sort(compareDateDesc);
}

export function getPostBySectionAndSlug(section: Section, slug: string) {
  return posts.find((post) => post.section === section && post.slug === slug) ?? null;
}

export function getSectionCount(section: Section) {
  return posts.reduce((count, post) => count + (post.section === section ? 1 : 0), 0);
}

export function getSectionStaticParams(section: Section) {
  return posts.filter((post) => post.section === section).map((post) => ({ slug: post.slug }));
}

export function getTotalEntryCount() {
  return posts.length;
}
