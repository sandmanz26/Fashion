"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Countdown } from "@/components/sections/countdown";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

export function LimitedDrop() {
  const [expired, setExpired] = useState(false);

  return (
    <section id="drop" className="relative overflow-hidden bg-ink py-24 text-paper md:py-32">
      <Image
        src="/images/editorial-2.jpg"
        alt="Editorial photograph of a woman in a dramatic terracotta oversized turtleneck sweater in a field at dusk"
        fill
        className="object-cover opacity-30"
        sizes="100vw"
      />
      <Reveal className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-10">
        <p className="text-[11px] uppercase tracking-[0.25em] text-clay-light">
          Drop 01 — Autumn / Winter
        </p>
        <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.1] sm:text-5xl md:text-6xl">
          Five patterns. Three kits. One week only.
        </h2>

        <AnimatePresence mode="wait" initial={false}>
          {expired ? (
            <motion.div
              key="live"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-paper/70">
                The countdown&apos;s done — Drop 01 is live now. Sizes and
                colorways are moving; once a run sells out it&apos;s gone
                until next year.
              </p>
              <div className="mt-12 flex flex-wrap items-center gap-6">
                <ButtonLink href="/shop" variant="clay">
                  Shop the Drop
                </ButtonLink>
                <ButtonLink href="/knit-club" variant="outline-light">
                  Join Knit Club for Next Time
                </ButtonLink>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="countdown"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-paper/70">
                Our seasonal drop is produced in limited runs — once a
                colorway or kit sells out, it&apos;s gone until next year.
                Knit Club members get 48 hours of early access.
              </p>

              <div className="mt-12">
                <Countdown target="2026-09-05T17:00:00Z" onExpire={setExpired} />
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-6">
                <ButtonLink href="/knit-club" variant="clay">
                  Get Early Access
                </ButtonLink>
                <ButtonLink href="/shop" variant="outline-light">
                  Preview the Drop
                </ButtonLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Reveal>
    </section>
  );
}
