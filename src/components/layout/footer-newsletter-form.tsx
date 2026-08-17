"use client";

import { useState } from "react";

export function FooterNewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return <p className="mt-4 text-sm text-clay-light">You&apos;re on the list.</p>;
  }

  return (
    <form
      className="mt-4 flex border-b border-paper/30 focus-within:border-clay-light"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <input
        type="email"
        required
        placeholder="Email address"
        className="w-full bg-transparent py-2 text-sm placeholder:text-paper/40 focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 text-xs uppercase tracking-[0.1em] text-clay-light"
      >
        Join
      </button>
    </form>
  );
}
