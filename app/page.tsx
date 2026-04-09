import Link from "next/link";
import Image from "next/image";

import ClosingMark from "@/components/ClosingMark";
import PortalCard from "@/components/PortalCard";
import {
  ARCHIVE_ESTABLISHED_YEAR,
  SECTIONS,
  SECTION_META,
  Section,
  formatPostDate,
  getPostHref,
  getRecentPosts,
  getSectionCount,
  getSectionHref,
} from "@/lib/content";

export default async function Page() {
  const recentPosts = await getRecentPosts(4);
  const sectionCounts = Object.fromEntries(
    await Promise.all(SECTIONS.map(async (s) => [s, await getSectionCount(s)])),
  ) as Record<Section, number>;

  return (
    <main className="mx-auto max-w-6xl px-4">
      <section className="py-8 text-center md:py-10">
        <div className="mx-auto inline-block rounded-sm border border-border/60 bg-secondary p-1.5">
          <Image
            src="/logo.png"
            alt="Siddhesh Badani"
            width={300}
            height={300}
            className="h-56 w-56 rounded-sm md:h-64 md:w-64"
          />
        </div>

        <p className="mt-4 font-hindi text-4xl text-muted-foreground opacity-60 md:text-5xl">
          संग्रहालय
        </p>

        <h1 className="mt-2 text-5xl font-normal tracking-[-0.02em] text-foreground md:text-6xl">
          Sangrahalay
        </h1>

        <p className="mt-3 text-base italic text-muted-foreground md:text-lg">
          A quiet collection of thought, story, and record.
        </p>

        <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground opacity-60">
          Est. {ARCHIVE_ESTABLISHED_YEAR} · An independent archive
        </p>

        <hr className="mx-auto mt-8 max-w-xs border-border" />
      </section>

      <section aria-label="Section portals">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {SECTIONS.map((section) => {
            const meta = SECTION_META[section];

            return (
              <PortalCard
                key={section}
                name={meta.name}
                devanagari={meta.devanagari}
                description={meta.portalDescription}
                slug={getSectionHref(section)}
                count={sectionCounts[section]}
                accentColor={meta.accentColor}
              />
            );
          })}
        </div>
      </section>

      <section className="mt-10">
        <hr className="border-border" />

        <h2 className="mb-4 mt-5 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Recent Acquisitions
        </h2>

        <div className="grid gap-3 md:grid-cols-4">
          {recentPosts.map((post) => (
            <div
              key={`${post.section}:${post.slug}`}
              className="border border-border/60 bg-secondary/25 p-3.5"
            >
              <div className="h-full">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  <span
                    className="mr-1 inline-block size-1.5 rounded-full align-middle"
                    style={{ backgroundColor: SECTION_META[post.section].accentColor }}
                    aria-hidden="true"
                  />
                  {SECTION_META[post.section].name}
                </p>
                <p className="mt-1 text-sm text-foreground md:text-[15px]">
                  <Link href={getPostHref(post)}>{post.title}</Link>
                </p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {formatPostDate(post.date)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ClosingMark />
    </main>
  );
}
