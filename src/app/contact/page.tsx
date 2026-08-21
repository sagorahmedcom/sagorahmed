import type { Metadata } from "next";
import { Mail, MapPin, Clock, Briefcase } from "lucide-react";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import FadeIn from "@/components/FadeIn";
import AvailabilityBadge from "@/components/AvailabilityBadge";
import ContactForm from "@/components/ContactForm";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} about your next WordPress or frontend project.`,
};

const iconMap = { github: GithubIcon, linkedin: LinkedinIcon, twitter: XIcon, briefcase: Briefcase };

export default function ContactPage() {
  return (
    <section className="pb-24 pt-14 sm:pt-20">
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
        <FadeIn>
          <Eyebrow>contact</Eyebrow>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Let&apos;s start a project</h1>
          <p className="mt-6 text-base leading-relaxed text-fg-muted sm:text-lg">
            Have a WordPress site to build, a store to launch, or a frontend app in mind? Send over the details
            and I&apos;ll get back to you within a day.
          </p>

          <div className="mt-8">
            <AvailabilityBadge />
          </div>

          <div className="mt-8 flex flex-col gap-4">
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-sm text-fg-muted hover:text-fg">
              <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-accent">
                <Mail size={16} />
              </span>
              {siteConfig.email}
            </a>
            <div className="flex items-center gap-3 text-sm text-fg-muted">
              <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-accent">
                <MapPin size={16} />
              </span>
              {siteConfig.location}
            </div>
            <div className="flex items-center gap-3 text-sm text-fg-muted">
              <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-accent">
                <Clock size={16} />
              </span>
              Usually responds within 24 hours
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {siteConfig.socials.map((social) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-fg-muted transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <ContactForm />
        </FadeIn>
      </Container>
    </section>
  );
}
