import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

export {
  SECTIONS,
  SECTION_META,
  ARCHIVE_ESTABLISHED_YEAR,
  getPostHref,
  getSectionHref,
  formatPostDate,
  type Section,
  type Post,
  type SectionMeta,
} from "@/lib/config";

import type { Post, Section } from "@/lib/config";
import { SECTIONS } from "@/lib/config";

// --- Private helpers ---

const sectionCache = new Map<Section, Post[]>();

async function getPostsForSection(section: Section): Promise<Post[]> {
  if (sectionCache.has(section)) return sectionCache.get(section)!;

  const dir = path.join(process.cwd(), "content", section);
  let entries: string[];
  try {
    entries = await fs.promises.readdir(dir);
  } catch {
    sectionCache.set(section, []);
    return [];
  }
  const files = entries.filter((f) => f.endsWith(".md"));

  const posts = await Promise.all(
    files.map(async (filename) => {
      const raw = await fs.promises.readFile(path.join(dir, filename), "utf8");
      const { data } = matter(raw);
      return {
        title: data.title as string,
        devanagari: data.devanagari as string | undefined,
        form: data.form as string | undefined,
        section,
        slug: path.basename(filename, ".md"),
        date: data.date as string,
        excerpt: data.excerpt as string,
        body: "",
      } satisfies Post;
    }),
  );

  sectionCache.set(section, posts);
  return posts;
}

async function getFullPost(
  section: Section,
  slug: string,
): Promise<Post | null> {
  const filePath = path.join(
    process.cwd(),
    "content",
    section,
    `${slug}.md`,
  );

  let raw: string;
  try {
    raw = await fs.promises.readFile(filePath, "utf8");
  } catch {
    return null;
  }

  const { data, content } = matter(raw);
  const processed = await remark()
    .use(remarkHtml, { sanitize: false })
    .process(content);

  return {
    title: data.title as string,
    devanagari: data.devanagari as string | undefined,
    form: data.form as string | undefined,
    section,
    slug,
    date: data.date as string,
    excerpt: data.excerpt as string,
    body: processed.toString(),
  };
}

// --- Sort helpers ---

function compareDateDesc(a: Post, b: Post) {
  return (
    new Date(`${b.date}T00:00:00Z`).getTime() -
    new Date(`${a.date}T00:00:00Z`).getTime()
  );
}

function compareDateAsc(a: Post, b: Post) {
  return (
    new Date(`${a.date}T00:00:00Z`).getTime() -
    new Date(`${b.date}T00:00:00Z`).getTime()
  );
}

// --- Public async queries ---

export async function getAllPostsSorted(): Promise<Post[]> {
  const all = await Promise.all(SECTIONS.map(getPostsForSection));
  return all.flat().sort(compareDateDesc);
}

export async function getAllPostsChronological(): Promise<Post[]> {
  const all = await Promise.all(SECTIONS.map(getPostsForSection));
  return all.flat().sort(compareDateAsc);
}

export async function getRecentPosts(limit = 4): Promise<Post[]> {
  return (await getAllPostsSorted()).slice(0, limit);
}

export async function getPostsBySection(section: Section): Promise<Post[]> {
  return (await getPostsForSection(section)).sort(compareDateDesc);
}

export async function getPostBySectionAndSlug(
  section: Section,
  slug: string,
): Promise<Post | null> {
  return getFullPost(section, slug);
}

export async function getSectionCount(section: Section): Promise<number> {
  return (await getPostsForSection(section)).length;
}

export async function getSectionStaticParams(
  section: Section,
): Promise<{ slug: string }[]> {
  return (await getPostsForSection(section)).map((post) => ({
    slug: post.slug,
  }));
}

export async function getTotalEntryCount(): Promise<number> {
  const all = await Promise.all(SECTIONS.map(getPostsForSection));
  return all.flat().length;
}
