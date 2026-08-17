import { Quiz } from "@/components/quiz/quiz";
import { Reveal } from "@/components/motion/reveal";

export function QuizSection() {
  return (
    <section className="bg-oat py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="mb-14 text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-clay">
            Personalized For You
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.1] sm:text-5xl">
            What should you knit?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-ink-soft">
            Four questions. One recommendation matched to your skill,
            timeline, style, and budget.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <Quiz />
        </Reveal>
      </div>
    </section>
  );
}
