import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/data";
import Container from "./Container";
import Logo from "./Logo";
import { GithubIcon, LinkedinIcon, XIcon, FiverrIcon } from "./icons";
import ObfuscatedEmail from "./ObfuscatedEmail";

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: XIcon,
  fiverr: FiverrIcon,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-soft">
      <Container className="flex flex-col items-center gap-8 py-16 text-center">
        <Logo />
        <p className="max-w-sm text-sm text-fg-muted">{siteConfig.shortTagline}</p>

        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-mono text-sm">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-fg-muted transition-colors hover:text-fg">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-2 text-sm text-fg-muted">
          <ObfuscatedEmail
            user={siteConfig.emailUser}
            domain={siteConfig.emailDomain}
            className="transition-colors hover:text-fg"
          />
          <a href={`tel:${siteConfig.phoneHref}`} className="transition-colors hover:text-fg">
            {siteConfig.phone}
          </a>
          <a
            href={siteConfig.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="max-w-xs text-xs leading-relaxed transition-colors hover:text-fg"
          >
            {siteConfig.address.line1}, {siteConfig.address.line2}
            <br />
            {siteConfig.address.city} {siteConfig.address.postal}, {siteConfig.address.country}
          </a>
        </div>

        <div className="flex items-center gap-3">
          {siteConfig.socials.map((social) => {
            const Icon = iconMap[social.icon as keyof typeof iconMap];
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg-muted transition-colors hover:border-accent/50 hover:text-accent"
              >
                <Icon size={16} />
              </a>
            );
          })}
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
