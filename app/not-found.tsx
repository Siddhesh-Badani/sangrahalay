import Link from "next/link";

import ClosingMark from "@/components/ClosingMark";

export default function NotFound() {
  return (
    <main className="min-h-screen px-4">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center text-center">
        <p className="text-6xl text-muted-foreground opacity-20">—</p>

        <p className="mt-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          404
        </p>

        <p className="mt-2 text-xl italic text-foreground">
          This entry has not been cataloged.
        </p>

        <p className="mt-3 text-sm text-muted-foreground">
          The record may have been moved, misfiled, or not yet acquired.
        </p>

        <p className="mt-6 text-sm text-muted-foreground">
          <Link href="/archive">← Return to the archive</Link>
        </p>

        <ClosingMark />
      </div>
    </main>
  );
}
