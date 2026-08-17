"use client";

import { useState } from "react";
import Image from "next/image";
import { quizQuestions, quizResultProduct } from "@/lib/data";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const isDone = step >= quizQuestions.length;
  const question = quizQuestions[step];

  const select = (value: string) => {
    setAnswers((a) => ({ ...a, [question.id]: value }));
    setStep((s) => s + 1);
  };

  const restart = () => {
    setStep(0);
    setAnswers({});
  };

  if (isDone) {
    return (
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={quizResultProduct.image}
            alt={quizResultProduct.imageAlt}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-clay">
            Your Match
          </p>
          <h3 className="mt-4 font-serif text-4xl leading-[1.1] sm:text-5xl">
            {quizResultProduct.name}
          </h3>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink-soft">
            Because you like{" "}
            {answers.style === "oversized"
              ? "oversized silhouettes"
              : answers.style === "structured"
                ? "clean, structured shapes"
                : "bold, textural pieces"}
            ,{" "}
            {answers.time === "short"
              ? "projects you can finish in a weekend"
              : answers.time === "medium"
                ? "projects you can pick up over a few weeks"
                : "projects you can really sink into"}
            , and a budget that leaves room for the good yarn.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink href={`/shop/${quizResultProduct.slug}`} variant="primary">
              Shop Your Match
            </ButtonLink>
            <button
              onClick={restart}
              className="text-[12px] uppercase tracking-[0.1em] text-stone hover:text-clay"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl">
      <div className="mb-10 flex items-center gap-2">
        {quizQuestions.map((_, i) => (
          <span
            key={i}
            className={cn(
              "h-[2px] flex-1 rounded-full transition-colors",
              i <= step ? "bg-clay" : "bg-line"
            )}
          />
        ))}
      </div>
      <p className="text-[11px] uppercase tracking-[0.2em] text-clay">
        Question {step + 1} of {quizQuestions.length}
      </p>
      <h3 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
        {question.question}
      </h3>
      <div className="mt-8 flex flex-col gap-3">
        {question.options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => select(opt.value)}
            className="border border-line px-6 py-4 text-left text-[15px] transition-colors hover:border-ink hover:bg-ink hover:text-paper"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
