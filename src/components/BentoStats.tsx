import { bentoStats } from "@/lib/data";
import { cn } from "@/lib/utils";
import FadeIn from "./FadeIn";
import { WordpressIcon, NextjsIcon, CloudflareIcon } from "./icons";

const iconMap = { wordpress: WordpressIcon, nextjs: NextjsIcon, cloudflare: CloudflareIcon };

const cardClasses: Record<string, string> = {
  projects: "md:col-start-1 md:row-start-1 md:row-span-2 bg-gradient-to-br from-accent/20 via-accent/5 to-transparent",
  workflow: "md:col-start-2 md:row-start-1",
  reviews: "md:col-start-2 md:row-start-2 bg-gradient-to-br from-accent-2/15 to-accent/10",
  experience:
    "md:col-start-3 md:row-start-1 md:row-span-2 bg-gradient-to-br from-accent-2/25 via-accent-2/5 to-transparent",
  countries: "md:col-start-1 md:col-span-3 md:row-start-3",
};

export default function BentoStats() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {bentoStats.map((stat, i) => (
        <FadeIn
          key={stat.id}
          delay={i * 0.06}
          className={cn(
            "card-surface relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border p-6 sm:p-8",
            cardClasses[stat.id]
          )}
        >
          <div className="pointer-events-none absolute inset-0 bg-dots opacity-20" />

          {stat.id === "workflow" ? (
            <div className="relative flex items-start justify-between gap-4">
              <h3 className="text-base font-semibold text-fg sm:text-lg">{stat.title}</h3>
              <div className="flex shrink-0 items-center gap-2">
                {"icons" in stat &&
                  stat.icons.map((iconKey) => {
                    const Icon = iconMap[iconKey as keyof typeof iconMap];
                    return (
                      <span
                        key={iconKey}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-bg-soft text-accent"
                      >
                        <Icon size={15} />
                      </span>
                    );
                  })}
              </div>
            </div>
          ) : (
            "number" in stat && (
              <span className="relative block font-mono text-4xl font-bold tracking-tight text-fg sm:text-5xl">
                {stat.number}
              </span>
            )
          )}

          <div className="relative mt-6">
            {stat.id !== "workflow" && <h3 className="text-base font-semibold text-fg sm:text-lg">{stat.title}</h3>}
            <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-fg-muted">{stat.description}</p>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
