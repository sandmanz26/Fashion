"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className="font-serif text-2xl italic text-ink-soft">
        Thanks — we&apos;ll be in touch within 1–2 business days.
      </p>
    );
  }

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm">
          Name
          <input
            required
            type="text"
            className="border border-line bg-transparent px-4 py-3 focus:border-ink focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          Email
          <input
            required
            type="email"
            className="border border-line bg-transparent px-4 py-3 focus:border-ink focus:outline-none"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm">
        Message
        <textarea
          required
          rows={5}
          className="border border-line bg-transparent px-4 py-3 focus:border-ink focus:outline-none"
        />
      </label>
      <Button type="submit" variant="primary" className="w-fit">
        Send Message
      </Button>
    </form>
  );
}
