"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/data";
import { useCart } from "@/lib/cart-context";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="group flex flex-col">
      <Link
        href={`/shop/${product.slug}`}
        className="relative block aspect-[4/5] overflow-hidden bg-oat"
      >
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {product.limited && (
          <span className="absolute left-3 top-3 bg-clay px-2.5 py-1 text-[10px] uppercase tracking-[0.1em] text-paper">
            Limited
          </span>
        )}
        {product.bestseller && !product.limited && (
          <span className="absolute left-3 top-3 bg-ink px-2.5 py-1 text-[10px] uppercase tracking-[0.1em] text-paper">
            Bestseller
          </span>
        )}
      </Link>

      <div className="mt-4 flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <Link href={`/shop/${product.slug}`}>
            <h3 className="font-serif text-lg leading-snug">{product.name}</h3>
          </Link>
          <span className="whitespace-nowrap text-sm text-ink-soft">
            ${product.price}
          </span>
        </div>
        <p className="mt-1 text-sm text-stone">{product.blurb}</p>
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] uppercase tracking-[0.06em] text-stone">
          <span>{product.difficulty}</span>
          <span className="text-line">·</span>
          <span>{product.hours}</span>
        </div>
        <button
          onClick={() => addItem(product)}
          className="mt-4 border-t border-line pt-3 text-left text-[12px] uppercase tracking-[0.1em] text-ink-soft transition-colors hover:text-clay"
        >
          {product.category === "Pattern" ? "Get the Pattern" : "Add to Bag"} →
        </button>
      </div>
    </div>
  );
}
