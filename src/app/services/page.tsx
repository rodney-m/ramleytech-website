import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom systems, products, intelligence, infrastructure, and financial software — built for organisations that need software they can trust.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Ramley Technologies",
    description:
      "Custom systems, products, intelligence, infrastructure, and financial software.",
    url: `${SITE_URL}/services`,
  },
  twitter: {
    title: "Services | Ramley Technologies",
    description:
      "Custom systems, products, intelligence, infrastructure, and financial software.",
  },
};

const services = [
  {
    id: "custom-systems",
    title: "Custom systems",
    tagline: "Built around your reality.",
    description:
      "When off-the-shelf tools force your team into awkward workarounds, we design platforms that match how the business actually moves — from core workflows to reporting and integrations.",
    outcomes: [
      "Replace brittle manual processes with reliable systems",
      "Connect tools that were never meant to talk",
      "Give operators clarity instead of spreadsheets",
    ],
  },
  {
    id: "products",
    title: "Products & platforms",
    tagline: "Interfaces people want to return to.",
    description:
      "Customer-facing products and internal tools with the same bar: fast, clear, and ready for production from the first release.",
    outcomes: [
      "Ship experiences that feel finished, not provisional",
      "Modernise portals without disrupting daily work",
      "Grow from early users to serious traffic without a rewrite",
    ],
  },
  {
    id: "intelligence",
    title: "Intelligence",
    tagline: "Automation that earns its keep.",
    description:
      "Recognition, document processing, and workflow automation grounded in engineering — systems that run every day under real load, not pilots that stall.",
    outcomes: [
      "Cut through high-volume manual work",
      "Make unstructured data searchable and useful",
      "Move past demos into durable production use",
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    tagline: "Calm under pressure.",
    description:
      "Cloud architecture, delivery pipelines, and operational practices that keep releases predictable and systems observable when it counts.",
    outcomes: [
      "Deploy without holding your breath",
      "See problems before users do",
      "Scale capacity without scaling chaos",
    ],
  },
  {
    id: "fintech",
    title: "Financial systems",
    tagline: "Rigour the sector demands.",
    description:
      "Loan origination, teller platforms, and payment flows built with compliance, auditability, and security treated as foundations — not afterthoughts.",
    outcomes: [
      "Shorten turnaround without loosening controls",
      "Integrate payment rails reliably",
      "Modernise legacy banking workflows carefully",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(59,130,246,0.12) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-brand-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Services
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-text-primary leading-tight max-w-3xl mb-6">
            We care what you need done.
          </h1>
          <p className="text-text-secondary text-lg max-w-xl leading-relaxed">
            A focused set of capabilities. Applied to problems that need real
            engineering judgement — not a catalogue of every tool we&apos;ve
            touched.
          </p>
        </div>
      </section>

      <section className="pb-8 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col">
          {services.map((service, i) => (
            <article
              key={service.id}
              id={service.id}
              className={`scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 py-16 ${
                i === 0 ? "border-t" : ""
              } border-b border-surface-border`}
            >
              <div className="lg:col-span-5">
                <p className="text-text-muted text-xs font-semibold tracking-widest mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="font-display text-3xl font-bold text-text-primary mb-2">
                  {service.title}
                </h2>
                <p className="text-brand-secondary font-medium mb-5">
                  {service.tagline}
                </p>
                <p className="text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-5">
                  What changes
                </p>
                <ul className="flex flex-col gap-4" role="list">
                  {service.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="py-16 text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
          >
            Discuss your project
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
