"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <section className="bg-clay py-16 text-paper md:py-24">
      <Reveal className="mx-auto max-w-2xl px-5 text-center md:px-10">
        <p className="text-[11px] uppercase tracking-[0.25em] text-paper/70">
          Free Pattern
        </p>
        <h2 className="mt-5 font-serif text-4xl leading-[1.1] sm:text-5xl">
          Get your first pattern free.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-paper/85">
          The beginner-friendly Sable Scarf pattern, a styling guide, and
          first word on every drop — free, in your inbox today. No account,
          no upsell page, just the download link.
        </p>

        <AnimatePresence mode="wait" initial={false}>
          {submitted ? (
            <motion.p
              key="done"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="mt-8 font-serif text-xl italic"
            >
              Check your inbox — your pattern is on its way.
            </motion.p>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full border border-paper/40 bg-transparent px-5 py-3.5 text-[15px] placeholder:text-paper/60 focus:border-paper focus:outline-none"
              />
              <Button type="submit" variant="outline-light" className="shrink-0">
                Get the Free Pattern
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
        <p className="mt-5 text-xs text-paper/60">
          No spam. Unsubscribe any time.
        </p>
      </Reveal>
    </section>
  );
}
