import Image from "next/image";
import Link from "next/link";

import { SECTIONS, type Section } from "@/lib/content";

type PortalCardProps = {
  name: string;
  devanagari: string;
  description: string;
  slug: string;
  count: number;
  accentColor: string;
  iconSrc: string;
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
  iconSrc,
}: PortalCardProps) {
  return (
    <article
      className="group border border-border border-t-5 bg-background p-6 transition-colors duration-200 ease-out hover:bg-secondary md:p-7"
      style={{ borderTopColor: accentColor }}
    >
      <div className="mb-3 flex items-center justify-between">
        <p className="font-mono text-xs text-muted-foreground opacity-50">
          {getPortalNumber(slug)}
        </p>
        <Image
          src={iconSrc}
          alt=""
          width={48}
          height={48}
          className="h-12 w-12 object-contain opacity-70"
          aria-hidden="true"
        />
      </div>

      <h2 className="text-2xl font-normal text-foreground">
        <Link href={slug}>{name}</Link>
      </h2>
      <p className="mt-1 font-hindi text-base text-muted-foreground opacity-70">{devanagari}</p>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>

      <p className="mt-3 font-mono text-xs text-muted-foreground opacity-60">✦ {count} pieces</p>

      <p className="mt-5">
        <Link
          href={slug}
          className="inline-block border-b border-transparent text-sm text-muted-foreground opacity-40 transition-all duration-150 group-hover:border-b-(--pink) group-hover:text-(--pink) group-hover:opacity-100"
        >
          Browse →
        </Link>
      </p>
    </article>
  );
}

export default PortalCard;
