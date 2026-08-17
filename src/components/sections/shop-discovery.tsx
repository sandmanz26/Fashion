"use client";

import { useState } from "react";
import { products, type ProductCategory } from "@/lib/data";
import { ProductCard } from "@/components/product/product-card";
import { ButtonLink } from "@/components/ui/button";
import { Reveal, StaggerItem, StaggerReveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

const categories: (ProductCategory | "All")[] = [
  "All",
  "Pattern",
  "Kit",
  "Yarn",
];

export function ShopDiscovery() {
  const [active, setActive] = useState<ProductCategory | "All">("All");

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-clay">
              Shop The House
            </p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl leading-[1.1] sm:text-5xl">
              Pieces worth collecting.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "border px-4 py-2 text-[12px] uppercase tracking-[0.08em] transition-colors",
                  active === c
                    ? "border-ink bg-ink text-paper"
                    : "border-line text-ink-soft hover:border-ink"
                )}
              >
                {c === "All" ? "All" : `${c}s`}
              </button>
            ))}
          </div>
        </Reveal>

        <StaggerReveal
          key={active}
          className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4"
        >
          {filtered.slice(0, 8).map((product) => (
            <StaggerItem key={product.id}>
              <ProductCard product={product} />
            </StaggerItem>
          ))}
        </StaggerReveal>

        <div className="mt-16 flex justify-center">
          <ButtonLink href="/shop" variant="outline">
            View Full Shop
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
