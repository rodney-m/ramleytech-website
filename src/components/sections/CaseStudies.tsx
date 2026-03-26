import Link from "next/link";
import { ArrowRight, Building2, Camera, HeartPulse } from "lucide-react";

const cases = [
  {
    icon: Building2,
    sector: "Banking & Fintech",
    title: "Loan Origination & Teller Automation Platform",
    problem:
      "A major bank was processing loan applications through disconnected manual workflows, resulting in 5-day turnaround times, high error rates, and no real-time visibility for branch staff.",
    solution:
      "We designed and built a centralised loan origination system with automated credit scoring integration, real-time teller dashboards, and a rules engine for compliance workflows. Built on Spring Boot microservices with an Angular frontend.",
    impact: [
      "Loan processing time reduced from 5 days to under 4 hours",
      "Error rate dropped by 91% through automated validation",
      "300+ tellers onboarded across 40 branches",
    ],
    accent: "primary" as const,
  },
  {
    icon: Camera,
    sector: "AI & Computer Vision",
    title: "Event Photo Recognition & Search Platform",
    problem:
      "An event photography company had millions of photos across thousands of events with no scalable way to help attendees find their own images. Manual tagging was impossible at volume.",
    solution:
      "We built a facial recognition pipeline using deep learning models to automatically tag and index photos by attendee. The platform included a self-service search portal where attendees upload a selfie to find all their event photos in seconds.",
    impact: [
      "Photo retrieval time reduced from days to under 10 seconds",
      "Processing 50,000+ images per event automatically",
      "Platform now supports multiple concurrent events",
    ],
    accent: "secondary" as const,
  },
  {
    icon: HeartPulse,
    sector: "Public Health",
    title: "National Health Data Reporting System",
    problem:
      "A national public health programme was collecting facility-level data through paper forms and manual spreadsheet aggregation. Reports were delayed by weeks and contained systematic errors.",
    solution:
      "We implemented and customised a DHIS2-based data platform with mobile data entry forms, automated validation rules, and dashboards for district and national reporting. Integrated with existing facility management systems via REST APIs.",
    impact: [
      "Monthly reporting cycle shortened from 3 weeks to 48 hours",
      "Data completeness improved from 62% to 97%",
      "Dashboard adoption across 200+ health facilities",
    ],
    accent: "primary" as const,
  },
];

const accentMap = {
  primary: "text-brand-primary border-brand-primary/20 bg-brand-primary/5",
  secondary:
    "text-brand-secondary border-brand-secondary/20 bg-brand-secondary/5",
};

export default function CaseStudies() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
      {/* Header */}
      <div className="mb-16">
        <p className="text-brand-primary text-sm font-semibold uppercase tracking-widest mb-3">
          Proven Work
        </p>
        <h2 className="text-4xl lg:text-5xl font-bold text-text-primary max-w-2xl leading-tight">
          Systems we&apos;ve shipped
          <br />
          <span className="gradient-text">in production</span>
        </h2>
        <p className="mt-5 text-text-secondary max-w-xl text-base">
          These aren&apos;t concepts or prototypes. They are live systems
          handling real transactions, real patients, and real data at scale.
        </p>
      </div>

      {/* Case study cards */}
      <div className="flex flex-col gap-8">
        {cases.map((c) => {
          const Icon = c.icon;
          return (
            <article
              key={c.title}
              className="glass rounded-2xl p-8 lg:p-10 hover:border-brand-primary/15 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left: problem/solution */}
                <div className="lg:col-span-2 flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center border ${accentMap[c.accent]}`}
                    >
                      <Icon size={17} />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                      {c.sector}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-text-primary leading-snug">
                    {c.title}
                  </h3>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">
                      The Problem
                    </p>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {c.problem}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">
                      Our Approach
                    </p>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {c.solution}
                    </p>
                  </div>
                </div>

                {/* Right: impact */}
                <div className="flex flex-col justify-center">
                  <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                    Impact
                  </p>
                  <ul className="flex flex-col gap-3" role="list">
                    {c.impact.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-text-secondary"
                      >
                        <span
                          className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                            c.accent === "primary"
                              ? "bg-brand-primary"
                              : "bg-brand-secondary"
                          }`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 text-brand-primary font-medium hover:gap-3 transition-all"
        >
          Discuss your project
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}
