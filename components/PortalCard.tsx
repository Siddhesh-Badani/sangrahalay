import Link from "next/link";

import { SECTIONS, type Section } from "@/lib/content";

type PortalCardProps = {
  name: string;
  devanagari: string;
  description: string;
  slug: string;
  count: number;
  accentColor: string;
};

function getPortalNumber(slug: string) {
  const key = slug.replace(/^\//, "") as Section;
  const index = SECTIONS.indexOf(key);

  if (index < 0) {
    return "00";
  }

  return String(index + 1).padStart(2, "0");
}

export function PortalCard({
  name,
  devanagari,
  description,
  slug,
  count,
  accentColor,
}: PortalCardProps) {
  return (
    <article
      className="group border border-border border-t-2 bg-background p-6 transition-colors duration-200 ease-out hover:bg-secondary md:p-7"
      style={{ borderTopColor: accentColor }}
    >
      <p className="mb-2 font-mono text-xs text-muted-foreground opacity-50">
        {getPortalNumber(slug)}
      </p>

      <h2 className="text-2xl font-normal text-foreground">
        <Link href={slug}>{name}</Link>
      </h2>
      <p className="mt-1 font-hindi text-base text-muted-foreground opacity-70">{devanagari}</p>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>

      <p className="mt-3 font-mono text-xs text-muted-foreground opacity-60">— {count} entries</p>

      <p className="mt-5">
        <Link
          href={slug}
          className="inline-block border-b border-transparent text-sm text-muted-foreground opacity-40 transition-all duration-150 group-hover:border-b-(--pink) group-hover:text-(--pink) group-hover:opacity-100"
        >
          Enter →
        </Link>
      </p>
    </article>
  );
}

export default PortalCard;
