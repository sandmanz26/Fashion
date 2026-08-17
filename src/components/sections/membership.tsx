import Image from "next/image";
import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

const perks = [
  "One exclusive pattern every month, never sold separately",
  "15% off all patterns, kits, and yarn",
  "Monthly knitting challenge with prizes",
  "Private community & finishing help",
  "48-hour early access to every drop",
];

export function Membership() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 px-5 md:grid-cols-12 md:gap-10 md:px-10">
        <Reveal className="relative aspect-[4/5] overflow-hidden md:col-span-5">
          <Image
            src="/images/community-3.jpg"
            alt="Woman wearing a chunky terracotta scarf on the street"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-6 md:col-start-7">
          <p className="text-[11px] uppercase tracking-[0.25em] text-clay">
            Membership
          </p>
          <h2 className="mt-6 font-serif text-4xl leading-[1.1] sm:text-5xl">
            The Knit Club
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-soft">
            Less a subscription, more a standing invitation. Join a smaller
            room of makers getting first access to everything we design —
            for less than a skein of yarn a month.
          </p>

          <ul className="mt-8 flex flex-col gap-3">
            {perks.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-ink-soft">
                <Check size={16} className="mt-0.5 shrink-0 text-clay" />
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <span className="font-serif text-3xl">
              $9<span className="text-lg text-stone">/mo</span>
            </span>
            <ButtonLink href="/knit-club" variant="primary">
              Join the Knit Club
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
