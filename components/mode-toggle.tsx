"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Toggle } from "@/components/ui/toggle";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const isAnimatingRef = React.useRef(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    if (isAnimatingRef.current) return;

    const root = document.documentElement;
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setTheme(nextTheme);
      return;
    }

    isAnimatingRef.current = true;
    root.classList.remove("theme-fade-in");
    root.classList.add("theme-fade-out");

    window.setTimeout(() => {
      setTheme(nextTheme);
      root.classList.remove("theme-fade-out");
      root.classList.add("theme-fade-in");

      window.setTimeout(() => {
        root.classList.remove("theme-fade-in");
        isAnimatingRef.current = false;
      }, 300);
    }, 200);
  };

  if (!mounted) return null;

  return (
    <Toggle
      aria-label="Toggle theme"
      pressed={resolvedTheme === "dark"}
      onPressedChange={handleToggle}
      className="relative data-[state=on]:bg-pink-soft hover:bg-muted hover:text-muted-foreground"
    >
      <span className="relative inline-flex h-[1.2rem] w-[1.2rem] items-center justify-center">
        <Sun className="absolute h-[1.2rem] w-[1.2rem] scale-100 rotate-0 opacity-100 transition-all duration-500 ease-out dark:scale-0 dark:-rotate-90 dark:opacity-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 opacity-0 transition-all duration-500 ease-out dark:scale-100 dark:rotate-0 dark:opacity-100" />
      </span>
      <span className="sr-only">Toggle theme</span>
    </Toggle>
  );
}
