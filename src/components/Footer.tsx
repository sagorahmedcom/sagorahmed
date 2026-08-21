import Link from "next/link";
import { Briefcase, Mail } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";
import Container from "./Container";
import { GithubIcon, LinkedinIcon, XIcon } from "./icons";
import ObfuscatedEmail from "./ObfuscatedEmail";

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: XIcon,
  briefcase: Briefcase,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-soft">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2 font-mono text-sm font-semibold text-fg">
            <span className="text-accent">{"<"}</span>
            {siteConfig.name}
            <span className="text-accent">{"/>"}</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm text-fg-muted">{siteConfig.shortTagline}</p>
          <div className="mt-5 flex items-center gap-3">
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
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-fg-faint">Navigate</p>
          <ul className="mt-4 flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-fg-muted transition-colors hover:text-fg">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-fg-faint">Get in touch</p>
          <ObfuscatedEmail
            user={siteConfig.emailUser}
            domain={siteConfig.emailDomain}
            className="mt-4 flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
            icon={<Mail size={15} />}
          />
          <p className="mt-2.5 text-sm text-fg-muted">{siteConfig.location}</p>
        </div>
      </Container>

      <Container className="flex flex-col items-center justify-between gap-3 border-t border-border py-6 font-mono text-xs text-fg-faint sm:flex-row">
        <p>
          © {year} {siteConfig.name}. All rights reserved.
        </p>
        <p>
          Built with Next.js &amp; Tailwind CSS<span className="text-accent"> — </span>designed to ship fast.
        </p>
      </Container>
    </footer>
  );
}
