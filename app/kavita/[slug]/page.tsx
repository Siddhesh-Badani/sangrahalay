import Link from "next/link";
import { notFound } from "next/navigation";

import FolioHeader from "@/components/FolioHeader";
import {
  SECTION_META,
  getPostBySectionAndSlug,
  getSectionHref,
  getSectionStaticParams,
} from "@/lib/content";

const section = "sutra" as const;

type SutraEntryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getSectionStaticParams(section);
}

export default async function SutraEntryPage({ params }: SutraEntryPageProps) {
  const { slug } = await params;
  const post = await getPostBySectionAndSlug(section, slug);

  if (!post) {
    notFound();
  }

  const meta = SECTION_META[section];

  return (
    <main className="px-4 py-12">
      <article className="mx-auto max-w-[65ch]">
        <FolioHeader
          title={post.title}
          section={post.section}
          date={post.date}
          excerpt={post.excerpt}
          devanagari={post.devanagari}
        />

        <div
          className="folio-prose space-y-6 text-[17px] leading-[1.85] text-foreground md:text-lg"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />

        <footer>
          <hr className="my-8 border-border" />

          <p className="text-sm text-muted-foreground">
            <Link href={getSectionHref(section)}>← Return to {meta.name}</Link>
          </p>

          <p className="mt-4 text-center font-mono text-xs text-muted-foreground opacity-40">
            — End of entry —
          </p>
        </footer>
      </article>
    </main>
  );
}
