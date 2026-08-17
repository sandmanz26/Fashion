import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Shipping & Returns — PURL",
  description: "Shipping timelines and our return policy for patterns, kits, and yarn.",
};

const sections = [
  {
    title: "Digital Patterns",
    body: "Delivered instantly to your email and account after checkout — no shipping, no waiting. All digital pattern sales are final.",
  },
  {
    title: "Kits & Yarn",
    body: "Kits ship within 2 business days via tracked shipping. Domestic delivery takes 3–5 business days; international delivery takes 7–14 business days depending on destination.",
  },
  {
    title: "Returns",
    body: "Unopened kits and yarn can be returned within 30 days of delivery for a full refund. Because patterns and video content unlock instantly, digital products are non-refundable — reach out if something's wrong and we'll make it right.",
  },
  {
    title: "Limited Drops",
    body: "Drop items are produced in limited quantities and are not restocked once sold out. We recommend Knit Club early access if a specific colorway matters to you.",
  },
];

export default function ShippingPage() {
  return (
    <div className="pb-24">
      <div className="border-b border-line bg-oat py-16 md:py-24">
        <Container>
          <h1 className="font-serif text-5xl leading-[1.05] sm:text-6xl">
            Shipping & Returns
          </h1>
        </Container>
      </div>
      <Container className="mt-16 max-w-2xl">
        <div className="flex flex-col divide-y divide-line border-t border-line">
          {sections.map((s) => (
            <div key={s.title} className="py-8">
              <h2 className="font-serif text-2xl">{s.title}</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
