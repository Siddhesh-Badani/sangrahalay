"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Toggle } from "@/components/ui/toggle";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    const isDark = resolvedTheme === "dark";
    const nextTheme = isDark ? "light" : "dark";

    if (typeof window === "undefined") {
      setTheme(nextTheme);
      return;
    }

    const root = document.documentElement;
    const transitionClass = isDark ? "theme-wipe-right" : "theme-wipe-left";
    const docWithTransition = document as Document & {
      startViewTransition?: (callback: () => void) => {
        finished: Promise<void>;
      };
    };

    if (!docWithTransition.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTheme(nextTheme);
      return;
    }

    root.classList.add(transitionClass);
    const transition = docWithTransition.startViewTransition(() => {
      setTheme(nextTheme);
    });

    transition.finished.finally(() => {
      root.classList.remove(transitionClass);
    });
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
