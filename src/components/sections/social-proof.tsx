import Image from "next/image";
import { testimonials } from "@/lib/data";

export function SocialProof() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-clay">
              Made By Our Community
            </p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl leading-[1.1] sm:text-5xl">
              12,400 makers.
              <br className="hidden sm:block" /> One shared obsession.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-stone">
            Tag @wearpurl and #madewithpurl — our favorites get featured
            here, in the Journal, and on our socials every week.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col">
              <div className="relative aspect-[4/5] overflow-hidden bg-oat">
                <Image
                  src={t.image}
                  alt={t.imageAlt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <blockquote className="mt-5 font-serif text-lg leading-snug text-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.06em] text-stone">
                <span>
                  {t.name} · {t.handle}
                </span>
                <span className="text-clay">{t.project}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
