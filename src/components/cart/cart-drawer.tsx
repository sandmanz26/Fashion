"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";

const EASE = [0.16, 1, 0.3, 1] as const;

export function CartDrawer() {
  const { lines, isOpen, close, removeItem, subtotal } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-ink/40"
            onClick={close}
          />
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-paper"
          >
            <div className="flex items-center justify-between border-b border-line px-6 py-5">
              <h2 className="font-serif text-xl">Your Bag ({lines.length})</h2>
              <button onClick={close} aria-label="Close cart">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {lines.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
                  <p className="font-serif text-2xl text-ink-soft">Your bag is empty.</p>
                  <p className="text-sm text-stone">
                    Patterns, kits, and yarn worth making room for.
                  </p>
                </div>
              ) : (
                <ul className="flex flex-col gap-6">
                  <AnimatePresence initial={false}>
                    {lines.map((line) => (
                      <motion.li
                        key={line.product.id}
                        layout
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className="flex gap-4 overflow-hidden"
                      >
                        <div className="relative h-24 w-20 shrink-0 overflow-hidden bg-oat">
                          <Image
                            src={line.product.image}
                            alt={line.product.imageAlt}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>
                        <div className="flex flex-1 flex-col justify-between pb-1">
                          <div>
                            <p className="font-serif text-lg leading-tight">
                              {line.product.name}
                            </p>
                            <p className="mt-1 text-xs uppercase tracking-wide text-stone">
                              {line.product.category} · Qty {line.quantity}
                            </p>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">
                              ${line.product.price * line.quantity}
                            </span>
                            <button
                              onClick={() => removeItem(line.product.id)}
                              className="text-xs uppercase tracking-wide text-stone hover:text-clay"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </div>

            {lines.length > 0 && (
              <div className="border-t border-line px-6 py-6">
                <div className="mb-4 flex items-center justify-between text-sm">
                  <span className="text-stone">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <Button variant="primary" className="w-full">
                  Checkout
                </Button>
                <p className="mt-3 text-center text-xs text-stone">
                  Shipping & taxes calculated at checkout.
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
