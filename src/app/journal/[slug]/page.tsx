import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { journalPosts } from "@/lib/data";
import { Container } from "@/components/ui/container";

export function generateStaticParams() {
  return journalPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} — PURL Journal`, description: post.dek };
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const more = journalPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="pb-24">
      <Container className="pt-10">
        <Link
          href="/journal"
          className="text-xs uppercase tracking-[0.08em] text-stone hover:text-clay"
        >
          ← Journal
        </Link>
        <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-clay">
          {post.category} · {post.readTime}
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.08] sm:text-5xl md:text-6xl">
          {post.title}
        </h1>
        <p className="mt-5 max-w-xl text-lg text-ink-soft">{post.dek}</p>
      </Container>

      <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <Container className="mt-14 max-w-2xl">
        <div className="flex flex-col gap-6">
          {post.body.map((p, i) => (
            <p key={i} className="text-[17px] leading-[1.75] text-ink-soft">
              {p}
            </p>
          ))}
        </div>
      </Container>

      <Container className="mt-24">
        <h2 className="font-serif text-3xl">More from the Journal</h2>
        <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2">
          {more.map((m) => (
            <Link key={m.slug} href={`/journal/${m.slug}`} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={m.image}
                  alt={m.imageAlt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <p className="mt-4 text-[11px] uppercase tracking-[0.08em] text-clay">
                {m.category} · {m.readTime}
              </p>
              <h3 className="mt-1 font-serif text-xl leading-snug">{m.title}</h3>
            </Link>
          ))}
        </div>
      </Container>
    </article>
  );
}
