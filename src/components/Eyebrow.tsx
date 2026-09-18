import { cn } from "@/lib/utils";

export default function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-body text-xs font-semibold uppercase tracking-[0.08em] text-accent",
        className
      )}
    >
      {children}
    </div>
  );
}
