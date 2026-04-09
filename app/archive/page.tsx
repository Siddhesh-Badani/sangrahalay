import ClosingMark from "@/components/ClosingMark";
import ArchiveFilter from "@/components/ArchiveFilter";
import { getAllPostsSorted, getTotalEntryCount } from "@/lib/content";

export default async function ArchivePage() {
  const allPosts = await getAllPostsSorted();
  const totalEntries = await getTotalEntryCount();

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <header>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Complete Catalog
        </p>

        <h1 className="mt-4 text-5xl font-normal text-foreground">Archive</h1>
        <p className="mt-1 font-hindi text-2xl text-muted-foreground opacity-50">संग्रह</p>

        <p className="mt-3 font-mono text-xs text-muted-foreground">
          — {totalEntries} entries across 4 series
        </p>

        <hr className="my-8 border-border" />
      </header>

      <ArchiveFilter posts={allPosts} />

      <ClosingMark />
    </main>
  );
}
