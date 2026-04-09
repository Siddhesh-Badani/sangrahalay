import Link from "next/link";
import Image from "next/image";

import ClosingMark from "@/components/ClosingMark";
import PortalCard from "@/components/PortalCard";
import {
  ARCHIVE_ESTABLISHED_YEAR,
  SECTIONS,
  SECTION_META,
  formatPostDate,
  getPostHref,
  getRecentPosts,
  getSectionCount,
  getSectionHref,
} from "@/lib/content";

export default function Page() {
  const recentPosts = getRecentPosts(4);

  return (
    <main className="mx-auto max-w-6xl px-4">
      <section className="py-10 text-center md:py-14">
        <div className="mx-auto inline-block rounded-sm border border-border/60 bg-secondary p-1.5">
          <Image src="/logo.png" alt="Siddhesh Badani" width={350} height={350} className="rounded-sm" />
        </div>

        <p className="mt-6 font-hindi text-5xl text-muted-foreground opacity-60 md:text-6xl">
          संग्रहालय
        </p>

        <h1 className="mt-2 text-6xl font-normal tracking-[-0.02em] text-foreground md:text-7xl">
          Sangrahalay
        </h1>

        <p className="mt-4 text-lg italic text-muted-foreground">
          A quiet collection of thought, story, and record.
        </p>

        <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground opacity-60">
          Est. {ARCHIVE_ESTABLISHED_YEAR} · An independent archive
        </p>

        <hr className="mx-auto mt-10 max-w-xs border-border" />
      </section>

      <section aria-label="Section portals">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {SECTIONS.map((section) => {
            const meta = SECTION_META[section];

            return (
              <PortalCard
                key={section}
                name={meta.name}
                devanagari={meta.devanagari}
                description={meta.portalDescription}
                slug={getSectionHref(section)}
                count={getSectionCount(section)}
                accentColor={meta.accentColor}
              />
            );
          })}
        </div>
      </section>

      <section className="mt-14">
        <hr className="border-border" />

        <h2 className="mb-4 mt-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Recent Acquisitions
        </h2>

        <div className="flex overflow-x-auto pb-2">
          {recentPosts.map((post, index) => (
            <div
              key={`${post.section}:${post.slug}`}
              className="flex min-w-[16rem] shrink-0 items-stretch gap-6 pr-6 md:min-w-[18rem] md:gap-8 md:pr-8"
            >
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  <span
                    className="mr-1 inline-block size-1.5 rounded-full align-middle"
                    style={{ backgroundColor: SECTION_META[post.section].accentColor }}
                    aria-hidden="true"
                  />
                  {SECTION_META[post.section].name}
                </p>
                <p className="mt-1 text-base text-foreground">
                  <Link href={getPostHref(post)}>{post.title}</Link>
                </p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {formatPostDate(post.date)}
                </p>
              </div>

              {index < recentPosts.length - 1 ? (
                <div className="my-1 w-px shrink-0 bg-border/70" aria-hidden="true" />
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <ClosingMark />
    </main>
  );
}
