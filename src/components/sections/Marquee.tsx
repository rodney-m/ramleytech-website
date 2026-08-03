"use client";

const items = [
  "Banking systems",
  "Health platforms",
  "Product engineering",
  "Automation",
  "Cloud foundations",
  "System rescue",
  "Fintech",
  "National scale",
];

export default function Marquee() {
  const row = [...items, ...items];

  return (
    <div
      className="border-y border-surface-border py-5 overflow-hidden"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 px-8 text-sm text-text-muted whitespace-nowrap"
          >
            <span className="w-1 h-1 rounded-full bg-brand-primary/60" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
