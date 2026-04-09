"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { SECTION_META } from "@/lib/config";

const exploreItems = [
  {
    href: "/vichar",
    title: "Vichār \\ Reflections",
    descriptor: "Short pieces on life, ideas and meaning.",
    accentColor: SECTION_META.vichar.accentColor,
  },
  {
    href: "/katha",
    title: "Kathā \\ Tales",
    descriptor: "Stories told through character and arc.",
    accentColor: SECTION_META.katha.accentColor,
  },
  {
    href: "/itihas",
    title: "Itihās \\ As It Was",
    descriptor: "Memory and lived experience, revisited.",
    accentColor: SECTION_META.itihas.accentColor,
  },
  {
    href: "/kavita",
    title: "Kavitā \\ Poems",
    descriptor: "Language at its most distilled.",
    accentColor: SECTION_META.kavita.accentColor,
  },
];

function isSectionPath(pathname: string) {
  return exploreItems.some((item) => pathname === item.href || pathname.startsWith(`${item.href}/`));
}

function desktopNavItemClass(active = false) {
  return cn(
    "nav-item inline-flex h-auto items-center border-b px-0 py-1 text-sm transition-colors duration-150",
    active
      ? "border-b-[color:var(--gold)] text-foreground"
      : "border-b-transparent text-muted-foreground hover:!border-b-[color:var(--gold)] hover:!text-[hsl(var(--foreground))]"
  );
}

function exploreTriggerClass(active = false) {
  return cn(
    "nav-item h-auto rounded-none border-b px-0 py-1 text-sm font-normal shadow-none transition-colors duration-150",
    "border-b-transparent !bg-transparent hover:!bg-transparent focus:!bg-transparent data-[state=open]:!bg-transparent data-[state=open]:hover:!bg-transparent data-[state=open]:focus:!bg-transparent",
    "!text-muted-foreground hover:!text-foreground focus:!text-foreground data-[state=open]:!text-foreground",
    "focus-visible:outline-none focus-visible:ring-0",
    "[&_svg]:ml-1 [&_svg]:size-3 [&_svg]:text-muted-foreground hover:[&_svg]:text-[var(--gold)] data-[state=open]:[&_svg]:text-[var(--gold)]",
    active ? "border-b-[color:var(--gold)]" : "hover:border-b-[color:var(--gold)] data-[state=open]:border-b-[color:var(--gold)]"
  );
}

export function SiteNavbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const exploreActive = isSectionPath(pathname);

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const quillSrc = mounted && resolvedTheme === "dark" ? "/quill-dm.png" : "/quill.png";

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 supports-backdrop-filter:bg-background/80 supports-backdrop-filter:backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-2">
        <Link
          href="/"
          className="site-brand-link flex items-center gap-2 leading-none"
        >
          <Image
            src={quillSrc}
            alt=""
            width={64}
            height={64}
            className="h-13 w-10 rounded-sm"
            aria-hidden="true"
          />
          <span>
            <span className="block text-lg font-normal text-foreground">Sangrahalay</span>
            <span className="mt-0.5 block font-hindi text-xs text-muted-foreground opacity-75">
              संग्रहालय
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-4 md:flex">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="gap-5">
              <NavigationMenuItem>
                <NavigationMenuTrigger className={exploreTriggerClass(exploreActive)}>
                  Collections
                </NavigationMenuTrigger>
                <NavigationMenuContent className="md:w-[15rem] rounded-none border border-border/60 bg-background p-0 shadow-[2px_3px_8px_rgba(30,26,22,0.08)]">
                  <div className="divide-y divide-border/70">
                    {exploreItems.map((item) => (
                      <ExploreMenuLink
                        key={item.href}
                        href={item.href}
                        title={item.title}
                        descriptor={item.descriptor}
                        accentColor={item.accentColor}
                      />
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/archive"
                  className={desktopNavItemClass(
                    pathname === "/archive" || pathname.startsWith("/archive/")
                  )}
                  aria-current={pathname === "/archive" ? "page" : undefined}
                >
                  Archive
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/about"
                  className={desktopNavItemClass(pathname === "/about")}
                  aria-current={pathname === "/about" ? "page" : undefined}
                >
                  About
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <ModeToggle />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="rounded-none border border-border/60 text-muted-foreground hover:bg-secondary hover:text-foreground md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="size-4" /> : <Menu className="size-4" />}
        </Button>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          "overflow-hidden border-t border-border/70 bg-background transition-all duration-200 md:hidden",
          isOpen ? "max-h-160 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="mx-auto max-w-6xl px-4 py-4">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Collections
          </p>

          <div className="divide-y divide-border/70 border-y border-border/70">
            {exploreItems.map((item) => (
              <MobileExploreLink
                key={item.href}
                href={item.href}
                title={item.title}
                descriptor={item.descriptor}
                accentColor={item.accentColor}
                active={pathname === item.href || pathname.startsWith(`${item.href}/`)}
                onSelect={() => setIsOpen(false)}
              />
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/archive"
              onClick={() => setIsOpen(false)}
              className={desktopNavItemClass(
                pathname === "/archive" || pathname.startsWith("/archive/")
              )}
            >
              Archive
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className={desktopNavItemClass(pathname === "/about")}
            >
              About
            </Link>

            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}

function ExploreMenuLink({
  href,
  title,
  descriptor,
  accentColor,
}: {
  href: string;
  title: string;
  descriptor: string;
  accentColor: string;
}) {
  return (
    <Link
      href={href}
      style={{ "--item-accent": accentColor } as React.CSSProperties}
      className={cn(
        "group/item block border-b-0 border-l-4 border-l-transparent px-4 py-3 transition-[background-color,border-color] duration-150 ease-out",
        "hover:bg-accent/15 hover:border-l-(--item-accent) focus-visible:bg-accent/15 focus-visible:border-l-(--item-accent)",
        "focus-visible:outline-none focus-visible:ring-0"
      )}
    >
      <span className="block text-[15px] leading-snug text-foreground transition-colors duration-150 group-hover/item:text-(--pink) group-focus-visible/item:text-(--pink)">
        {title}
      </span>
      <span className="mt-1 block text-[12px] leading-snug italic text-muted-foreground">
        {descriptor}
      </span>
    </Link>
  );
}

function MobileExploreLink({
  href,
  title,
  descriptor,
  accentColor,
  active,
  onSelect,
}: {
  href: string;
  title: string;
  descriptor: string;
  accentColor: string;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onSelect}
      style={{ "--item-accent": accentColor } as React.CSSProperties}
      className={cn(
        "group/mobile block border-b-0 border-l-4 px-3 py-3 transition-[background-color,border-color] duration-150",
        active
          ? "border-l-(--item-accent) bg-secondary/40"
          : "border-l-transparent hover:border-l-(--item-accent) hover:bg-accent/10"
      )}
    >
      <span
        className={cn(
          "block text-[15px] leading-snug transition-colors duration-150",
          active
            ? "text-foreground"
            : "text-foreground group-hover/mobile:text-(--pink)"
        )}
      >
        {title}
      </span>
      <span className="mt-1 block text-[12px] leading-snug italic text-muted-foreground">
        {descriptor}
      </span>
    </Link>
  );
}

export default SiteNavbar;
