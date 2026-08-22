import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MapPin, FileDown, ArrowRight, Check } from "lucide-react";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import AvailabilityBadge from "@/components/AvailabilityBadge";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import { siteConfig, skillGroups, experience, education, focusAreas, availableFor, values } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.name}, ${siteConfig.role.toLowerCase()}.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="pb-16 pt-14 sm:pt-20">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <FadeIn className="order-2 flex flex-col items-center gap-4 lg:order-1">
            <div className="relative h-64 w-64 overflow-hidden rounded-2xl border border-border sm:h-80 sm:w-80">
              <Image
                src="/sagorahmed.jpg"
                alt={siteConfig.name}
                fill
                sizes="(min-width: 640px) 320px, 256px"
                className="object-cover"
                priority
              />
            </div>
            <div className="rounded-lg border border-border bg-surface px-4 py-2.5 font-mono text-xs text-fg-muted shadow-lg">
              <span className="text-accent">const</span> role = &quot;developer&quot;;
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="order-1 lg:order-2">
            <Eyebrow>about me</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              I turn ideas into <span className="text-gradient">fast, reliable</span> websites.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-fg-muted sm:text-lg">
              I&apos;m {siteConfig.name}, a web developer with {siteConfig.yearsExperience}+ years of experience
              turning ideas into fast, reliable websites for businesses across the world. Since 2019, I&apos;ve
              delivered {siteConfig.projectsShipped}+ projects for clients across multiple continents, specializing
              in custom WordPress theme development, WooCommerce, and — more recently — high-performance Next.js
              frontends and Headless WordPress architecture. Based in {siteConfig.location}, I work remotely with
              clients worldwide.
            </p>
            <p className="mt-4 text-base leading-relaxed text-fg-muted sm:text-lg">
              I studied English Language &amp; Literature at BUBT (2016–2020) — which, alongside the code, gives me
              an edge in understanding client requirements clearly and communicating without friction, something a
              lot of dev-client relationships struggle with.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <AvailabilityBadge />
              <Button href="#" variant="secondary" className="!px-4 !py-2.5 text-xs">
                <FileDown size={14} />
                Download résumé
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-fg-muted">
              <ObfuscatedEmail
                user={siteConfig.emailUser}
                domain={siteConfig.emailDomain}
                className="flex items-center gap-1.5 hover:text-fg"
                icon={<Mail size={13} className="text-accent" />}
              />
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-accent" />
                {siteConfig.location}
              </span>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Focus areas & availability */}
      <section className="border-t border-border bg-bg-soft py-24">
        <Container>
          <FadeIn>
            <Eyebrow>focus areas</Eyebrow>
            <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">
              What I focus on today
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <FadeIn>
              <ul className="flex flex-col gap-4">
                {focusAreas.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-fg-muted">
                    <ArrowRight size={16} className="mt-0.5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.08} className="card-surface rounded-xl p-6">
              <h3 className="font-mono text-sm text-accent">Currently available for</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {availableFor.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-fg-muted">
                    <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Experience */}
      <section className="py-24">
        <Container>
          <FadeIn>
            <Eyebrow>experience</Eyebrow>
            <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">
              {experience.range} · {experience.duration}
            </h2>
          </FadeIn>

          <FadeIn delay={0.08} className="card-surface mt-10 rounded-xl p-6 sm:p-8">
            <h3 className="font-mono text-base font-medium text-fg">{experience.title}</h3>
            <ul className="mt-5 flex flex-col gap-3.5">
              {experience.bullets.map((bullet) => (
                <li key={bullet.text} className="flex items-start gap-3 text-sm leading-relaxed text-fg-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    {bullet.milestone && (
                      <span className="mr-2 rounded-md border border-accent/30 bg-accent-soft px-1.5 py-0.5 font-mono text-[11px] text-accent">
                        {bullet.milestone}
                      </span>
                    )}
                    {bullet.text}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.14} className="mt-8">
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-fg-faint">Education</p>
            <div className="flex flex-col gap-3">
              {education.map((item) => (
                <div key={item.school} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-sm">
                  <span className="text-fg-muted">
                    {item.school} — {item.degree}
                  </span>
                  <span className="font-mono text-xs text-fg-faint">{item.years}</span>
                </div>
              ))}
            </div>
          </FadeIn>
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
