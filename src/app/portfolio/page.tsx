import type { Metadata } from "next";
import { ArrowUpRight, Hammer } from "lucide-react";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `Case studies from ${siteConfig.name}'s WordPress and Next.js projects, coming soon.`,
};

export default function PortfolioPage() {
  return (
    <>
      <section className="pb-16 pt-14 sm:pt-20">
        <Container>
          <FadeIn className="max-w-2xl">
            <Eyebrow>portfolio</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Case studies coming soon</h1>
            <p className="mt-6 text-base leading-relaxed text-fg-muted sm:text-lg">
              I&apos;m putting together detailed write-ups from recent WordPress, WooCommerce, and Next.js
              projects, with the numbers and challenges behind each one. This page will fill in soon.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <FadeIn
            delay={0.1}
            className="card-surface relative flex flex-col items-center gap-4 overflow-hidden rounded-2xl border border-border px-6 py-20 text-center"
          >
            <div className="pointer-events-none absolute inset-0 bg-dots opacity-20" />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-accent-soft text-accent">
              <Hammer size={22} />
            </span>
            <h2 className="relative text-xl font-semibold text-fg">Building the case study library</h2>
            <p className="relative max-w-md text-sm leading-relaxed text-fg-muted">
              In the meantime, get in touch and I&apos;ll walk you through relevant examples of my WordPress and
              Next.js work directly.
            </p>
            <Button href="/contact" className="relative mt-2">
              Get in touch
              <ArrowUpRight size={16} />
            </Button>
          </FadeIn>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <FadeIn className="glow-accent relative overflow-hidden rounded-2xl border border-border bg-surface px-6 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute inset-0 bg-dots opacity-30" />
            <p className="relative font-mono text-sm uppercase tracking-wider text-accent">Let&apos;s talk</p>
            <h2 className="relative mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s build your next project
            </h2>
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
