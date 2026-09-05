import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5 text-sm font-semibold tracking-tight text-fg", className)}>
      <Image
        src="/sagorahmed.jpg"
        alt=""
        width={28}
        height={28}
        className="h-7 w-7 shrink-0 rounded-full border border-border object-cover"
      />
      <span>{siteConfig.name}</span>
    </Link>
  );
}
