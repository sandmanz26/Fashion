"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, ArrowRight, RotateCcw } from "lucide-react";
import { ButtonLink, Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { generateMuse, SUGGESTION_CHIPS, type MuseResult } from "@/lib/muse";
import { useTypewriter } from "@/components/muse/use-typewriter";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

type Stage = "idle" | "thinking" | "result";

const THINKING_STEPS = [
  "Reading your vibe…",
  "Choosing a palette…",
  "Sketching a silhouette…",
  "Matching it to the collection…",
];

export function Muse() {
  const [stage, setStage] = useState<Stage>("idle");
  const [input, setInput] = useState("");
  const [result, setResult] = useState<MuseResult | null>(null);
  const [stepIndex, setStepIndex] = useState(0);

  const runGenerate = (value: string) => {
    setInput(value);
    setStage("thinking");
    setStepIndex(0);

    let i = 0;
    const stepInterval = setInterval(() => {
      i += 1;
      if (i < THINKING_STEPS.length) setStepIndex(i);
    }, 420);

    setTimeout(() => {
      clearInterval(stepInterval);
      setResult(generateMuse(value));
      setStage("result");
    }, THINKING_STEPS.length * 420 + 300);
  };

  const reset = () => {
    setStage("idle");
    setResult(null);
    setInput("");
  };

  return (
    <section className="relative overflow-hidden bg-ink py-20 text-paper md:py-28">
      {/*
        Ambient glow via a background gradient, not a blurred DOM element.
        An actual `filter: blur()` element with a large negative offset
        (e.g. -left-24) here would intermittently push this section's
        *siblings* into an incorrect position on mobile, even inside an
        overflow-hidden ancestor — a real bug hit while building this, not
        theoretical. A gradient can't do that: it never participates in
        layout or scrollable-overflow calculations.
      */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 12% 8%, rgba(182,87,47,0.16), transparent 42%), radial-gradient(circle at 88% 92%, rgba(246,241,233,0.08), transparent 42%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-paper/70">
          <Sparkles size={13} className="text-clay-light" />
          The Muse — a PURL design tool
        </div>

        <h2 className="mt-6 font-serif text-4xl leading-[1.1] sm:text-5xl">
          Describe a feeling. Get a piece.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-paper/70">
          Type a mood, a place, a moment — the Muse imagines a piece for it
          and matches it to the closest thing we&apos;ve actually made.
        </p>

        <div className="mx-auto mt-10 max-w-xl text-left">
          <AnimatePresence mode="wait">
            {stage === "idle" && (
              <motion.div
                key="idle"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (input.trim()) runGenerate(input);
                  }}
                  className="flex flex-col gap-3 sm:flex-row"
                >
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="a rainy Tuesday in Copenhagen…"
                    className="w-full border border-paper/25 bg-transparent px-5 py-3.5 text-[15px] text-paper placeholder:text-paper/40 focus:border-paper focus:outline-none"
                  />
                  <Button type="submit" variant="clay" className="shrink-0">
                    Imagine It
                  </Button>
                </form>

                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {SUGGESTION_CHIPS.map((chip) => (
                    <button
                      key={chip}
                      type="button"
                      onClick={() => runGenerate(chip)}
                      className="border border-paper/20 px-3 py-1.5 text-[12px] text-paper/70 transition-colors hover:border-paper/60 hover:text-paper"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {stage === "thinking" && (
              <motion.div
                key="thinking"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-4 py-6 text-center"
              >
                <div className="flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="h-1.5 w-1.5 rounded-full bg-clay-light"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 1.1,
                        repeat: Infinity,
                        delay: i * 0.18,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={stepIndex}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.25 }}
                    className="text-sm text-paper/60"
                  >
                    {THINKING_STEPS[stepIndex]}
                  </motion.p>
                </AnimatePresence>
              </motion.div>
            )}

            {stage === "result" && result && (
              <MuseResultView result={result} onReset={reset} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function MuseResultView({
  result,
  onReset,
}: {
  result: MuseResult;
  onReset: () => void;
}) {
  const { addItem } = useCart();
  const { shown: note, done: noteDone } = useTypewriter(result.note, 12);

  return (
    <motion.div
      key="result"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
      className="border border-paper/15 bg-paper/[0.03] p-6 sm:p-8"
    >
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="font-serif text-3xl italic text-clay-light sm:text-4xl"
      >
        {result.name}
      </motion.h3>

      <p className="mt-4 min-h-[4.5em] text-[15px] leading-relaxed text-paper/80">
        {note}
        {!noteDone && (
          <span className="ml-0.5 inline-block h-[1em] w-[2px] animate-pulse bg-clay-light align-middle" />
        )}
      </p>

      <AnimatePresence>
        {noteDone && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <div className="mt-6 flex items-center gap-3">
              <span className="text-[11px] uppercase tracking-[0.15em] text-paper/50">
                Palette
              </span>
              <div className="flex gap-2">
                {result.palette.map((s, i) => (
                  <motion.div
                    key={s.name}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 * i, duration: 0.3, ease: EASE }}
                    className="group relative"
                  >
                    <span
                      className="block h-6 w-6 rounded-full border border-paper/30"
                      style={{ backgroundColor: s.hex }}
                    />
                    <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-paper px-2 py-1 text-[10px] text-ink opacity-0 transition-opacity group-hover:opacity-100">
                      {s.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-paper/10 pt-8">
              <div className="flex items-center gap-4">
                <Link
                  href={`/shop/${result.product.slug}`}
                  className="relative block h-24 w-20 shrink-0 overflow-hidden bg-oat"
                >
                  <Image
                    src={result.product.image}
                    alt={result.product.imageAlt}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </Link>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] uppercase tracking-[0.1em] text-paper/50">
                    Closest match
                  </p>
                  <Link
                    href={`/shop/${result.product.slug}`}
                    className="font-serif text-xl hover:text-clay-light"
                  >
                    {result.product.name}
                  </Link>
                  <p className="text-sm text-paper/60">${result.product.price}</p>
                </div>
              </div>
              <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                <ButtonLink
                  href={`/shop/${result.product.slug}`}
                  variant="clay"
                  className="flex-1 justify-center whitespace-nowrap sm:flex-none"
                >
                  Shop the Match <ArrowRight size={14} className="ml-1 inline" />
                </ButtonLink>
                <Button
                  variant="outline-light"
                  className="flex-1 justify-center whitespace-nowrap sm:flex-none"
                  onClick={() => addItem(result.product)}
                >
                  Add to Bag
                </Button>
              </div>
            </div>

            <button
              onClick={onReset}
              className={cn(
                "mx-auto mt-8 flex items-center gap-1.5 text-[12px] uppercase tracking-[0.1em] text-paper/50 transition-colors hover:text-paper",
                "sm:mx-0"
              )}
            >
              <RotateCcw size={12} /> Try another vibe
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
