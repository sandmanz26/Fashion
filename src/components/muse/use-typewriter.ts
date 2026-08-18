"use client";

import { useEffect, useState } from "react";

export function useTypewriter(text: string, speedMs = 14) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    if (!text) {
      const t = setTimeout(() => setShown(""), 0);
      return () => clearTimeout(t);
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speedMs);
    return () => clearInterval(id);
  }, [text, speedMs]);

  const done = shown.length === text.length;
  return { shown, done };
}
