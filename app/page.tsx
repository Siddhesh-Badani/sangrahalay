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
      <section className="pb-8 pt-4 md:pb-10 md:pt-3">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:items-center md:gap-10 md:text-left">
          <div className="w-full md:w-1/2">
            <Image
              src="/flower1.png"
              alt="abstract illustration"
              width={700}
              height={700}
              className="h-auto w-full rounded-sm object-cover"
            />
          </div>

          <div className="w-full md:w-1/2">
            <p className="font-hindi text-4xl text-muted-foreground opacity-60 md:text-5xl">
              संग्रहालय
            </p>

            <h1 className="mt-2 text-5xl font-normal tracking-[-0.02em] text-foreground md:text-6xl">
              Sangrahalay
            </h1>

            <p className="mt-6 text-base font-bold italic text-muted-foreground md:text-lg">
              What was Thought. What was Felt. What Remains.
            </p>

            <p className="mt-2 text-base text-muted-foreground md:text-lg">
              This is Sangrahalay... A quiet space for reflection, story, memory and verse. For a
              world that reads fast and forgets faster, writing collected not for attention, but for
              permanence. Gathered with intention, held without urgency.
            </p>

            <p className="mt-2 text-base text-muted-foreground md:text-lg">
              For a world that reads fast and forgets faster, writing collected not for attention,
              but for permanence. Gathered with intention, held without urgency.
            </p>

            <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground opacity-60">
              Est. {ARCHIVE_ESTABLISHED_YEAR}
            </p>
          </div>
        </div>
      </section>

      <section aria-label="Section portals" className="pb-2">
        <hr className="mx-auto mb-8 max-w-xs border-border" />

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
                iconSrc={meta.iconSrc}
              />
            );
          })}
        </div>
      </section>

      <section className="mt-10">
        <hr className="border-border" />

        <h2 className="mb-4 mt-5 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          A place to begin... Few pieces, handpicked with care.
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
