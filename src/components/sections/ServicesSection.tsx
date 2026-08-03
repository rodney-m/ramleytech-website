"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal, { RevealItem, RevealStagger } from "@/components/ui/Reveal";

const offerings = [
  {
    title: "Custom systems",
    description:
      "Core platforms shaped around how your organisation actually works — not how a template assumes it does.",
  },
  {
    title: "Products & platforms",
    description:
      "Web and mobile experiences that feel fast, stay reliable, and grow with your users.",
  },
  {
    title: "Intelligence",
    description:
      "Automation and recognition that cut through volume — built to run every day, not just in a demo.",
  },
  {
    title: "Infrastructure",
    description:
      "Cloud foundations and delivery pipelines that keep shipping calm when traffic spikes.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 max-w-7xl mx-auto px-6 lg:px-8">
      <Reveal className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <p className="text-brand-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            What we do
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-text-primary leading-tight max-w-lg">
            Outcomes, not toolkits.
          </h2>
        </div>
        <Link
          href="/services"
          className="group inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
        >
          All services
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </Reveal>

      <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-surface-border rounded-2xl overflow-hidden">
        {offerings.map((item) => (
          <RevealItem key={item.title}>
            <article className="bg-surface-base p-8 sm:p-10 h-full group hover:bg-surface-raised transition-colors duration-500">
              <h3 className="font-display text-xl font-semibold text-text-primary mb-3 group-hover:text-brand-secondary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
                {item.description}
              </p>
            </article>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
