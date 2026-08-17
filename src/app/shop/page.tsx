import type { Metadata } from "next";
import { ShopGrid } from "@/components/shop/shop-grid";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Shop — PURL",
  description: "Patterns, kits, and yarn for the modern maker.",
};

export default function ShopPage() {
  return (
    <div className="pb-24">
      <div className="border-b border-line bg-oat py-16 md:py-24">
        <Container>
          <p className="text-[11px] uppercase tracking-[0.25em] text-clay">
            The Full Collection
          </p>
          <h1 className="mt-4 max-w-2xl font-serif text-5xl leading-[1.05] sm:text-6xl">
            Shop the house.
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft">
            Patterns, kits, and yarn — every piece designed as fashion first,
            written to be made by hand.
          </p>
        </Container>
      </div>
      <Container className="mt-14">
        <ShopGrid />
      </Container>
    </div>
  );
}
