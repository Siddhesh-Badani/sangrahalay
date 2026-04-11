import ClosingMark from "@/components/ClosingMark";
import {
  ARCHIVE_ESTABLISHED_YEAR,
  getTotalEntryCount,
} from "@/lib/content";
import Image from "next/image";

type TextBlock = { type: "text"; content: string };
type ImageBlock = { type: "image"; src: string; alt: string; caption?: string };
type ContentBlock = TextBlock | ImageBlock;

const authorContent: ContentBlock[] = [
  {
    type: "text",
    content:
      "The earliest origin of all this is a tiny bookshop in Nagpur called City Book Shop. My mother would take me there, and I would pull a Secret Seven off the shelf and be lost for days. That was where reading stopped being something I did and became something I was. From there the trail ran through Famous Five, Rick Riordan, Harry Potter, Tahereh Mafi, John Green. Each one was a door that opened into another door.",
  },
  {
    type: "image",
    src: "/city-book-shop.png",
    alt: "City Book Shop in Nagpur, where my love for reading began.",
    caption: "City Book Shop in Nagpur, where my love for reading began.",
  },
  { type: "text", content: "But reading alone was never enough. I needed to make things." },
  {
    type: "text",
    content:
      "In second grade, my father took me to his office. I discovered a laptop, opened Microsoft Word, found the clipart feature, and that was it. I spent the entire afternoon building a seven-page book. A short story illustrated with Microsoft clipart. We walked next door to an internet cafe run by friends of my father and got it printed. I drew a barcode by hand. I made a front cover and a back cover and publication pages. I taped the spine together with glitter tape left over from a school project. I called it Siddhesh Publications. I was eight years old and I was not writing a story. I was building the architecture of a book, because the object itself mattered to me as much as what was inside it.",
  },
  { type: "text", content: "That instinct never left." },
  {
    type: "text",
    content:
      "In eighth grade, a short story grew into a full novel called My Destiny. It happened because of Hillary Ma'am, my middle school teacher, who read my early writing and decided it was worth pushing further. What started as a few pages became something I could not stop writing. The book was never commercially published, but my parents made sure it became real. My father and mother, who have backed every creative instinct I have ever had without hesitation, connected me with Narendra Gandhi uncle, a family friend who runs a printing press. He printed it like a proper book. We held a launch. Friends came. Teachers came. Family came. I was fourteen. It was the most important thing that had ever happened to me.",
  },
  {
    type: "image",
    src: "/my-destiny.png",
    alt: "My Destiny Book Launch Event.",
    caption: "My Destiny Book Launch Event.",
  },
  {
    type: "text",
    content:
      "The sequel, Destiny Calling, came during COVID, released as an online version. Both are available to read here. I also made a short film around this time, which you can watch here.",
  },
  { type: "text", content: "After 2023, I stopped writing." },
  {
    type: "text",
    content:
      "I had moved to the United States to study. For a while I still wrote, sharing things on Instagram. But Instagram was the wrong vessel. It demanded performance where I wanted sincerity. It rewarded frequency where I needed patience. And then a block settled in. Not the dramatic kind. The quiet kind. The kind where you simply stop and do not notice for a long time.",
  },
  { type: "text", content: "Three years passed." },
  {
    type: "text",
    content:
      "But the silence was not empty. Everything I lived through in that time, the distance from India, the strangeness of carrying a culture into a place that does not share it, the slow remaking of who I was, all of it was settling into something. I did not know it then. I know it now.",
  },
  {
    type: "text",
    content:
      "Sangrahalay is what emerged. It carries my Jain upbringing, my Indic roots, the particular way of seeing that comes from growing up in one world and learning to articulate it inside another. It is shaped by Nagpur and Arizona, by Sanskrit etymologies and English prose, by the experience of holding two sensibilities together without collapsing either into the other.",
  },
  {
    type: "text",
    content:
      "And if I am honest, it is also still the same impulse as that clipart book from second grade. The need to give form to what is felt. To make the object, not just the words. Only now the form is an archive, and the architecture is built to last.",
  },
];

export default async function AuthorPage() {
  const totalEntries = await getTotalEntryCount();

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <section className="mx-auto max-w-[65ch]">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Author
        </p>

        <h1 className="text-4xl font-normal text-foreground md:text-5xl">I am Siddhesh Badani.</h1>

        <hr className="my-8 border-border" />

        <div className="folio-prose space-y-6 text-[17px] leading-[1.85] text-foreground md:text-lg">
          {authorContent.map((block, index) =>
            block.type === "image" ? (
              <figure key={index} className="my-2">
                <Image
                  src={block.src}
                  alt={block.alt}
                  width={800}
                  height={500}
                  className="w-full rounded-sm object-cover"
                />
                {block.caption && (
                  <figcaption className="mt-2 mb-10 text-center font-mono text-xs text-muted-foreground">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            ) : (
              <p key={index}>{block.content}</p>
            )
          )}
        </div>
      </section>

      <ClosingMark />
    </main>
  );
}
