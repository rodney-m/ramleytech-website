import type { Metadata } from "next";
import { Globe, Target, Users, Zap } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ramley Technologies is a South African software company building enterprise-grade systems for Africa and the world.",
};

const values = [
  {
    icon: Target,
    title: "Engineering rigour",
    description:
      "We apply the same discipline to a startup MVP as we do to a banking system. Every decision is defensible.",
  },
  {
    icon: Globe,
    title: "Global standards, local context",
    description:
      "We build to international engineering standards with a precise understanding of African enterprise realities.",
  },
  {
    icon: Users,
    title: "Long-term partnerships",
    description:
      "We are not a transaction. Our best client relationships are measured in years, not sprints.",
  },
  {
    icon: Zap,
    title: "Velocity without chaos",
    description:
      "Delivery speed comes from clarity and experience, not from cutting corners or skipping architecture.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(0,212,255,0.06) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 30%, rgba(108,92,231,0.06) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-brand-primary text-sm font-semibold uppercase tracking-widest mb-4">
              Who We Are
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-8">
              Building Africa&apos;s next
              <br />
              <span className="gradient-text">generation of software</span>
            </h1>
            <p className="text-text-secondary text-xl leading-relaxed">
              Ramley Technologies is a software engineering company founded and
              operated by engineers who have spent their careers building
              critical systems for financial institutions, public health
              programmes, and AI platforms across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              Our story
            </h2>
            <div className="flex flex-col gap-5 text-text-secondary leading-relaxed">
              <p>
                Ramley Technologies was founded out of a specific frustration:
                watching African enterprises repeatedly fail at software because
                the vendors they hired were either too large and bureaucratic, or
                too small and inexperienced to deliver the complexity the
                business actually needed.
              </p>
              <p>
                Our founders had spent years inside large organisations —
                building loan origination systems for commercial banks, designing
                data infrastructure for national health programmes, and shipping
                AI-powered platforms for consumer applications. They had seen
                from the inside what good engineering looked like, and what it
                cost when it was absent.
              </p>
              <p>
                We started Ramley to be the company we wished existed when we
                were on the client side: a focused, senior team that could
                engage at the architecture level, deliver at pace, and hand over
                code that a client&apos;s internal team could actually own.
              </p>
              <p>
                Today, we work with clients across South Africa, the broader
                continent, and internationally — on projects ranging from
                greenfield enterprise platforms to critical system rescues.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <GlassCard glow="primary" hover={false}>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-primary mb-3">
                Our Mission
              </p>
              <h3 className="text-text-primary font-bold text-xl mb-3">
                Deliver world-class software with global standards
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                We exist to deliver software that works at the level global
                enterprises expect — tested, documented, observable, and
                maintainable — to organisations building the next chapter of
                African industry.
              </p>
            </GlassCard>

            <GlassCard glow="secondary" hover={false}>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-secondary mb-3">
                Our Vision
              </p>
              <h3 className="text-text-primary font-bold text-xl mb-3">
                Africa&apos;s software infrastructure, built right
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                The continent&apos;s financial systems, health infrastructure,
                and enterprise platforms are being rebuilt in real-time. We want
                Ramley-built software to be a meaningful part of that
                foundation.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-surface-raised border-y border-surface-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-text-primary">
              How we operate
            </h2>
            <p className="text-text-secondary mt-3 max-w-xl mx-auto">
              These are not posters on a wall. They are the principles that
              shape how we scope, build, and deliver.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <GlassCard key={v.title} as="article" className="flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">
                      {v.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team positioning */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            The team
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Ramley is not a staffing agency and we are not an offshore
            factory. We are a team of senior engineers who have worked on
            production systems in banking, health technology, and AI — and who
            now apply that experience selectively to client projects we believe
            in.
          </p>
          <p className="text-text-secondary leading-relaxed">
            We keep the team intentionally lean so that every project gets
            direct access to experienced engineers, not account managers and
            juniors. When you work with Ramley, the people you meet in the
            first conversation are the people who build your system.
          </p>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
