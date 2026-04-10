import { SECTION_META, formatPostDate, type Section } from "@/lib/content";

type FolioHeaderProps = {
  title: string;
  section: Section;
  date: string;
  excerpt?: string;
  devanagari?: string;
  form?: string;
};

export function FolioHeader({ title, section, date, excerpt, devanagari, form }: FolioHeaderProps) {
  const meta = SECTION_META[section];
  const label = form ?? meta.name;

  return (
    <header>

      <div className="mt-5 flex flex-wrap items-center gap-4">
        <p className="font-mono text-sm text-muted-foreground">{formatPostDate(date)}</p>
        <span className="h-4 w-px bg-border" aria-hidden="true" />
        <p className="font-mono text-xs uppercase tracking-widest" style={{ color: meta.accentColor }}>
          {label}
        </p>
      </div>

      <h1 className="mt-5 text-4xl font-normal text-foreground md:text-5xl">{title}</h1>

      {devanagari ? (
        <p className="mt-1 font-hindi text-xl text-muted-foreground opacity-50">{devanagari}</p>
      ) : null}

      <div className="mt-5">
        {excerpt ? (
          <p
            className="border-l-2 pl-4 text-base italic text-muted-foreground"
            style={{ borderLeftWidth: '6px', borderLeftColor: meta.accentColor }}
          >
            {excerpt}
          </p>
        ) : null}
      </div>
      <hr className="my-6 border-border" />
    </header>
  );
}

export default FolioHeader;
