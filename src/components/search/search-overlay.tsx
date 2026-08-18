"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { products, journalPosts } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;

    const matchedProducts = products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.blurb.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags?.some((t) => t.toLowerCase().includes(q))
    );
    const matchedPosts = journalPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(q) || post.dek.toLowerCase().includes(q)
    );

    return { matchedProducts, matchedPosts };
  }, [query]);

  const hasQuery = query.trim().length > 0;
  const noResults =
    results && results.matchedProducts.length === 0 && results.matchedPosts.length === 0;

  return (
    <AnimatePresence onExitComplete={() => setQuery("")}>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] bg-ink/50"
            onClick={onClose}
          />
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="fixed inset-x-0 top-0 z-[90] mx-auto max-h-[85vh] w-full max-w-2xl overflow-hidden bg-paper shadow-2xl sm:top-[10vh]"
          >
            <div className="flex items-center gap-3 border-b border-line px-5 py-4 sm:px-6">
              <Search size={18} className="shrink-0 text-stone" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search patterns, kits, yarn, journal…"
                className="w-full bg-transparent text-[16px] placeholder:text-stone focus:outline-none"
              />
              <button
                onClick={onClose}
                aria-label="Close search"
                className="shrink-0 p-1 text-stone hover:text-ink"
              >
                <X size={18} />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto px-5 py-4 sm:px-6">
              {!hasQuery && (
                <p className="py-8 text-center text-sm text-stone">
                  Try &ldquo;cardigan&rdquo;, &ldquo;beginner&rdquo;, or &ldquo;yarn&rdquo;.
                </p>
              )}

              {noResults && (
                <div className="flex flex-col items-center gap-3 py-10 text-center">
                  <p className="font-serif text-xl">
                    Nothing found for &ldquo;{query}&rdquo;.
                  </p>
                  <Link
                    href="/shop"
                    onClick={onClose}
                    className="text-[12px] uppercase tracking-[0.1em] text-clay hover:underline"
                  >
                    Browse the full shop →
                  </Link>
                </div>
              )}

              {results && results.matchedProducts.length > 0 && (
                <div className="mb-6">
                  <p className="mb-3 text-[11px] uppercase tracking-[0.1em] text-stone">
                    Products
                  </p>
                  <ul className="flex flex-col gap-1">
                    {results.matchedProducts.map((p) => (
                      <li key={p.id}>
                        <Link
                          href={`/shop/${p.slug}`}
                          onClick={onClose}
                          className="flex items-center gap-3 rounded px-2 py-2 -mx-2 transition-colors hover:bg-oat"
                        >
                          <div className="relative h-12 w-10 shrink-0 overflow-hidden bg-oat">
                            <Image
                              src={p.image}
                              alt={p.imageAlt}
                              fill
                              className="object-cover"
                              sizes="40px"
                            />
                          </div>
                          <div className="min-w-0">
                            <p className="truncate font-serif text-base">{p.name}</p>
                            <p className="truncate text-xs text-stone">
                              {p.category} · ${p.price}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {results && results.matchedPosts.length > 0 && (
                <div>
                  <p className="mb-3 text-[11px] uppercase tracking-[0.1em] text-stone">
                    Journal
                  </p>
                  <ul className="flex flex-col gap-1">
                    {results.matchedPosts.map((post) => (
                      <li key={post.slug}>
                        <Link
                          href={`/journal/${post.slug}`}
                          onClick={onClose}
                          className="block rounded px-2 py-2 -mx-2 transition-colors hover:bg-oat"
                        >
                          <p className="font-serif text-base">{post.title}</p>
                          <p className="truncate text-xs text-stone">{post.dek}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
