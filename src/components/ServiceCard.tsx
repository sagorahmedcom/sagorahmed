import { Check, ArrowUpRight } from "lucide-react";
import type { services } from "@/lib/data";
import Link from "next/link";

export default function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  return (
    <div className="card-surface group relative flex flex-col rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
      <span className="font-mono text-sm text-fg-faint">{String(index + 1).padStart(2, "0")}</span>
      <h3 className="mt-3 text-lg font-semibold text-fg">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-fg-muted">{service.summary}</p>

      <ul className="mt-5 flex flex-col gap-2.5">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-fg-muted">
            <Check size={15} className="mt-0.5 shrink-0 text-accent" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <span className="font-mono text-sm text-accent">{service.price}</span>
        <Link
          href="/contact"
          className="flex items-center gap-1 font-mono text-xs text-fg-muted transition-colors group-hover:text-fg"
        >
          Get a quote
          <ArrowUpRight size={13} />
        </Link>
      </div>
    </div>
  );
}
