import Link from "next/link";
import { ArrowUpRight, Code2, Zap, ShieldCheck, Star } from "lucide-react";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";
import TerminalWindow from "@/components/TerminalWindow";
import Marquee from "@/components/Marquee";
import FadeIn from "@/components/FadeIn";
import AvailabilityBadge from "@/components/AvailabilityBadge";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import {
  siteConfig,
  trustBadges,
  marqueeSkills,
  services,
  projects,
  process,
  testimonials,
} from "@/lib/data";

const trustBadgeIcons = { code: Code2, zap: Zap, shield: ShieldCheck, star: Star };

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-14 sm:pt-20">
        <Container className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          <FadeIn>
            <AvailabilityBadge />
            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              I build high-performance websites that{" "}
              <span className="text-gradient">load fast &amp; convert visitors</span>.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-fg-muted sm:text-lg">
              {siteConfig.heroSubheadline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/contact">
                Let&apos;s Build Something Better
                <ArrowUpRight size={16} />
              </Button>
              <Button href="/portfolio" variant="secondary">
                View my work
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-border pt-6 sm:grid-cols-4">
              {trustBadges.map((badge) => {
                const Icon = trustBadgeIcons[badge.icon as keyof typeof trustBadgeIcons];
                return (
                  <div key={badge.title} className="flex flex-col gap-1.5">
                    <Icon size={16} className="text-accent" />
                    <span className="text-xs font-medium text-fg">{badge.title}</span>
                    <span className="text-[11px] leading-snug text-fg-muted">{badge.subtitle}</span>
                  </div>
                );
              })}
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="animate-float">
            <TerminalWindow title="whoami.js">
              <p>
                <span className="text-accent-2">const</span>{" "}
                <span className="text-fg">developer</span> = {"{"}
              </p>
              <p className="pl-4">
                name: <span className="text-accent">&quot;{siteConfig.name}&quot;</span>,
              </p>
              <p className="pl-4">
                role:{" "}
                <span className="text-accent">&quot;WordPress + Next.js&quot;</span>,
              </p>
              <p className="pl-4">
                stack:{" "}
                <span className="text-accent">
                  [&quot;WordPress&quot;, &quot;WooCommerce&quot;, &quot;Next.js&quot;]
                </span>
                ,
              </p>
              <p className="pl-4">
                available:{" "}
                <span className="text-accent-2">{String(siteConfig.availableForWork)}</span>
                ,
              </p>
              <p>{"};"}</p>
              <p className="mt-4 text-fg-faint">
                <span className="text-accent-2">export default</span> developer;
              </p>
              <p className="mt-4 flex items-center gap-1 text-fg-muted">
                <span className="text-accent">❯</span> ready to build
                <span className="inline-block h-4 w-2 animate-blink bg-accent" />
              </p>
            </TerminalWindow>
          </FadeIn>
        </Container>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-bg-soft">
        <Container className="grid grid-cols-2 divide-x divide-y divide-border sm:grid-cols-4 sm:divide-y-0">
          {[
            { label: "Projects Delivered", value: `${siteConfig.projectsShipped}+` },
            { label: "Years Experience", value: `${siteConfig.yearsExperience}+` },
            { label: "Client Reviews", value: `${siteConfig.reviewsCount}+` },
            { label: "Multi-Continent Clients", value: "Worldwide" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 px-4 py-8 text-center">
              <span className="font-mono text-3xl font-semibold text-accent sm:text-4xl">{stat.value}</span>
              <span className="text-xs text-fg-muted">{stat.label}</span>
            </div>
          ))}
        </Container>
      </section>

      {/* Tech marquee */}
      <section className="py-12">
        <Container>
          <p className="mb-5 text-center font-mono text-xs uppercase tracking-wider text-fg-faint">
            Tools &amp; tech I work with daily
          </p>
        </Container>
        <Marquee items={marqueeSkills} />
      </section>

      {/* Services preview */}
      <section className="py-24">
        <Container>
          <FadeIn className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <Eyebrow>01 services</Eyebrow>
              <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">
                Services built around your goals
              </h2>
            </div>
            <Link
              href="/services"
              className="flex items-center gap-1 font-mono text-sm text-fg-muted transition-colors hover:text-accent"
            >
              View all services
              <ArrowUpRight size={15} />
            </Link>
          </FadeIn>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service, i) => (
              <FadeIn key={service.slug} delay={i * 0.08}>
                <ServiceCard service={service} index={i} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Projects preview */}
      <section className="py-24">
        <Container>
          <FadeIn className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <Eyebrow>02 work</Eyebrow>
              <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">
                Selected projects I&apos;ve shipped
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="flex items-center gap-1 font-mono text-sm text-fg-muted transition-colors hover:text-accent"
            >
              View full portfolio
              <ArrowUpRight size={15} />
            </Link>
          </FadeIn>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project, i) => (
              <FadeIn key={project.slug} delay={i * 0.08}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="border-t border-border bg-bg-soft py-24">
        <Container>
          <FadeIn>
            <Eyebrow>03 process</Eyebrow>
            <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">How a project runs</h2>
          </FadeIn>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {process.map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.08} className="relative">
                <span className="font-mono text-4xl font-semibold text-fg-faint">{item.step}</span>
                <h3 className="mt-3 text-base font-semibold text-fg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{item.description}</p>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <Container>
          <FadeIn>
            <Eyebrow>04 feedback</Eyebrow>
            <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">What clients say</h2>
          </FadeIn>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.08} className="card-surface flex flex-col rounded-xl p-6">
                <span className="font-mono text-2xl text-accent">&quot;</span>
                <p className="flex-1 text-sm leading-relaxed text-fg-muted">{t.quote}</p>
                <div className="mt-5 border-t border-border pt-4">
                  <p className="text-sm font-medium text-fg">{t.name}</p>
                  <p className="font-mono text-xs text-fg-faint">{t.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Container>
          <FadeIn className="glow-accent relative overflow-hidden rounded-2xl border border-border bg-surface px-6 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute inset-0 bg-dots opacity-30" />
            <p className="relative font-mono text-sm text-accent">{"// let's build something"}</p>
            <h2 className="relative mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Got a project in mind?
            </h2>
            <p className="relative mx-auto mt-4 max-w-md text-fg-muted">
              I&apos;m currently taking on new WordPress and frontend projects. Tell me about yours and I&apos;ll reply within a day.
            </p>
            <div className="relative mt-8 flex justify-center">
              <Button href="/contact">
                Start a project
                <ArrowUpRight size={16} />
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
