import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 font-mono text-sm font-medium transition-all duration-200 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-contrast hover:brightness-110 hover:-translate-y-0.5 shadow-[0_0_0_1px_rgba(0,0,0,0.05)]",
  secondary:
    "border border-border-strong bg-surface text-fg hover:border-accent/50 hover:bg-surface-hover hover:-translate-y-0.5",
  ghost: "text-fg-muted hover:text-fg",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & { href: string } & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">;
type ButtonAsButton = CommonProps & { href?: undefined } & Omit<ComponentPropsWithoutRef<"button">, "className">;

export default function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", className, children, ...rest } = props;

  if (rest.href) {
    return (
      <Link className={cn(base, variants[variant], className)} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cn(base, variants[variant], className)} {...(rest as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}
