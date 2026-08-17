import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "FAQ — PURL",
  description: "Answers about patterns, kits, sizing, and the Knit Club.",
};

const groups = [
  {
    title: "Patterns",
    items: [
      {
        q: "What format do patterns come in?",
        a: "Every pattern is a downloadable PDF with a linked video walkthrough for each construction step. Printer-friendly and screen-friendly versions are both included.",
      },
      {
        q: "I've never knitted a garment before. Can I still use these?",
        a: "Yes. Every pattern lists a difficulty level and estimated time, and our Beginner-rated patterns assume zero garment experience — just the basic knit and purl stitch.",
      },
      {
        q: "Are patterns sized inclusively?",
        a: "All garment patterns are graded XS–3XL as standard, with finished measurements listed for every size.",
      },
    ],
  },
  {
    title: "Kits",
    items: [
      {
        q: "What's the difference between a pattern and a kit?",
        a: "A pattern is the instructions only. A kit includes the exact yarn, needles, and notions needed, pre-selected and shipped to you alongside the pattern.",
      },
      {
        q: "Can I substitute the yarn in a kit?",
        a: "Kits are calibrated to the exact yardage and gauge of their yarn, so we recommend using what's included — but every pattern is also sold separately if you'd rather source your own materials.",
      },
    ],
  },
  {
    title: "Knit Club",
    items: [
      {
        q: "How does the monthly pattern work?",
        a: "A new members-only pattern unlocks in your account on the first of each month. It's yours to keep even if you cancel later.",
      },
      {
        q: "Can I cancel any time?",
        a: "Yes, with no fees or contracts. Cancel from your account and keep access until the end of your current billing period.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div className="pb-24">
      <div className="border-b border-line bg-oat py-16 md:py-24">
        <Container>
          <h1 className="font-serif text-5xl leading-[1.05] sm:text-6xl">
            Frequently asked.
          </h1>
        </Container>
      </div>
      <Container className="mt-16 max-w-2xl">
        {groups.map((g) => (
          <div key={g.title} className="mb-14">
            <h2 className="font-serif text-2xl text-clay">{g.title}</h2>
            <div className="mt-4 flex flex-col divide-y divide-line border-t border-line">
              {g.items.map((item) => (
                <div key={item.q} className="py-6">
                  <h3 className="font-serif text-lg">{item.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}
