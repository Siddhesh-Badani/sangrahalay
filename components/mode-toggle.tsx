"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Toggle } from "@/components/ui/toggle";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <Toggle
      aria-label="Toggle theme"
      pressed={theme === "dark"}
      onPressedChange={handleToggle}
      className="data-[state=on]:bg-pink-soft hover:bg-muted hover:text-muted-foreground"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Toggle>
  );
}
