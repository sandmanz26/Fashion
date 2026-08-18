"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/data";
import { useCart } from "@/lib/cart-context";

export function FlagshipProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative flex h-full flex-col overflow-hidden bg-ink text-paper">
      <Link
        href={`/shop/${product.slug}`}
        className="relative block aspect-[4/5] overflow-hidden sm:aspect-[16/13]"
      >
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
      </Link>

      <div className="relative z-10 -mt-20 flex flex-col gap-3 p-6 sm:p-8">
        <p className="text-[11px] uppercase tracking-[0.2em] text-clay-light">
          The One To Start With
        </p>
        <div className="flex items-start justify-between gap-4">
          <Link href={`/shop/${product.slug}`}>
            <h3 className="font-serif text-3xl leading-tight sm:text-4xl">
              {product.name}
            </h3>
          </Link>
          <span className="shrink-0 whitespace-nowrap font-serif text-2xl">
            ${product.price}
          </span>
        </div>
        <p className="max-w-md text-[15px] text-paper/75">{product.blurb}</p>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] uppercase tracking-[0.06em] text-paper/60">
          <span>{product.difficulty}</span>
          <span>·</span>
          <span>{product.hours}</span>
        </div>
        <button
          onClick={() => addItem(product)}
          className="group/btn mt-2 flex w-fit items-center gap-2 border-b border-paper/40 pb-1 text-[12px] uppercase tracking-[0.1em] transition-colors hover:border-clay-light hover:text-clay-light"
        >
          {product.category === "Pattern" ? "Get the Pattern" : "Add to Bag"}
          <ArrowRight
            size={14}
            className="transition-transform duration-300 ease-out group-hover/btn:translate-x-1"
          />
        </button>
      </div>
    </div>
  );
}
