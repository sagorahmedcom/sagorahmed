import { siteConfig } from "@/lib/data";

export default function AvailabilityBadge() {
  if (!siteConfig.availableForWork) return null;
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-xs text-fg-muted">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>
      Available for freelance work
    </div>
  );
}
