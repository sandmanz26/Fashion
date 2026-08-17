import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About — PURL",
  description: "PURL is a knitting fashion house founded on the belief that not everything beautiful needs to be mass produced.",
};

export default function AboutPage() {
  return (
    <div className="pb-24">
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-ink text-paper">
        <Image
          src="/images/about-founder.jpg"
          alt="Editorial portrait of PURL's founder working with yarn in her studio"
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <Container className="relative z-10 pb-16 pt-32">
          <p className="text-[11px] uppercase tracking-[0.25em] text-clay-light">
            About PURL
          </p>
          <h1 className="mt-5 max-w-2xl font-serif text-5xl leading-[1.05] sm:text-6xl">
            Founded on a stubborn idea.
          </h1>
        </Container>
      </section>

      <Container className="mt-20 max-w-2xl">
        <div className="flex flex-col gap-6 text-[17px] leading-[1.75] text-ink-soft">
          <p>
            PURL started in a design studio, not a craft room. Our founder
            spent nine years as a technical designer for a fast-fashion
            label most people would recognize, engineering garments to look
            expensive in a product photo and hold together for about one
            wash cycle past the return window. She kept exactly one sample
            from those nine years — a cardigan cut from a lookbook the
            night before the shoot. Nothing else from that job survived
            this long, including, eventually, her patience for it.
          </p>
          <p>
            She quit on a Thursday and cast on that weekend, no plan beyond
            making one sweater that would outlast the job that made her
            hate sweaters. The pieces she made started getting stopped on
            the street. Not
            &ldquo;cute hobby&rdquo; stopped — &ldquo;who makes this&rdquo;
            stopped. That was the moment PURL stopped being a personal
            project and started being a question worth answering: what if
            knitting patterns were designed with the same rigor as a
            runway collection?
          </p>
          <p>
            Every PURL pattern begins as a fashion sketch, not a stitch
            chart. We ask what a piece should look like on a body first,
            then work backwards into construction that a home knitter can
            actually execute — tech-edited, video-supported, and tested by
            makers who&apos;ve never held a needle before.
          </p>
          <p className="font-serif text-2xl italic text-ink">
            We&apos;re not trying to save knitting. We&apos;re trying to
            make it fashionable enough that it never needed saving in the
            first place.
          </p>
        </div>

        <div className="mt-14 flex flex-wrap gap-4">
          <ButtonLink href="/shop" variant="primary">
            Shop the Collection
          </ButtonLink>
          <ButtonLink href="/journal" variant="outline">
            Read the Journal
          </ButtonLink>
        </div>
      </Container>
    </div>
  );
}
