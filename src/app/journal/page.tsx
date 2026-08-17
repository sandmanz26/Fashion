import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { journalPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Journal — PURL",
  description: "Styling, culture, trends, and patterns from the PURL editorial team.",
};

export default function JournalPage() {
  return (
    <div className="pb-24">
      <div className="border-b border-line bg-oat py-16 md:py-24">
        <Container>
          <p className="text-[11px] uppercase tracking-[0.25em] text-clay">
            The Journal
          </p>
          <h1 className="mt-4 max-w-2xl font-serif text-5xl leading-[1.05] sm:text-6xl">
            Knitting is fashion.
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft">
            Styling guides, trend reads, and the occasional argument for why
            you should make it yourself.
          </p>
        </Container>
      </div>

      <Container className="mt-16">
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-3">
          {journalPosts.map((post) => (
            <Link key={post.slug} href={`/journal/${post.slug}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <p className="mt-5 text-[11px] uppercase tracking-[0.08em] text-clay">
                {post.category} · {post.readTime}
              </p>
              <h2 className="mt-2 font-serif text-2xl leading-tight">{post.title}</h2>
              <p className="mt-2 text-sm text-stone">{post.dek}</p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
