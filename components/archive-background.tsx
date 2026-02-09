type ArchiveBackgroundProps = {
  children: React.ReactNode;
};

export default function ArchiveBackground({ children }: ArchiveBackgroundProps) {
  return (
    <main
      className="
        relative min-h-dvh overflow-hidden

        /* LIGHT MODE */
        bg-[radial-gradient(1200px_circle_at_10%_10%,rgba(180,154,90,0.18),transparent_60%),radial-gradient(900px_circle_at_85%_20%,rgba(228,90,140,0.18),transparent_55%),linear-gradient(180deg,#f7f2ec,transparent_45%,#f3ece4)]

        /* DARK MODE */
        dark:bg-[radial-gradient(1200px_circle_at_10%_10%,rgba(180,154,90,0.16),transparent_60%),radial-gradient(900px_circle_at_85%_20%,rgba(228,90,140,0.14),transparent_55%),linear-gradient(180deg,#0b0c10,transparent_45%,#0a0b0f)]
      "
    >
      {/* Left ambient glow */}
      <div
        className="
          pointer-events-none absolute -left-24 top-24 h-64 w-64 rounded-full
          bg-[conic-gradient(from_40deg,rgba(180,154,90,0.35),rgba(228,90,140,0.18),transparent_70%)]
          blur-2xl
          dark:opacity-60
        "
      />

      {/* Right ambient glow */}
      <div
        className="
          pointer-events-none absolute -right-16 bottom-10 h-72 w-72 rounded-full
          bg-[radial-gradient(circle_at_30%_30%,rgba(228,90,140,0.25),transparent_60%)]
          blur-3xl
          dark:opacity-60
        "
      />

      {children}
    </main>
  );
}
