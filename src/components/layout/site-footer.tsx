import Link from "next/link";
import { Container } from "@/components/ui/container";
import { FooterNewsletterForm } from "@/components/layout/footer-newsletter-form";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "All Products", href: "/shop" },
      { label: "Patterns", href: "/shop?category=Pattern" },
      { label: "Kits", href: "/shop?category=Kit" },
      { label: "Yarn", href: "/shop?category=Yarn" },
      { label: "Drop 01", href: "/shop#drop" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Knit Club", href: "/knit-club" },
      { label: "Journal", href: "/journal" },
      { label: "Find Your First Project", href: "/quiz" },
      { label: "Size Guide", href: "/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About PURL", href: "/about" },
      { label: "FAQ", href: "/faq" },
      { label: "Shipping & Returns", href: "/shipping" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const social = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Pinterest", href: "https://pinterest.com" },
  { label: "TikTok", href: "https://tiktok.com" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="font-serif text-3xl">
              PURL
            </Link>
            <p className="mt-4 max-w-[26ch] text-sm text-paper/60">
              A knitting fashion house. Make what you wear.
            </p>
            <div className="mt-6 flex flex-col gap-1">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit text-sm text-paper/70 hover:text-clay-light transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="col-span-1 md:col-span-1">
              <h3 className="text-xs uppercase tracking-[0.1em] text-paper/50">
                {col.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-paper/80 hover:text-clay-light transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 md:col-span-2">
            <h3 className="text-xs uppercase tracking-[0.1em] text-paper/50">
              Stay In The Loop
            </h3>
            <p className="mt-4 text-sm text-paper/70">
              New drops, patterns, and monthly makes — no noise.
            </p>
            <FooterNewsletterForm />
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse gap-4 border-t border-paper/15 pt-8 text-xs text-paper/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} PURL Studio. All rights reserved.</p>
          <p>Designed & knitted independently.</p>
        </div>
      </Container>
    </footer>
  );
}
