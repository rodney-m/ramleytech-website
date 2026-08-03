"use client";

import Reveal, { RevealItem, RevealStagger } from "@/components/ui/Reveal";

const steps = [
  {
    num: "01",
    title: "Understand",
    description:
      "We dig into the real constraints — people, process, and pressure — before a line of work begins.",
  },
  {
    num: "02",
    title: "Build",
    description:
      "Senior engineers ship in focused cycles. You talk to the people writing the system, not a relay of middle layers.",
  },
  {
    num: "03",
    title: "Own",
    description:
      "We hand over software your team can run. Clear, documented, and built to last past the launch week.",
  },
];

export default function WhyRamley() {
  return (
    <section className="py-28 border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="mb-16 max-w-xl">
          <p className="text-brand-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            How we work
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-text-primary leading-tight">
            Simple process.
            <br />
            Serious craft.
          </h2>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step) => (
            <RevealItem key={step.num}>
              <div>
                <p className="font-display text-5xl font-bold text-white/[0.06] mb-4 leading-none">
                  {step.num}
                </p>
                <h3 className="font-display text-xl font-semibold text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
