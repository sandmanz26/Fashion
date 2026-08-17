import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Quiz } from "@/components/quiz/quiz";

export const metadata: Metadata = {
  title: "What Should You Knit? — PURL",
  description: "Answer four questions and we'll match you to your first (or next) project.",
};

export default function QuizPage() {
  return (
    <div className="py-20 md:py-28">
      <Container>
        <div className="mx-auto mb-16 max-w-lg text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-clay">
            Personalized For You
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-[1.05] sm:text-6xl">
            What should you knit?
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
            Four questions about your experience, timeline, style, and
            budget — one recommendation built for you.
          </p>
        </div>
        <Quiz />
      </Container>
    </div>
  );
}
