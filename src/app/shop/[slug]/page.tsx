import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { AddToCartButton } from "@/components/product/add-to-cart-button";
import { ProductCard } from "@/components/product/product-card";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} — PURL`,
    description: product.blurb,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="pb-24">
      <Container className="pt-8">
        <nav className="text-xs uppercase tracking-[0.08em] text-stone">
          <Link href="/shop" className="hover:text-clay">
            Shop
          </Link>{" "}
          / {product.category}s / <span className="text-ink">{product.name}</span>
        </nav>
      </Container>

      <Container className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
        <div className="relative aspect-[4/5] overflow-hidden bg-oat md:col-span-7">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            priority
            sizes="(min-width: 768px) 55vw, 100vw"
            className="object-cover"
          />
          {product.limited && (
            <span className="absolute left-4 top-4 bg-clay px-3 py-1 text-[11px] uppercase tracking-[0.1em] text-paper">
              Limited
            </span>
          )}
        </div>

        <div className="md:col-span-5">
          <p className="text-[11px] uppercase tracking-[0.2em] text-clay">
            {product.category}
            {product.bestseller ? " · Bestseller" : ""}
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-[1.05] sm:text-5xl">
            {product.name}
          </h1>
          <p className="mt-4 text-lg text-ink-soft">{product.blurb}</p>

          <div className="mt-6 flex items-center gap-4">
            <span className="font-serif text-3xl">${product.price}</span>
            {product.compareAt && (
              <span className="text-base text-stone line-through">
                ${product.compareAt}
              </span>
            )}
          </div>

          <div className="mt-8">
            <AddToCartButton product={product} />
          </div>

          <p className="mt-6 text-[15px] leading-relaxed text-ink-soft">
            {product.description}
          </p>

          <div className="mt-10 grid grid-cols-2 gap-y-6 border-t border-line pt-8">
            {product.difficulty && (
              <div>
                <p className="text-[11px] uppercase tracking-[0.08em] text-stone">
                  Difficulty
                </p>
                <p className="mt-1 font-serif text-lg">{product.difficulty}</p>
              </div>
            )}
            {product.hours && (
              <div>
                <p className="text-[11px] uppercase tracking-[0.08em] text-stone">
                  Time
                </p>
                <p className="mt-1 font-serif text-lg">{product.hours}</p>
              </div>
            )}
            {product.weight && (
              <div>
                <p className="text-[11px] uppercase tracking-[0.08em] text-stone">
                  Weight
                </p>
                <p className="mt-1 font-serif text-lg">{product.weight}</p>
              </div>
            )}
            {product.yardage && (
              <div>
                <p className="text-[11px] uppercase tracking-[0.08em] text-stone">
                  Yardage
                </p>
                <p className="mt-1 font-serif text-lg">{product.yardage}</p>
              </div>
            )}
            {product.sizes && (
              <div>
                <p className="text-[11px] uppercase tracking-[0.08em] text-stone">
                  Sizing
                </p>
                <p className="mt-1 font-serif text-lg">{product.sizes}</p>
              </div>
            )}
          </div>

          <div className="mt-8 border-t border-line pt-8">
            <p className="text-[11px] uppercase tracking-[0.08em] text-stone">
              What&apos;s Included
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {product.materials.map((m) => (
                <li key={m} className="text-sm text-ink-soft">
                  — {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <Container className="mt-24">
        <h2 className="font-serif text-3xl">You may also like</h2>
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </Container>
    </div>
  );
}
