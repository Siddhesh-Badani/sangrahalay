"use client";

import Link from "next/link";
import * as React from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";

export function SiteNavbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <h1 className="font-display text-lg tracking-tight">
          <strong>Siddhesh Badani</strong>
        </h1>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[250px] gap-2 p-3">
                  <NavLink
                    href="/vichar"
                    title="Vichār"
                    desc="Short reflections and thinking in motion."
                  />
                  <NavLink
                    href="/katha"
                    title="Kathā"
                    desc="Narratives, project journeys, lived arcs."
                  />
                  <NavLink
                    href="/sangrah"
                    title="Saṅgrah"
                    desc="Curated collections and thematic groupings."
                  />
                  <NavLink
                    href="/pata"
                    title="Paṭa"
                    desc="Raw scrolls, notes, fragments, marginalia."
                  />
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <ModeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          "overflow-hidden border-t transition-all duration-200 md:hidden",
          isOpen ? "max-h-[36rem] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="mx-auto flex max-w-5xl flex-col items-left gap-3 px-4 py-3 text-left">
          <div>
            <p className="px-3 pb-1 text-xs tracking-wide text-muted-foreground">Explore</p>
            <MobileNavLink
              href="/vichar"
              title="Vichār"
              desc="Short reflections and thinking in motion."
              onSelect={() => setIsOpen(false)}
            />
            <MobileNavLink
              href="/katha"
              title="Kathā"
              desc="Narratives, project journeys, lived arcs."
              onSelect={() => setIsOpen(false)}
            />
            <MobileNavLink
              href="/sangrah"
              title="Saṅgrah"
              desc="Curated collections and thematic groupings."
              onSelect={() => setIsOpen(false)}
            />
            <MobileNavLink
              href="/pata"
              title="Paṭa"
              desc="Raw scrolls, notes, fragments, marginalia."
              onSelect={() => setIsOpen(false)}
            />

            <div className="h-px w-2/3 bg-border" />

            <div className="py-4">
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="w-full rounded-md px-3 py-2 text-center text-sm font-medium text-accent-foreground hover:text-accent-foreground transition-colors hover:bg-accent"
              >
                About
              </Link>

              <div className="py-3">
                <ModeToggle />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

function NavLink({
  href,
  title,
  desc,
}: {
  href: string;
  title: string;
  desc: string;
}) {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className="block rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        <div className="font-display text-sm text-accent-foreground">{title}</div>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </Link>
    </NavigationMenuLink>
  );
}

function MobileNavLink({
  href,
  title,
  desc,
  onSelect,
}: {
  href: string;
  title: string;
  desc: string;
  onSelect: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onSelect}
      className="block rounded-md px-3 py-2 text-left no-underline outline-none transition-colors hover:bg-accent"
    >
      <div className="font-display text-sm text-accent-foreground">{title}</div>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </Link>
  );
}
