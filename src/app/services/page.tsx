import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import FAQAccordion from "@/components/FAQAccordion";
import ProcessSteps from "@/components/ProcessSteps";
import { services, faqs, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: `WordPress development, WooCommerce stores, and frontend engineering services from ${siteConfig.name}.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="pb-16 pt-14 sm:pt-20">
        <Container>
          <FadeIn className="max-w-2xl">
            <Eyebrow>services</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Everything you need to launch and grow online
            </h1>
            <p className="mt-6 text-base leading-relaxed text-fg-muted sm:text-lg">
              From a single landing page to a full custom WordPress rebuild or React application — pick a service
              below, or reach out and I&apos;ll help you figure out the right scope.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <FadeIn key={service.slug} delay={i * 0.06}>
                <ServiceCard service={service} index={i} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="border-t border-border bg-bg-soft py-24">
        <Container>
          <FadeIn>
            <Eyebrow>the process</Eyebrow>
            <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">
              How I&apos;ll work with you
            </h2>
          </FadeIn>

          <ProcessSteps />
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <Container className="max-w-3xl">
          <FadeIn>
            <Eyebrow>faq</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Common questions</h2>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-10">
            <FAQAccordion items={faqs} />
          </FadeIn>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <Container>
          <FadeIn className="glow-accent relative overflow-hidden rounded-2xl border border-border bg-surface px-6 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute inset-0 bg-dots opacity-30" />
            <p className="relative font-mono text-sm text-accent">{"// not sure which service fits?"}</p>
            <h2 className="relative mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s scope it out together
            </h2>
            <p className="relative mx-auto mt-4 max-w-md text-fg-muted">
              Tell me what you&apos;re trying to build and I&apos;ll recommend the right approach and a realistic
              timeline — no obligation.
            </p>
            <div className="relative mt-8 flex justify-center">
              <Button href="/contact">
                Get a free quote
                <ArrowUpRight size={16} />
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
