import Link from "next/link";

import ClosingMark from "@/components/ClosingMark";

export default function NotFound() {
  return (
    <main className="">
      <div className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center text-center">
        
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          404
        </p>
        
        <p className="mt-7 text-xl italic text-foreground">
          What you were looking for is not here.
        </p>

        <p className="mt-2 text-xl italic text-muted-foreground opacity-80">
          Perhaps it was. Perhaps it will be.
        </p>

        <p className="text-6xl text-muted-foreground opacity-20">—</p>
        
        <p className="mt-10 text-sm text-muted-foreground">
          <Link href="/archive">← Return to the archive</Link>
        </p>
        
      </div>
    </main>
  );
}
