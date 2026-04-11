import CatalogCard from "@/components/CatalogCard";
import ClosingMark from "@/components/ClosingMark";
import SectionHeader from "@/components/SectionHeader";
import { SECTION_META, getPostsBySection } from "@/lib/content";

const section = "itihas" as const;

export default async function ItihasPage() {
  const entries = await getPostsBySection(section);
  const meta = SECTION_META[section];

  return (
    <main className="mx-auto max-w-6xl px-4 pb-16">
      <SectionHeader
        name={meta.name}
        devanagari={meta.devanagari}
        description={meta.listingDescription}
        count={entries.length}
        accentColor={meta.accentColor}
        iconSrc={meta.iconSrc}
      />

      <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {entries.map((post) => (
          <CatalogCard
            key={post.slug}
            title={post.title}
            slug={post.slug}
            section={post.section}
            date={post.date}
            excerpt={post.excerpt}
            form={post.form}
            showForm
          />
        ))}
      </section>

      <ClosingMark />
    </main>
  );
}
