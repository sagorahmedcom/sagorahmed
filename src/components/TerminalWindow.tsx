import { cn } from "@/lib/utils";

export default function TerminalWindow({
  title = "sagor@portfolio ~",
  children,
  className,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("card-surface overflow-hidden rounded-xl shadow-2xl shadow-black/40", className)}>
      <div className="flex items-center gap-2 border-b border-border bg-bg-soft px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-fg-faint">{title}</span>
      </div>
      <div className="p-5 font-mono text-sm leading-relaxed">{children}</div>
    </div>
  );
}
