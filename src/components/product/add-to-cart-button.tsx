"use client";

import { useState } from "react";
import type { Product } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <Button
      variant="primary"
      className="w-full sm:w-auto"
      onClick={() => {
        addItem(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 1800);
      }}
    >
      {added
        ? "Added ✓"
        : product.category === "Pattern"
          ? `Get the Pattern — $${product.price}`
          : `Add to Bag — $${product.price}`}
    </Button>
  );
}
