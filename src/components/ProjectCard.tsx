import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card-surface group flex flex-col overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
      <div className={cn("relative flex h-40 flex-col justify-between bg-gradient-to-br p-4", project.accent)}>
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
          <span className="ml-2 rounded-md bg-black/20 px-2.5 py-1 font-mono text-[11px] text-white/70">
            {project.slug}.dev
          </span>
        </div>
        <span className="font-mono text-3xl font-semibold text-white/90">
          {project.title
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 3)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-accent">{project.category}</span>
          <span className="font-mono text-xs text-fg-faint">{project.year}</span>
        </div>
        <h3 className="mt-2 text-lg font-semibold text-fg">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-muted">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-md border border-border px-2 py-1 font-mono text-[11px] text-fg-muted">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-1 font-mono text-sm text-fg-muted transition-colors group-hover:text-accent">
          View case study
          <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </div>
  );
}
