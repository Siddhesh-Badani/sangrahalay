import "./globals.css";
import { sahitya, alegreya } from "./fonts";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

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
            {children}
            <ModeToggle />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
