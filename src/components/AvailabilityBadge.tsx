import { siteConfig } from "@/lib/data";

export default function AvailabilityBadge() {
  if (!siteConfig.availableForWork) return null;
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-badge-bg px-3 py-1.5 font-body text-xs font-medium text-badge-text">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-teal opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-teal" />
      </span>
      Available for freelance work
    </div>
  );
}
