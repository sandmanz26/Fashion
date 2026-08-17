import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";

const steps = [
  {
    n: "01",
    title: "Choose your project",
    body: "Take the two-minute quiz or browse beginner-rated patterns and kits.",
  },
  {
    n: "02",
    title: "Get your kit",
    body: "Yarn, needles, and pattern arrive together — nothing extra to source.",
  },
  {
    n: "03",
    title: "Make something you'll actually wear",
    body: "Follow along with video tutorials until you bind off your first piece.",
  },
];

export function BeginnerFunnel() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 px-5 md:grid-cols-12 md:gap-10 md:px-10">
        <div className="md:col-span-5">
          <p className="text-[11px] uppercase tracking-[0.25em] text-clay">
            First Time?
          </p>
          <h2 className="mt-6 font-serif text-4xl leading-[1.1] sm:text-5xl">
            Never knitted before? Start here.
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-soft">
            Most of our members had never touched a needle before their first
            PURL kit. No overwhelm, no jargon — just a clear path to a
            finished piece you&apos;ll actually wear.
          </p>
          <div className="mt-10">
            <ButtonLink href="/quiz" variant="primary">
              Find Your First Project
            </ButtonLink>
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <div className="relative mb-10 aspect-[16/9] overflow-hidden">
            <Image
              src="/images/product-hands-knitting.jpg"
              alt="Close-up of hands knitting with wooden needles and cream chunky yarn"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <ol className="flex flex-col divide-y divide-line border-y border-line">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-6 py-6">
                <span className="font-serif text-2xl text-clay">{s.n}</span>
                <div>
                  <h3 className="font-serif text-xl">{s.title}</h3>
                  <p className="mt-1 text-sm text-stone">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
