"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal, { RevealItem, RevealStagger } from "@/components/ui/Reveal";

const cases = [
  {
    sector: "Banking",
    title: "Loan origination at branch scale",
    result: "5 days → under 4 hours",
    detail: "300+ tellers across 40 branches. Error rate down 91%.",
  },
  {
    sector: "AI",
    title: "Event photo recognition",
    result: "Days → 10 seconds",
    detail: "50,000+ images per event, found from a single selfie.",
  },
  {
    sector: "Health",
    title: "National health reporting",
    result: "3 weeks → 48 hours",
    detail: "Data completeness from 62% to 97% across 200+ facilities.",
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="py-28 border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="mb-16 max-w-2xl">
          <p className="text-brand-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Selected work
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-text-primary leading-tight">
            Live systems.
            <br />
            Real pressure.
          </h2>
        </Reveal>

        <RevealStagger className="flex flex-col" stagger={0.12}>
          {cases.map((c, i) => (
            <RevealItem key={c.title}>
              <motion.article
                whileHover={{ x: 6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={`group grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 py-10 border-t border-surface-border ${
                  i === cases.length - 1 ? "border-b" : ""
                }`}
              >
                <p className="lg:col-span-2 text-xs font-semibold uppercase tracking-widest text-text-muted pt-1">
                  {c.sector}
                </p>
                <div className="lg:col-span-5">
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-text-primary group-hover:text-brand-secondary transition-colors duration-300">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                    {c.detail}
                  </p>
                </div>
                <div className="lg:col-span-5 lg:text-right flex lg:justify-end items-start">
                  <p className="font-display text-2xl sm:text-3xl font-bold gradient-text">
                    {c.result}
                  </p>
                </div>
              </motion.article>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal delay={0.2} className="mt-12">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            Tell us what you&apos;re building
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
