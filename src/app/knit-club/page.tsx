import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "The Knit Club — PURL",
  description: "A creative membership for makers. $9/month for exclusive patterns, discounts, and early access.",
};

const perks = [
  {
    title: "One exclusive pattern, monthly",
    body: "Designed for members only — never sold separately, never repeated.",
  },
  {
    title: "15% off, always",
    body: "Every pattern, kit, and skein in the shop, discounted for as long as you're a member.",
  },
  {
    title: "The monthly challenge",
    body: "A themed make-along with prizes, deadlines, and a reason to finish what you cast on.",
  },
  {
    title: "Members-only community",
    body: "A private space for finishing help, swatches, and the occasional yarn-shame confession.",
  },
  {
    title: "48-hour early access",
    body: "Shop every seasonal drop before it opens to everyone else — while sizes and colorways are still full.",
  },
];

const faqs = [
  {
    q: "Can I cancel any time?",
    a: "Yes — no contracts, no fees. Cancel from your account and keep access until the end of your billing period.",
  },
  {
    q: "Do I keep the patterns if I cancel?",
    a: "Every monthly pattern you've unlocked is yours to keep, permanently, even after you cancel.",
  },
  {
    q: "Is this only for beginners?",
    a: "No — monthly patterns rotate across difficulty levels, and the discount applies to our full advanced catalog too.",
  },
];

export default function KnitClubPage() {
  return (
    <div className="pb-24">
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-ink text-paper">
        <Image
          src="/images/about-founder.jpg"
          alt="Editorial portrait of a designer working with yarn in her studio"
          fill
          priority
          className="object-cover opacity-50"
          sizes="100vw"
        />
        <Container className="relative z-10 pb-20 pt-32">
          <p className="text-[11px] uppercase tracking-[0.25em] text-clay-light">
            Membership
          </p>
          <h1 className="mt-5 max-w-2xl font-serif text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
            The Knit Club
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-paper/75">
            Less a subscription, more a standing invitation to a smaller
            room of makers getting first access to everything we design.
          </p>
          <div className="mt-9 flex items-center gap-6">
            <span className="font-serif text-4xl">
              $9<span className="text-lg text-paper/60">/mo</span>
            </span>
            <Button variant="clay">Join the Knit Club</Button>
          </div>
        </Container>
      </section>

      <Container className="mt-20">
        <h2 className="font-serif text-3xl sm:text-4xl">What you get</h2>
        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
          {perks.map((p) => (
            <div key={p.title} className="flex gap-4">
              <Check size={20} className="mt-1 shrink-0 text-clay" />
              <div>
                <h3 className="font-serif text-xl">{p.title}</h3>
                <p className="mt-1 text-sm text-ink-soft">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Container className="mt-24 border-t border-line pt-16">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-3">
          <div className="border border-line p-8">
            <p className="text-[11px] uppercase tracking-[0.1em] text-stone">
              Pay As You Go
            </p>
            <p className="mt-4 font-serif text-4xl">
              $28<span className="text-base text-stone">/pattern</span>
            </p>
            <p className="mt-3 text-sm text-ink-soft">
              For makers who want to buy exactly what they&apos;ll make, when
              they&apos;re ready to make it.
            </p>
          </div>
          <div className="border-2 border-clay bg-oat p-8">
            <p className="text-[11px] uppercase tracking-[0.1em] text-clay">
              Knit Club — Most Popular
            </p>
            <p className="mt-4 font-serif text-4xl">
              $9<span className="text-base text-stone">/mo</span>
            </p>
            <p className="mt-3 text-sm text-ink-soft">
              Break even after your first monthly pattern. Everything else
              — the discount, the drops, the community — is upside.
            </p>
            <Button variant="primary" className="mt-6 w-full">
              Join Now
            </Button>
          </div>
          <div className="border border-line p-8">
            <p className="text-[11px] uppercase tracking-[0.1em] text-stone">
              Founding Member
            </p>
            <p className="mt-4 font-serif text-4xl">
              $90<span className="text-base text-stone">/yr</span>
            </p>
            <p className="mt-3 text-sm text-ink-soft">
              Two months free, plus a founding member patch shipped to your
              door on us.
            </p>
          </div>
        </div>
      </Container>

      <Container className="mt-24 max-w-2xl">
        <h2 className="font-serif text-3xl">Questions</h2>
        <div className="mt-8 flex flex-col divide-y divide-line border-t border-line">
          {faqs.map((f) => (
            <div key={f.q} className="py-6">
              <h3 className="font-serif text-lg">{f.q}</h3>
              <p className="mt-2 text-sm text-ink-soft">{f.a}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
