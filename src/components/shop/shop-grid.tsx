"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { products, type ProductCategory, type Difficulty } from "@/lib/data";
import { ProductCard } from "@/components/product/product-card";
import { cn } from "@/lib/utils";

const categories: (ProductCategory | "All")[] = ["All", "Pattern", "Kit", "Yarn"];
const difficulties: (Difficulty | "All")[] = [
  "All",
  "Beginner",
  "Intermediate",
  "Advanced",
];

function ShopGridInner() {
  const params = useSearchParams();
  const initialCategory = (params.get("category") as ProductCategory) ?? "All";

  const [category, setCategory] = useState<ProductCategory | "All">(
    categories.includes(initialCategory) ? initialCategory : "All"
  );
  const [difficulty, setDifficulty] = useState<Difficulty | "All">("All");

  const showDifficulty = category !== "Yarn";

  const filtered = products.filter((p) => {
    const matchCategory = category === "All" || p.category === category;
    const matchDifficulty =
      !showDifficulty || difficulty === "All" || p.difficulty === difficulty;
    return matchCategory && matchDifficulty;
  });

  const resetFilters = () => {
    setCategory("All");
    setDifficulty("All");
  };

  return (
    <div>
      <div className="flex flex-col gap-6 border-b border-line pb-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => {
                setCategory(c);
                if (c === "Yarn") setDifficulty("All");
              }}
              className={cn(
                "border px-4 py-2 text-[12px] uppercase tracking-[0.08em] transition-colors",
                category === c
                  ? "border-ink bg-ink text-paper"
                  : "border-line text-ink-soft hover:border-ink"
              )}
            >
              {c === "All" ? "All" : `${c}s`}
            </button>
          ))}
        </div>
        {showDifficulty && (
          <div className="flex flex-wrap gap-2">
            {difficulties.map((d) => (
              <button
                key={d}
                onClick={() => setDifficulty(d)}
                className={cn(
                  "text-[12px] uppercase tracking-[0.08em] transition-colors",
                  difficulty === d ? "text-clay" : "text-stone hover:text-ink"
                )}
              >
                {d}
              </button>
            ))}
          </div>
        )}
      </div>

      <p className="mt-6 text-sm text-stone">
        {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
      </p>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-24 text-center">
          <p className="font-serif text-2xl text-ink-soft">
            Nothing matches that combination yet.
          </p>
          <button
            onClick={resetFilters}
            className="text-[12px] uppercase tracking-[0.1em] text-clay hover:underline"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export function ShopGrid() {
  return (
    <Suspense fallback={null}>
      <ShopGridInner />
    </Suspense>
  );
}
