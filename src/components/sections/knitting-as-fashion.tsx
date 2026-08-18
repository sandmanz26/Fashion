"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { journalPosts } from "@/lib/data";

export function KnittingAsFashion() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 420, behavior: "smooth" });
  };

  return (
    <section className="bg-paper-warm py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-clay">
              The Journal
            </p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl leading-[1.1] sm:text-5xl">
              Knitting is fashion. We&apos;ll prove it.
            </h2>
          </div>
          <div className="hidden shrink-0 items-center gap-4 md:flex">
            <Link
              href="/journal"
              className="text-[12px] uppercase tracking-[0.1em] text-ink-soft hover:text-clay"
            >
              Read the Journal →
            </Link>
            <div className="flex gap-2">
              <button
                onClick={() => scroll(-1)}
                aria-label="Scroll left"
                className="rounded-full border border-line p-2 transition-colors hover:border-ink"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={() => scroll(1)}
                aria-label="Scroll right"
                className="rounded-full border border-line p-2 transition-colors hover:border-ink"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div
          ref={scrollerRef}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:px-10 [&::-webkit-scrollbar]:hidden"
        >
          {journalPosts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/journal/${post.slug}`}
              className="group block w-[80vw] shrink-0 snap-start sm:w-[380px]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(min-width: 640px) 380px, 80vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <span className="absolute left-4 top-4 font-serif text-5xl text-paper/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-5 text-[11px] uppercase tracking-[0.08em] text-clay">
                {post.category} · {post.readTime}
              </p>
              <h3 className="mt-2 font-serif text-2xl leading-tight">
                {post.title}
              </h3>
              <p className="mt-2 max-w-sm text-sm text-stone">{post.dek}</p>
            </Link>
          ))}
          <div aria-hidden className="w-px shrink-0 sm:w-4" />
        </div>
      </Reveal>

      <div className="mt-8 flex justify-center md:hidden">
        <Link
          href="/journal"
          className="text-[12px] uppercase tracking-[0.1em] text-ink-soft hover:text-clay"
        >
          Read the Journal →
        </Link>
      </div>
    </section>
  );
}
