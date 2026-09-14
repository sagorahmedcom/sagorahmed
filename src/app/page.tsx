import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import AvailabilityBadge from "@/components/AvailabilityBadge";
import ServiceCard from "@/components/ServiceCard";
import BentoStats from "@/components/BentoStats";
import ProcessSteps from "@/components/ProcessSteps";
import { siteConfig, services } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-14 sm:pt-20">
        <Container>
          <FadeIn className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <AvailabilityBadge />
            <p className="mt-6 text-2xl font-bold tracking-tight text-fg sm:text-3xl">{siteConfig.name}</p>
            <h1 className="mt-3 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              I build high-performance websites that{" "}
              <span className="text-gradient">load fast &amp; convert visitors</span>.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-fg-muted sm:text-lg">
              {siteConfig.heroSubheadline}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact">
                Let&apos;s Build Something Better
                <ArrowUpRight size={16} />
              </Button>
              <Button href="/portfolio" variant="secondary">
                View my work
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-20">
        <Container>
          <BentoStats />
        </Container>
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
          <FadeIn>
            <Eyebrow>02 work</Eyebrow>
            <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">Portfolio coming soon</h2>
          </FadeIn>

          <FadeIn
            delay={0.08}
            className="card-surface relative mt-10 flex flex-col items-center gap-4 overflow-hidden rounded-2xl border border-border px-6 py-16 text-center"
          >
            <div className="pointer-events-none absolute inset-0 bg-dots opacity-20" />
            <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-accent-soft text-accent">
              <Sparkles size={20} />
            </span>
            <p className="relative max-w-md text-sm leading-relaxed text-fg-muted">
              I&apos;m putting together detailed case studies from recent client work. Check back soon, or get in
              touch and I&apos;ll walk you through examples directly.
            </p>
            <Link
              href="/contact"
              className="relative mt-2 flex items-center gap-1 font-mono text-sm text-accent hover:underline"
            >
              Get in touch
              <ArrowUpRight size={15} />
            </Link>
          </FadeIn>
        </Container>
      </section>

      {/* Process */}
      <section className="border-t border-border bg-bg-soft py-24">
        <Container>
          <FadeIn>
            <Eyebrow>03 process</Eyebrow>
            <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">How a project runs</h2>
          </FadeIn>

          <ProcessSteps />
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Container>
          <FadeIn className="glow-accent relative overflow-hidden rounded-2xl border border-border bg-surface px-6 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute inset-0 bg-dots opacity-30" />
            <p className="relative font-mono text-sm uppercase tracking-wider text-accent">Let&apos;s talk</p>
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
