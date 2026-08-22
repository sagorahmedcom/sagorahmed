import { process } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function ProcessSteps() {
  return (
    <div className="mt-16">
      <div className="hidden items-center md:flex">
        {process.map((item, i) => (
          <div key={item.step} className="flex flex-1 items-center last:flex-none">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-bg font-mono text-sm font-semibold text-accent">
              {item.step}
            </span>
            {i < process.length - 1 && <span className="mx-2 h-px flex-1 bg-border" />}
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-8 md:grid-cols-4">
        {process.map((item, i) => (
          <FadeIn key={item.step} delay={i * 0.08}>
            <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-accent/40 bg-bg font-mono text-sm font-semibold text-accent md:hidden">
              {item.step}
            </span>
            <h3 className="text-base font-semibold text-fg">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">{item.description}</p>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
