type SectionHeaderProps = {
  name: string;
  devanagari: string;
  description: string;
  count: number;
  accentColor: string;
};

export function SectionHeader({ name, devanagari, description, count, accentColor }: SectionHeaderProps) {
  return (
    <header className="mx-auto max-w-6xl px-4 pt-12">
      <h1
        className="border-l-4 pl-3 text-4xl font-normal text-foreground md:text-5xl"
        style={{ borderLeftColor: accentColor }}
      >
        {name}
      </h1>
      <p className="mt-1 pl-3 font-hindi text-xl text-muted-foreground opacity-75">{devanagari}</p>

      <hr className="my-6 border-border" />

      <p className="max-w-prose text-base text-muted-foreground">{description}</p>

      <p className="mt-5 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        Collected ✦ {count} pieces
      </p>
    </header>
  );
}

export default SectionHeader;
