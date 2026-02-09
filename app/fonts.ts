import { Sahitya, Alegreya } from "next/font/google";

export const sahitya = Sahitya({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sahitya",
  display: "swap",
});

export const alegreya = Alegreya({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-alegreya",
  display: "swap",
});
