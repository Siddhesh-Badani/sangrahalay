import Link from "next/link";

import { SECTION_META, formatPostDate, getPostHref, type Section } from "@/lib/content";

type CatalogCardProps = {
  title: string;
  slug: string;
  section: Section;
  date: string;
  excerpt: string;
};

export function CatalogCard({ title, slug, section, date, excerpt }: CatalogCardProps) {
  const href = getPostHref({ section, slug });
  const meta = SECTION_META[section];

  return (
    <article
      className="group border border-border/70 border-t-2 bg-secondary p-5 [box-shadow:2px_2px_0px_rgba(30,26,22,0.07)] transition-[box-shadow,transform] duration-150 ease-out hover:-translate-y-0.5 hover:[box-shadow:3px_3px_0px_rgba(30,26,22,0.11)]"
      style={{ borderTopColor: meta.accentColor }}
    >
      <div className="flex items-start justify-between gap-3">
        <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
          {meta.name}
        </p>
        <p className="font-mono text-[11px] text-muted-foreground">{formatPostDate(date)}</p>
      </div>

      <div className="my-3 h-px bg-border/70" />

      <h2 className="text-lg leading-snug font-normal text-foreground">
        <Link href={href}>{title}</Link>
      </h2>

      <p className="mt-2 line-clamp-2 text-sm italic text-muted-foreground">{excerpt}</p>

      <div className="mt-4">
        <Link
          href={href}
          className="border-b border-transparent text-sm text-muted-foreground opacity-0 transition-all duration-150 ease-out group-hover:opacity-100 group-focus-within:opacity-100 group-hover:border-b-[color:var(--pink)] group-focus-within:border-b-[color:var(--pink)] group-hover:text-[var(--pink)] group-focus-within:text-[var(--pink)]"
        >
          → Read entry
        </Link>
      </div>
    </article>
  );
}

export default CatalogCard;
