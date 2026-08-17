import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden bg-ink">
      <Image
        src="/images/hero-editorial.jpg"
        alt="Editorial fashion photograph of a woman wearing an oversized hand-knitted cream sweater in a minimalist concrete interior"
        fill
        priority
        className="object-cover object-top opacity-90"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-ink/40" />

      <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-14 md:px-10 md:pb-20">
        <p className="animate-fade-up text-[11px] uppercase tracking-[0.25em] text-paper/70">
          A Knitting Fashion House
        </p>
        <h1 className="animate-fade-up mt-4 max-w-4xl font-serif text-[13vw] leading-[0.95] text-paper sm:text-[9vw] md:text-[6.4vw] lg:text-[92px]">
          Make what
          <br />
          you wear.
        </h1>
        <p className="animate-fade-up mt-6 max-w-md text-[15px] leading-relaxed text-paper/80">
          Knitting can be fashion. PURL is a house of patterns, kits, and
          yarn for people who&apos;d rather make the piece than find it.
        </p>
        <div className="animate-fade-up mt-9 flex flex-wrap items-center gap-4">
          <ButtonLink href="/shop" variant="clay">
            Explore the Collection
          </ButtonLink>
          <ButtonLink href="/quiz" variant="outline-light">
            Start Knitting
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
