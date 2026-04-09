"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  SECTIONS,
  SECTION_META,
  getPostHref,
  formatPostDate,
  type Post,
  type Section,
} from "@/lib/content";

type ArchiveFilterProps = {
  posts: Post[];
};

type ArchiveFilterValue = "all" | Section;

function padAccessionNumber(index: number) {
  return String(index + 1).padStart(3, "0");
}

export function ArchiveFilter({ posts }: ArchiveFilterProps) {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<ArchiveFilterValue>("all");

  const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const numberedPosts = sortedPosts.map((post, index) => ({
    post,
    accessionNumber: padAccessionNumber(index),
  }));

  const filteredRows =
    activeFilter === "all"
      ? numberedPosts
      : numberedPosts.filter(({ post }) => post.section === activeFilter);

  const filters: { value: ArchiveFilterValue; label: string }[] = [
    { value: "all", label: "All" },
    ...SECTIONS.map((section) => ({ value: section, label: SECTION_META[section].name })),
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.value;

          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              style={isActive ? { borderBottomColor: "var(--gold)" } : undefined}
              className={[
                "border-b text-left text-sm transition-colors duration-150",
                "focus-visible:outline-none focus-visible:ring-0",
                isActive
                  ? "text-foreground"
                  : "border-b-transparent text-muted-foreground hover:text-foreground",
              ].join(" ")}
              aria-pressed={isActive}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <div className="scrollbar-hidden overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border/70">
              <th className="w-12 py-3 pr-3 text-left font-mono text-xs uppercase tracking-widest text-muted-foreground opacity-50">
                No.
              </th>
              <th className="w-32 py-3 pr-3 text-left font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Date
              </th>
              <th className="w-24 py-3 pr-3 text-left font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Section
              </th>
              <th className="py-3 pr-3 text-left font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Title
              </th>
              <th className="hidden py-3 text-left font-mono text-xs uppercase tracking-widest text-muted-foreground md:table-cell">
                Excerpt
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredRows.map(({ post, accessionNumber }) => {
              const href = getPostHref(post);

              return (
                <tr
                  key={`${post.section}:${post.slug}`}
                  className="cursor-pointer border-b border-border/50 transition-colors duration-150 hover:bg-secondary/70"
                  onClick={() => router.push(href)}
                >
                  <td className="py-3 pr-3 font-mono text-xs text-muted-foreground opacity-40">
                    {accessionNumber}
                  </td>
                  <td className="py-3 pr-3 font-mono text-xs text-muted-foreground">
                    {formatPostDate(post.date)}
                  </td>
                  <td className="py-3 pr-3 text-xs uppercase tracking-widest text-primary">
                    {SECTION_META[post.section].name}
                  </td>
                  <td className="py-3 pr-3 text-base text-foreground">
                    <Link href={href} onClick={(event) => event.stopPropagation()}>
                      {post.title}
                    </Link>
                  </td>
                  <td className="hidden py-3 text-sm italic text-muted-foreground md:table-cell">
                    <span className="line-clamp-2">{post.excerpt}</span>
                  </td>
                </tr>
              );
            })}

            {filteredRows.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="py-8 text-center text-sm italic text-muted-foreground"
                >
                  No entries in this series.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ArchiveFilter;
