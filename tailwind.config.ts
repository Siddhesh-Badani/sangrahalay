import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", ".dark"],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        parchment: "var(--parchment)",
        ink: "var(--ink)",
        "text-muted": "var(--text-muted)",
        gold: "var(--gold)",
        pink: "var(--pink)",
        "pink-soft": "var(--pink-soft)",
      },
    },
  },
};

export default config;
