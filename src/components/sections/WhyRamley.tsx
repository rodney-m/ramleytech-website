import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Enterprise-grade from the start",
    description:
      "We build systems for banks and national health programmes. Every project gets the same architecture discipline regardless of size.",
  },
  {
    title: "Designed to scale",
    description:
      "Our systems are built with horizontal scalability in mind. When your volume grows, your system grows with it — without an emergency rewrite.",
  },
  {
    title: "African market expertise",
    description:
      "We understand the connectivity, compliance, and operational context of African enterprise environments. We build for the real deployment conditions.",
  },
  {
    title: "Senior engineers, not juniors",
    description:
      "Your project is not a training ground. Our team is composed of engineers who have shipped production systems, not those learning on the job.",
  },
  {
    title: "Clean, maintainable code",
    description:
      "We document, test, and structure code for the teams that will maintain it after us. We have no interest in creating dependency on ourselves.",
  },
  {
    title: "Fast execution without shortcuts",
    description:
      "We move quickly because we are experienced, not because we skip steps. Speed and quality are not mutually exclusive in a well-run team.",
  },
];

export default function WhyRamley() {
  return (
    <section className="py-24 bg-surface-raised border-y border-surface-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div>
            <p className="text-brand-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Why Ramley
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-6">
              We&apos;re engineers first.
              <br />
              <span className="gradient-text">Everything else follows.</span>
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-8">
              Most software agencies optimise for winning contracts. We optimise
              for delivering systems that work in production, two years after
              we&apos;ve shipped them.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              Ramley Technologies was founded by engineers who had already spent
              years building critical infrastructure for financial institutions
              and government health systems. We started the company because we
              saw too many enterprises struggling with under-engineered software
              from teams that prioritised delivery speed over system integrity.
            </p>
          </div>

          {/* Right column: reasons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="glass rounded-xl p-5 hover:border-brand-primary/20 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-brand-primary flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <h3 className="text-text-primary font-semibold text-sm mb-1.5">
                      {reason.title}
                    </h3>
                    <p className="text-text-muted text-xs leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
