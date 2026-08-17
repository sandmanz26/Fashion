"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import type { Product } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <Button
      variant="primary"
      className="w-full overflow-hidden sm:w-auto"
      onClick={() => {
        addItem(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 1800);
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {added ? (
          <motion.span
            key="added"
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-1.5"
          >
            <Check size={14} /> Added
          </motion.span>
        ) : (
          <motion.span
            key="idle"
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {product.category === "Pattern"
              ? `Get the Pattern — $${product.price}`
              : `Add to Bag — $${product.price}`}
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  );
}
