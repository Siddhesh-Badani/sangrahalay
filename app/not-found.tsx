import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">404 | Page Not Found</h1>
      <Button variant="outline">
        <Link href="/" className="text-sm text-muted-foreground">
          Go back home
        </Link>
      </Button>
    </main>
  );
}
