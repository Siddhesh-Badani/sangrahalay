import ClosingMark from "@/components/ClosingMark";
import {
  ARCHIVE_ESTABLISHED_YEAR,
  getTotalEntryCount,
} from "@/lib/content";

const aboutParagraphs = [
  "Sangrahalay is a place of collection and record. It is not organized by genre prestige or by the distinction between scholarly and ordinary material, but by a simpler discipline: to keep things carefully enough that they may be read again under better light. The archive gathers written forms that carry memory, argument, procedure, and use.",
  "Its four sections describe modes of keeping rather than categories of taste. Sūtra preserves condensed formulations and working principles; Vichār holds extended thought and reflective prose; Kathā carries knowledge in narrative form; Itihās maintains the long view through objects, institutions, and material histories. Each series is complete only in relation to the others.",
  "The method of this archive is deliberate restraint. Description is favored over display, sequence over spectacle, and accuracy over sentiment. Materials are added slowly so that each entry can be placed within a usable record rather than accumulated as an undeciphered heap.",
  "An archive is not made for preservation alone. Things kept carefully become available for return: to reread, to compare, to correct, and to reconsider. The point of retention is renewed use.",
];

export default function AboutPage() {
  const totalEntries = getTotalEntryCount();

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <section className="mx-auto max-w-[65ch]">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          About this Archive
        </p>

        <h1 className="text-4xl font-normal text-foreground md:text-5xl">
          A Note on the Collection
        </h1>

        <hr className="my-8 border-border" />

        <div className="folio-prose space-y-6 text-[17px] leading-[1.85] text-foreground md:text-lg">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-sm">
        <hr className="border-border" />

        <dl className="mt-2">
          <div className="flex items-center justify-between gap-4 border-b border-border py-3">
            <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Sections
            </dt>
            <dd className="text-base text-foreground">4</dd>
          </div>
          <div className="flex items-center justify-between gap-4 border-b border-border py-3">
            <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Total entries
            </dt>
            <dd className="text-base text-foreground">{totalEntries}</dd>
          </div>
          <div className="flex items-center justify-between gap-4 border-b border-border py-3">
            <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Established
            </dt>
            <dd className="text-base text-foreground">{ARCHIVE_ESTABLISHED_YEAR}</dd>
          </div>
          <div className="flex items-center justify-between gap-4 border-b border-border py-3">
            <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Format
            </dt>
            <dd className="text-base text-foreground">Text</dd>
          </div>
        </dl>
      </section>

      <ClosingMark />
    </main>
  );
}
