import { cn } from "@/lib/utils";
import Link from "next/link";
import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-[13px] font-medium tracking-[0.08em] uppercase transition-colors duration-300 disabled:opacity-40 disabled:pointer-events-none";

const variants = {
  primary: "bg-ink text-paper hover:bg-clay px-7 py-3.5",
  clay: "bg-clay text-paper hover:bg-clay-dark px-7 py-3.5",
  outline: "border border-ink text-ink hover:bg-ink hover:text-paper px-7 py-3.5",
  "outline-light": "border border-paper text-paper hover:bg-paper hover:text-ink px-7 py-3.5",
  ghost: "text-ink hover:text-clay underline-offset-4 hover:underline px-0 py-0",
};

type Variant = keyof typeof variants;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return <button className={cn(base, variants[variant], className)} {...props} />;
}

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  href: string;
}

export function ButtonLink({ variant = "primary", className, href, ...props }: ButtonLinkProps) {
  return <Link href={href} className={cn(base, variants[variant], className)} {...props} />;
}
