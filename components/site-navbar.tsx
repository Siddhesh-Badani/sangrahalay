"use client";

import Link from "next/link";
import * as React from "react";
import { Menu, X } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";

export function SiteNavbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link href="/" className="font-display text-lg tracking-tight">
          Sangrahalay
        </Link>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {/* Simple link */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/sutra">Sūtra</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Browse</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[360px] gap-2 p-3">
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

            {/* Simple link */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <ModeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t bg-background md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-3">
            <Link
              href="/sutra"
              className="rounded-md px-2 py-2 hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              Sūtra
            </Link>
            <div className="px-2 py-2">
              <div className="font-semibold">Browse</div>
              <div className="ml-2 flex flex-col gap-1 mt-1">
                <Link
                  href="/vichar"
                  className="text-sm text-muted-foreground hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Vichār
                </Link>
                <Link
                  href="/katha"
                  className="text-sm text-muted-foreground hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Kathā
                </Link>
                <Link
                  href="/sangrah"
                  className="text-sm text-muted-foreground hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Saṅgrah
                </Link>
                <Link
                  href="/pata"
                  className="text-sm text-muted-foreground hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Paṭa
                </Link>
              </div>
            </div>
            <Link
              href="/about"
              className="rounded-md px-2 py-2 hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
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
        <div className="font-display text-sm">{title}</div>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </Link>
    </NavigationMenuLink>
  );
}
