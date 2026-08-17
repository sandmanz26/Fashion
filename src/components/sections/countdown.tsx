"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function getRemaining(target: Date) {
  const total = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
  };
}

export function Countdown({ target }: { target: string }) {
  const [time, setTime] = useState<ReturnType<typeof getRemaining> | null>(null);

  useEffect(() => {
    const targetDate = new Date(target);
    const tick = () => setTime(getRemaining(targetDate));
    const immediate = setTimeout(tick, 0);
    const id = setInterval(tick, 1000);
    return () => {
      clearTimeout(immediate);
      clearInterval(id);
    };
  }, [target]);

  const units = [
    { label: "Days", value: time?.days },
    { label: "Hours", value: time?.hours },
    { label: "Min", value: time?.minutes },
    { label: "Sec", value: time?.seconds },
  ];

  return (
    <div className="flex gap-6 sm:gap-10">
      {units.map((u) => (
        <div key={u.label} className="flex flex-col items-center">
          <span className="relative block h-[1.2em] w-[1.6em] overflow-hidden text-center font-serif text-4xl tabular-nums sm:text-5xl">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={u.value ?? "dash"}
                initial={{ y: "60%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-60%", opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                {u.value !== undefined ? String(u.value).padStart(2, "0") : "--"}
              </motion.span>
            </AnimatePresence>
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.15em] text-paper/60">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  );
}
