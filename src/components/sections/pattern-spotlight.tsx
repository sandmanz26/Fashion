import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { products } from "@/lib/data";

const pattern = products.find((p) => p.slug === "the-cloud-cardigan")!;

const specs = [
  { label: "Difficulty", value: pattern.difficulty },
  { label: "Time", value: pattern.hours },
  { label: "Sizing", value: pattern.sizes ?? "One size" },
  { label: "Format", value: "PDF + video walkthrough" },
];

export function PatternSpotlight() {
  return (
    <section className="bg-oat py-24 md:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 px-5 md:grid-cols-12 md:gap-10 md:px-10">
        <div className="relative aspect-[4/5] overflow-hidden md:col-span-6">
          <Image
            src={pattern.image}
            alt={pattern.imageAlt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="md:col-span-5 md:col-start-8">
          <p className="text-[11px] uppercase tracking-[0.25em] text-clay">
            The Pattern Is The Product
          </p>
          <h2 className="mt-6 font-serif text-4xl leading-[1.1] sm:text-5xl">
            A pattern isn&apos;t a PDF. It&apos;s instant creativity.
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-soft">
            $28 gets you more than a file — it gets you a fully graded,
            professionally tech-edited pattern with a video for every
            construction step, written so clearly that your first sweater
            doesn&apos;t feel like your first sweater.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-y-6 border-t border-ink/10 pt-8">
            {specs.map((s) => (
              <div key={s.label}>
                <p className="text-[11px] uppercase tracking-[0.08em] text-stone">
                  {s.label}
                </p>
                <p className="mt-1 font-serif text-lg">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-6">
            <ButtonLink href={`/shop/${pattern.slug}`} variant="primary">
              Get the Pattern — ${pattern.price}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
