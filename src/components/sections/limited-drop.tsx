import Image from "next/image";
import { Countdown } from "@/components/sections/countdown";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function LimitedDrop() {
  return (
    <section id="drop" className="relative overflow-hidden bg-ink py-24 text-paper md:py-32">
      <Image
        src="/images/editorial-2.jpg"
        alt="Editorial photograph of a woman in a dramatic terracotta oversized turtleneck sweater in a field at dusk"
        fill
        className="object-cover opacity-30"
        sizes="100vw"
      />
      <Reveal className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-10">
        <p className="text-[11px] uppercase tracking-[0.25em] text-clay-light">
          Drop 01 — Autumn / Winter
        </p>
        <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.1] sm:text-5xl md:text-6xl">
          Five patterns. Three kits. One week only.
        </h2>
        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-paper/70">
          Our seasonal drop is produced in limited runs — once a colorway or
          kit sells out, it&apos;s gone until next year. Knit Club members
          get 48 hours of early access.
        </p>

        <div className="mt-12">
          <Countdown target="2026-09-05T17:00:00Z" />
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-6">
          <ButtonLink href="/knit-club" variant="clay">
            Get Early Access
          </ButtonLink>
          <ButtonLink href="/shop" variant="outline-light">
            Preview the Drop
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
