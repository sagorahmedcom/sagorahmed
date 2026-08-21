export default function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee gap-3 py-1">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="whitespace-nowrap rounded-lg border border-border bg-surface px-4 py-2 font-mono text-sm text-fg-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
