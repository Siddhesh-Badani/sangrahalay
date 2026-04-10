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
          Every Piece, In Order
        </p>

        <h1 className="mt-4 text-5xl font-normal text-foreground">
          Archive \ <span className="font-hindi">संग्रह</span>
        </h1>
        <p className="mt-1 font-hindi text-2xl text-muted-foreground opacity-50"></p>

        <p className="mt-10 font-mono text-xs text-muted-foreground">
          ✦ {totalEntries} pieces across 4 collections
        </p>

        <hr className="my-8 border-border" />
      </header>

      <ArchiveFilter posts={allPosts} />

      <ClosingMark />
    </main>
  );
}
