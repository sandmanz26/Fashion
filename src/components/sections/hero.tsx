"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ButtonLink } from "@/components/ui/button";

const EASE = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section
      ref={ref}
      className="relative h-[92vh] min-h-[640px] w-full overflow-hidden bg-ink"
    >
      <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
        <Image
          src="/images/hero-editorial.jpg"
          alt="Editorial fashion photograph of a woman wearing an oversized hand-knitted cream sweater in a minimalist concrete interior"
          fill
          priority
          className="object-cover object-top opacity-90"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-ink/40" />

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex h-full flex-col justify-end px-5 pb-14 md:px-10 md:pb-20"
      >
        <motion.p
          variants={item}
          className="overflow-hidden text-[11px] uppercase tracking-[0.25em] text-paper/70"
        >
          A Knitting Fashion House
        </motion.p>
        <h1 className="mt-4 max-w-4xl overflow-hidden font-serif text-[13vw] leading-[0.95] text-paper sm:text-[9vw] md:text-[6.4vw] lg:text-[92px]">
          <motion.span variants={item} className="block">
            Make what
          </motion.span>
          <motion.span variants={item} className="block">
            you wear.
          </motion.span>
        </h1>
        <motion.p
          variants={item}
          className="mt-6 max-w-md text-[15px] leading-relaxed text-paper/80"
        >
          Patterns, kits, and yarn for people who&apos;d rather make the
          piece than find it — designed like fashion, not a craft kit.
        </motion.p>
        <motion.div
          variants={item}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <ButtonLink href="/shop" variant="clay">
            Explore the Collection
          </ButtonLink>
          <ButtonLink href="/quiz" variant="outline-light">
            Start Knitting
          </ButtonLink>
        </motion.div>
      </motion.div>

      <motion.div
        variants={item}
        initial="hidden"
        animate="show"
        style={{ opacity: contentOpacity }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-paper/60">
          Scroll
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-paper/25">
          <motion.span
            className="absolute inset-x-0 top-0 h-full bg-paper"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
