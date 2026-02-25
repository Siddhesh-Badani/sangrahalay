type SectionHeaderProps = {
  name: string;
  devanagari: string;
  description: string;
  count: number;
};

export function SectionHeader({ name, devanagari, description, count }: SectionHeaderProps) {
  return (
    <header className="mx-auto max-w-6xl px-4 pt-12">
      <h1 className="text-4xl font-normal text-foreground md:text-5xl">{name}</h1>
      <p className="mt-1 font-hindi text-xl text-muted-foreground opacity-60">{devanagari}</p>

      <hr className="my-6 border-border" />

      <p className="max-w-prose text-base text-muted-foreground">{description}</p>

      <p className="mt-5 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        Accession series · {count} entries
      </p>
    </header>
  );
}

export default SectionHeader;
