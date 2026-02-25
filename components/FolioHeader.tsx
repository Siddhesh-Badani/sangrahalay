import { SECTION_META, formatPostDate, type Section } from "@/lib/content";

type FolioHeaderProps = {
  title: string;
  section: Section;
  date: string;
  excerpt?: string;
  devanagari?: string;
};

export function FolioHeader({ title, section, date, excerpt, devanagari }: FolioHeaderProps) {
  const meta = SECTION_META[section];

  return (
    <header>
      <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {meta.name} → {title}
      </p>

      <h1 className="text-4xl font-normal text-foreground md:text-5xl">{title}</h1>

      {devanagari ? (
        <p className="mt-1 font-hindi text-xl text-muted-foreground opacity-50">{devanagari}</p>
      ) : null}

      <div className="mt-5 flex flex-wrap items-center gap-4">
        <p className="font-mono text-sm text-muted-foreground">{formatPostDate(date)}</p>
        <span className="h-4 w-px bg-border" aria-hidden="true" />
        <p className="text-xs uppercase tracking-widest text-primary">{meta.name}</p>
      </div>

      <hr className="my-6 border-border" />

      {excerpt ? (
        <p className="border-l-2 border-l-primary pl-4 text-base italic text-muted-foreground">
          {excerpt}
        </p>
      ) : null}
    </header>
  );
}

export default FolioHeader;
