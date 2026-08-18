"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SearchOverlay } from "@/components/search/search-overlay";
import { useCart } from "@/lib/cart-context";
import { cn } from "@/lib/utils";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/shop?category=Pattern", label: "Patterns" },
  { href: "/shop?category=Kit", label: "Kits" },
  { href: "/knit-club", label: "Knit Club" },
  { href: "/journal", label: "Journal" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { count, open } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-paper/95 backdrop-blur border-b border-line"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <Container>
        <div className="flex h-[72px] items-center justify-between">
          <button
            className="md:hidden -ml-2 p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>

          <Link
            href="/"
            className="font-serif text-[22px] tracking-[0.02em] font-medium"
          >
            PURL
          </Link>

          <nav className="hidden md:flex items-center gap-9">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="group relative py-1 text-[13px] uppercase tracking-[0.08em] text-ink-soft transition-colors hover:text-clay"
              >
                {l.label}
                <span className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-clay transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              className="flex items-center gap-2 p-2"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              <Search size={18} />
              <kbd className="hidden rounded border border-line px-1.5 py-0.5 text-[10px] text-stone lg:inline-block">
                ⌘K
              </kbd>
            </button>
            <button
              className="relative p-2"
              aria-label="Open cart"
              onClick={open}
            >
              <ShoppingBag size={18} />
              <AnimatePresence>
                {count > 0 && (
                  <motion.span
                    key={count}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: EASE }}
                    className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-clay text-[10px] font-medium text-paper"
                  >
                    {count}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-paper md:hidden"
          >
            <Container>
              <div className="flex h-[72px] items-center justify-between">
                <span className="font-serif text-[22px] font-medium">PURL</span>
                <button
                  className="-mr-2 p-2"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>
              <motion.nav
                className="mt-10 flex flex-col gap-7"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
                }}
              >
                {[...links, { href: "/quiz", label: "Take the Quiz" }].map(
                  (l, i) => (
                    <motion.div
                      key={l.label}
                      variants={{
                        hidden: { opacity: 0, x: -16 },
                        show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
                      }}
                    >
                      <Link
                        href={l.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "font-serif text-4xl",
                          i === links.length && "text-clay"
                        )}
                      >
                        {l.label}
                      </Link>
                    </motion.div>
                  )
                )}
              </motion.nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
