"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { Quiz } from "@/components/quiz/quiz";

const EASE = [0.16, 1, 0.3, 1] as const;

const stepVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const stepItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const steps = [
  { n: "01", title: "Choose your project", active: true },
  { n: "02", title: "Get your kit" },
  { n: "03", title: "Wear what you made" },
];

export function StartHere() {
  return (
    <section className="bg-oat py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-[11px] uppercase tracking-[0.25em] text-clay">
              First Time?
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.1] sm:text-5xl">
              Never knitted before? Start here.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
              Most of our members had never touched a needle before their
              first PURL kit. Answer four questions below and we&apos;ll
              match you to a project — or{" "}
              <Link href="/shop" className="text-clay underline underline-offset-2">
                skip ahead and browse patterns
              </Link>{" "}
              yourself.
            </p>
          </div>
          <div className="relative hidden h-28 w-28 shrink-0 overflow-hidden sm:block">
            <Image
              src="/images/product-hands-knitting.jpg"
              alt="Close-up of hands knitting with wooden needles and cream chunky yarn"
              fill
              sizes="112px"
              className="object-cover"
            />
          </div>
        </Reveal>

        <motion.ol
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          variants={stepVariants}
          className="mt-12 flex flex-col gap-4 border-y border-ink/10 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-0"
        >
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              variants={stepItem}
              className={`flex items-center gap-3 ${s.active ? "text-ink" : "text-stone"}`}
            >
              <span
                className={`font-serif text-xl ${s.active ? "text-clay" : ""}`}
              >
                {s.n}
              </span>
              <span className="text-sm uppercase tracking-[0.06em]">
                {s.title}
              </span>
              {i < steps.length - 1 && (
                <span className="ml-4 hidden h-px w-12 bg-ink/15 sm:block" />
              )}
            </motion.li>
          ))}
        </motion.ol>

        <Reveal delay={0.1} className="mt-14">
          <Quiz />
        </Reveal>
      </div>
    </section>
  );
}
