import type { Metadata } from "next";
import { Mail, MapPin, FileDown } from "lucide-react";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import AvailabilityBadge from "@/components/AvailabilityBadge";
import { siteConfig, skillGroups, timeline, values } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.name}, ${siteConfig.role.toLowerCase()}.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="pb-16 pt-14 sm:pt-20">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <FadeIn className="order-2 flex justify-center lg:order-1">
            <div className="relative">
              <div className="flex h-64 w-64 items-center justify-center rounded-2xl border border-border bg-gradient-to-br from-accent/20 via-surface to-accent-2/10 font-mono text-6xl font-semibold text-fg sm:h-80 sm:w-80">
                SA
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-lg border border-border bg-surface px-4 py-2.5 font-mono text-xs text-fg-muted shadow-lg">
                <span className="text-accent">const</span> role = &quot;builder&quot;;
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="order-1 lg:order-2">
            <Eyebrow>about me</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              I turn ideas into <span className="text-gradient">fast, reliable</span> websites.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-fg-muted sm:text-lg">
              I&apos;m {siteConfig.name}, a {siteConfig.role.toLowerCase()} based in {siteConfig.location}. For the
              past {siteConfig.yearsExperience}+ years I&apos;ve helped startups, agencies, and small businesses
              turn designs and rough ideas into websites that actually perform — on WordPress and on modern
              JavaScript stacks alike.
            </p>
            <p className="mt-4 text-base leading-relaxed text-fg-muted sm:text-lg">
              I care about the details most people skip: load time, clean markup, accessible interactions, and
              code that the next developer — or you — can actually understand six months later.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <AvailabilityBadge />
              <Button href="#" variant="secondary" className="!px-4 !py-2.5 text-xs">
                <FileDown size={14} />
                Download résumé
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-fg-muted">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1.5 hover:text-fg">
                <Mail size={13} className="text-accent" />
                {siteConfig.email}
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-accent" />
                {siteConfig.location}
              </span>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Timeline */}
      <section className="border-t border-border bg-bg-soft py-24">
        <Container>
          <FadeIn>
            <Eyebrow>my journey</Eyebrow>
            <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">git log --my-career</h2>
          </FadeIn>

          <div className="mt-12 flex flex-col">
            {timeline.map((item, i) => (
              <FadeIn
                key={item.year}
                delay={i * 0.06}
                className="relative border-l border-border pb-10 pl-6 last:pb-0"
              >
                <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-bg-soft bg-accent" />
                <div className="grid grid-cols-[70px_1fr] gap-5 sm:grid-cols-[100px_1fr]">
                  <span className="font-mono text-sm text-accent">{item.year}</span>
                  <div>
                    <p className="font-mono text-sm font-medium text-fg">{item.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Skills */}
      <section className="py-24">
        <Container>
          <FadeIn>
            <Eyebrow>skill set</Eyebrow>
            <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">
              What&apos;s in the toolbox
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {skillGroups.map((group, i) => (
              <FadeIn key={group.title} delay={i * 0.08} className="card-surface rounded-xl p-6">
                <h3 className="font-mono text-sm text-accent">{group.title}</h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-fg-muted">
                      <span className="h-1 w-1 rounded-full bg-fg-faint" />
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="border-t border-border bg-bg-soft py-24">
        <Container>
          <FadeIn>
            <Eyebrow>how i work</Eyebrow>
            <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">
              Principles behind every project
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.06} className="flex gap-4 rounded-xl border border-border p-6">
                <span className="font-mono text-xl text-fg-faint">0{i + 1}</span>
                <div>
                  <h3 className="font-semibold text-fg">{value.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
