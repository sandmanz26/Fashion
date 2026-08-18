"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import type { Product } from "@/lib/data";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

export type Hotspot = {
  id: string;
  /** 0-100, position from left */
  x: number;
  /** 0-100, position from top */
  y: number;
} & (
  | { type: "product"; product: Product }
  | { type: "info"; title: string; description: string }
);

const GAP = 18; // px between the dot and its popover

export function ImageHotspots({
  hotspots,
  className,
}: {
  hotspots: Hotspot[];
  className?: string;
}) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveId(null);
    };
    const onClickOutside = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setActiveId(null);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("click", onClickOutside);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("click", onClickOutside);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={cn("pointer-events-none absolute inset-0", className)}
    >
      {hotspots.map((h) => {
        const isActive = activeId === h.id;
        const alignBottom = h.y > 60;

        return (
          <div key={h.id}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveId(isActive ? null : h.id);
              }}
              aria-label={h.type === "product" ? `Shop ${h.product.name}` : h.title}
              style={{ left: `${h.x}%`, top: `${h.y}%` }}
              className={cn(
                "pointer-events-auto absolute z-20 -translate-x-1/2 -translate-y-1/2 flex h-6 w-6 items-center justify-center rounded-full border border-paper bg-ink/70 text-paper backdrop-blur-sm transition-transform hover:scale-110",
                isActive && "scale-110 bg-clay"
              )}
            >
              <span className="absolute inset-0 animate-ping rounded-full bg-paper/40" />
              <Plus
                size={13}
                className={cn("relative transition-transform", isActive && "rotate-45")}
              />
            </button>

            {/*
              Horizontal position is centered in the *container* via
              left:0/right:0/margin-inline:auto rather than anchored to the
              dot — plain margin auto-centering, no transform involved, so it
              can't be defeated the way translate-x would be (see below), and
              it never has to fight for space on whichever side the dot
              happens to be closest to in a narrow card.

              Vertical position IS anchored to the dot (top/bottom + a fixed
              gap) since containers here are always much taller than the
              popover, so there's no equivalent overflow risk on that axis.

              Neither axis uses translate-x/y: this popover is a motion.div
              with its own opacity/scale/y animation, and Framer Motion
              writes that as an inline `style.transform`, which has higher
              CSS specificity than any Tailwind transform class and would
              silently override a transform-based offset here.
            */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.94, y: 6 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2, ease: EASE }}
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    ...(alignBottom
                      ? { bottom: `calc(${100 - h.y}% + ${GAP}px)` }
                      : { top: `calc(${h.y}% + ${GAP}px)` }),
                  }}
                  className="pointer-events-auto absolute inset-x-3 z-30 mx-auto w-[min(250px,calc(100%-1.5rem))]"
                >
                  {h.type === "product" ? (
                    <ProductHotspotCard product={h.product} />
                  ) : (
                    <InfoHotspotCard title={h.title} description={h.description} />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

function ProductHotspotCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group flex items-center gap-3 bg-paper p-3 shadow-xl"
    >
      <div className="relative h-14 w-12 shrink-0 overflow-hidden bg-oat">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          className="object-cover"
          sizes="48px"
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate font-serif text-[15px] leading-tight text-ink">
          {product.name}
        </p>
        <p className="mt-0.5 text-xs text-stone">${product.price}</p>
      </div>
      <ArrowRight
        size={14}
        className="shrink-0 text-ink-soft transition-transform group-hover:translate-x-0.5"
      />
    </Link>
  );
}

function InfoHotspotCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-paper p-4 shadow-xl">
      <p className="font-serif text-[15px] leading-tight text-ink">{title}</p>
      <p className="mt-1.5 text-[13px] leading-relaxed text-stone">{description}</p>
    </div>
  );
}
