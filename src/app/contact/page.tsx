import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact — PURL",
  description: "Get in touch with the PURL team.",
};

export default function ContactPage() {
  return (
    <div className="pb-24">
      <div className="border-b border-line bg-oat py-16 md:py-24">
        <Container>
          <p className="text-[11px] uppercase tracking-[0.25em] text-clay">
            Get In Touch
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-[1.05] sm:text-6xl">
            Let&apos;s talk.
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft">
            Pattern questions, kit issues, wholesale, or press — we read
            every message ourselves.
          </p>
        </Container>
      </div>
      <Container className="mt-16 max-w-xl">
        <ContactForm />
      </Container>
    </div>
  );
}
