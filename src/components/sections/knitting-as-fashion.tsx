import Image from "next/image";
import Link from "next/link";
import { journalPosts } from "@/lib/data";

export function KnittingAsFashion() {
  const featured = journalPosts[0];
  const rest = journalPosts.slice(1);

  return (
    <section className="bg-paper-warm py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-clay">
              The Journal
            </p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl leading-[1.1] sm:text-5xl">
              Knitting is fashion. We&apos;ll prove it.
            </h2>
          </div>
          <Link
            href="/journal"
            className="hidden shrink-0 text-[12px] uppercase tracking-[0.1em] text-ink-soft hover:text-clay md:block"
          >
            Read the Journal →
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <Link href={`/journal/${featured.slug}`} className="group block">
            <div className="relative aspect-[16/11] overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <p className="mt-5 text-[11px] uppercase tracking-[0.08em] text-clay">
              {featured.category} · {featured.readTime}
            </p>
            <h3 className="mt-2 font-serif text-2xl leading-tight sm:text-3xl">
              {featured.title}
            </h3>
            <p className="mt-2 text-sm text-stone">{featured.dek}</p>
          </Link>

          <div className="flex flex-col gap-8 divide-y divide-line">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/journal/${post.slug}`}
                className="group flex gap-5 pt-8 first:pt-0"
              >
                <div className="relative aspect-square w-24 shrink-0 overflow-hidden sm:w-32">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="128px"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.08em] text-clay">
                    {post.category} · {post.readTime}
                  </p>
                  <h3 className="mt-1 font-serif text-lg leading-snug sm:text-xl">
                    {post.title}
                  </h3>
                  <p className="mt-1 hidden text-sm text-stone sm:block">
                    {post.dek}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
