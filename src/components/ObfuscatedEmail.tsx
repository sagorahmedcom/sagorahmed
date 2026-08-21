"use client";

import { useEffect, useState, type ReactNode } from "react";

export default function ObfuscatedEmail({
  user,
  domain,
  className,
  icon,
}: {
  user: string;
  domain: string;
  className?: string;
  icon?: ReactNode;
}) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    // Deliberate mount-gate, not derived-state sync: the address must be absent
    // from the server-rendered HTML/bundle and only assembled after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEmail(`${user}@${domain}`);
  }, [user, domain]);

  const display = email ?? `${user} [at] ${domain.replace(".", " [dot] ")}`;

  return (
    <a href={email ? `mailto:${email}` : undefined} className={className}>
      {icon}
      {display}
    </a>
  );
}
