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
        <h1 className="font-display text-lg tracking-tight">
          <strong>Siddhesh Badani</strong>
        </h1>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>

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
        <div className="font-display text-sm">{title}</div>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </Link>
    </NavigationMenuLink>
  );
}
