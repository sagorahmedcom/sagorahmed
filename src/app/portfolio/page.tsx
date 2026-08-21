import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import PortfolioGrid from "@/components/PortfolioGrid";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `A selection of WordPress and frontend projects built by ${siteConfig.name}.`,
};

export default function PortfolioPage() {
  return (
    <>
      <section className="pb-16 pt-14 sm:pt-20">
        <Container>
          <FadeIn className="max-w-2xl">
            <Eyebrow>portfolio</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Selected work, shipped and live
            </h1>
            <p className="mt-6 text-base leading-relaxed text-fg-muted sm:text-lg">
              A mix of custom WordPress builds, WooCommerce stores, and React / Next.js applications. Filter by
              category to see relevant work.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <FadeIn delay={0.1}>
            <PortfolioGrid />
          </FadeIn>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <FadeIn className="glow-accent relative overflow-hidden rounded-2xl border border-border bg-surface px-6 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute inset-0 bg-dots opacity-30" />
            <p className="relative font-mono text-sm text-accent">{"// like what you see?"}</p>
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
