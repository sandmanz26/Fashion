import Image from "next/image";
import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { products } from "@/lib/data";

const kit = products.find((p) => p.slug === "weekend-sweater-kit")!;

export function KitSpotlight() {
  return (
    <section className="bg-ink py-24 text-paper md:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 px-5 md:grid-cols-12 md:gap-10 md:px-10">
        <div className="md:col-span-5">
          <p className="text-[11px] uppercase tracking-[0.25em] text-clay-light">
            Knitting Kits
          </p>
          <h2 className="mt-6 font-serif text-4xl leading-[1.1] sm:text-5xl">
            {kit.name}
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-paper/70">
            Everything you need. Nothing you don&apos;t. We source the yarn,
            grade the pattern, and pack it so precisely that the only
            decision left is your colorway.
          </p>

          <ul className="mt-8 flex flex-col gap-3">
            {kit.materials.map((m) => (
              <li key={m} className="flex items-start gap-3 text-sm text-paper/80">
                <Check size={16} className="mt-0.5 shrink-0 text-clay-light" />
                {m}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <span className="font-serif text-3xl">${kit.price}</span>
            {kit.compareAt && (
              <span className="text-sm text-paper/40 line-through">
                ${kit.compareAt}
              </span>
            )}
            <ButtonLink href={`/shop/${kit.slug}`} variant="clay">
              Shop the Kit
            </ButtonLink>
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden md:col-span-6 md:col-start-7">
          <Image
            src={kit.image}
            alt={kit.imageAlt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
