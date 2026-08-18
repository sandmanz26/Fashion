"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false);
  const { count, subtotal, open, isOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && !isOpen && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.35, ease: EASE }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 backdrop-blur pb-[env(safe-area-inset-bottom)] md:hidden"
        >
          <div className="flex items-center justify-between gap-4 px-5 py-3.5">
            {count > 0 ? (
              <button
                onClick={open}
                className={cn(
                  "flex w-full items-center justify-between gap-3 bg-ink px-5 py-3.5 text-paper"
                )}
              >
                <span className="flex items-center gap-2 text-[13px] uppercase tracking-[0.08em]">
                  <ShoppingBag size={16} />
                  View Bag ({count})
                </span>
                <span className="text-[13px]">${subtotal.toFixed(2)}</span>
              </button>
            ) : (
              <Link
                href="/shop"
                className="flex w-full items-center justify-center bg-ink px-5 py-3.5 text-[13px] uppercase tracking-[0.08em] text-paper"
              >
                Explore the Collection
              </Link>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
