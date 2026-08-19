import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { products } from "@/lib/data";

const pattern = products.find((p) => p.slug === "the-cloud-cardigan")!;

const specs = [
  { label: "Difficulty", value: pattern.difficulty },
  { label: "Time", value: pattern.hours },
  { label: "Sizing", value: pattern.sizes ?? "One size" },
  { label: "Format", value: "PDF + video" },
];

export function PatternSpotlight() {
  return (
    <section className="relative bg-oat pb-20 pt-16 md:pb-28 md:pt-20">
      <div className="relative h-[62vh] min-h-[420px] w-full overflow-hidden">
        <Image
          src={pattern.image}
          alt={pattern.imageAlt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
        <Reveal className="absolute inset-x-0 bottom-0 px-5 pb-10 md:px-10 md:pb-14">
          <p className="text-[11px] uppercase tracking-[0.25em] text-clay-light">
            The Pattern Is The Product
          </p>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] text-paper sm:text-5xl">
            Yes, it&apos;s a PDF. It&apos;s also the fastest route from
            &ldquo;I wish I could wear that&rdquo; to wearing it.
          </h2>
        </Reveal>
      </div>

      <Reveal
        delay={0.15}
        className="relative z-10 mx-5 mt-8 max-w-md bg-paper p-7 shadow-xl sm:mx-10 md:ml-auto md:mr-10 md:mt-10 md:w-[440px] md:p-9"
      >
        <p className="text-[15px] leading-relaxed text-ink-soft">
          $28 buys a fully graded, professionally tech-edited pattern with a
          video for every construction step — written so clearly that your
          first sweater doesn&apos;t knit like your first sweater. No
          sourcing, no guessing, no forum posts asking what
          &ldquo;ssk&rdquo; means.
        </p>

        <div className="mt-7 grid grid-cols-2 gap-y-5 border-t border-line pt-6">
          {specs.map((s) => (
            <div key={s.label}>
              <p className="text-[11px] uppercase tracking-[0.08em] text-stone">
                {s.label}
              </p>
              <p className="mt-1 font-serif text-lg">{s.value}</p>
            </div>
          ))}
        </div>

        <ButtonLink
          href={`/shop/${pattern.slug}`}
          variant="primary"
          className="mt-7 w-full"
        >
          Get the Pattern — ${pattern.price}
        </ButtonLink>
      </Reveal>
    </section>
  );
}
