import "./globals.css";
import { sahitya, alegreya } from "./fonts";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteNavbar } from "@/components/site-navbar";
import ArchiveBackground from "@/components/archive-background";
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html
        lang="en"
        suppressHydrationWarning
        className={`${sahitya.variable} ${alegreya.variable}`}
      >
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ArchiveBackground>
            <SiteNavbar />
            {children}
            </ArchiveBackground>
          </ThemeProvider>
          <Analytics />
        </body>
      </html>
    </>
  );
}
