import type { Metadata } from "next";
import { Code2, Globe, Brain, Cloud, CreditCard } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software development, web applications, AI solutions, cloud architecture, and fintech systems from Ramley Technologies.",
};

const services = [
  {
    id: "custom-software",
    icon: Code2,
    title: "Custom Software Development",
    tagline: "Systems built for the complexity of your business, not the simplicity of templates.",
    description:
      "Most businesses do not fit neatly into off-the-shelf software. We design and build custom systems that map to how your organisation actually works — from core business logic to reporting and integrations.",
    whoFor: [
      "Enterprises outgrowing ERP and generic SaaS platforms",
      "Financial institutions needing proprietary workflow systems",
      "Organisations with complex integration requirements",
    ],
    problems: [
      "Legacy systems slowing down operations",
      "Manual processes that should be automated",
      "Disconnected systems that don't talk to each other",
      "Off-the-shelf tools that don't fit your workflows",
    ],
    tech: ["Java", "Spring Boot", "Node.js", "TypeScript", "REST APIs", "GraphQL", "PostgreSQL", "MongoDB"],
    accent: "primary" as const,
  },
  {
    id: "web-mobile",
    icon: Globe,
    title: "Web & Mobile Applications",
    tagline: "Performance-first interfaces that users actually want to use.",
    description:
      "We build web applications that are fast, accessible, and maintainable. Whether it's a complex enterprise portal or a customer-facing product, we build with the same standard: production-ready from day one.",
    whoFor: [
      "Product teams building customer-facing platforms",
      "Enterprises modernising internal tooling",
      "Startups building their core product",
    ],
    problems: [
      "Slow or inaccessible web applications losing users",
      "Outdated Angular/React codebases that need modernisation",
      "Mobile applications that don't perform on African networks",
      "Disconnected web and mobile experiences",
    ],
    tech: ["React", "Next.js", "Angular", "TypeScript", "React Native", "Tailwind CSS", "Zustand", "React Query"],
    accent: "secondary" as const,
  },
  {
    id: "ai-automation",
    icon: Brain,
    title: "AI & Automation",
    tagline: "Practical AI that solves real operational problems.",
    description:
      "We build AI systems that are grounded in engineering discipline — not research projects. Image recognition, document processing, workflow automation, and intelligent data pipelines, built to run reliably in production.",
    whoFor: [
      "Organisations with high-volume manual processing",
      "Companies with large image or document datasets",
      "Businesses automating repetitive operational workflows",
    ],
    problems: [
      "Manual processes that don't scale with volume",
      "Unstructured data that's impossible to search or analyse",
      "Expensive human effort on tasks that pattern-matching can handle",
      "AI pilots that never made it to production",
    ],
    tech: ["Python", "TensorFlow", "OpenCV", "PyTorch", "FastAPI", "Celery", "Redis", "AWS SageMaker"],
    accent: "primary" as const,
  },
  {
    id: "cloud-devops",
    icon: Cloud,
    title: "Cloud & DevOps",
    tagline: "Infrastructure that scales when you need it and costs what it should.",
    description:
      "We design cloud architectures that are secure, observable, and cost-effective. We set up the pipelines, monitoring, and operational practices that let your team ship with confidence.",
    whoFor: [
      "Teams moving from on-premise to cloud",
      "Startups needing a production-grade infrastructure foundation",
      "Engineering teams improving deployment reliability",
    ],
    problems: [
      "Manual deployments causing downtime and errors",
      "No visibility into system health in production",
      "Infrastructure that can't handle traffic spikes",
      "Cloud costs that are uncontrolled and growing",
    ],
    tech: ["AWS", "DigitalOcean", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus", "Grafana"],
    accent: "secondary" as const,
  },
  {
    id: "fintech",
    icon: CreditCard,
    title: "Fintech & Payment Systems",
    tagline: "Financial infrastructure built with the rigour the sector demands.",
    description:
      "We have built loan origination systems, teller automation platforms, and payment integrations for banks and fintech companies. We understand the compliance, audit, and security requirements that financial systems carry from day one.",
    whoFor: [
      "Banks and credit institutions modernising core systems",
      "Fintech startups building payment or lending products",
      "Organisations needing payment gateway integrations",
    ],
    problems: [
      "Legacy banking systems holding back digital transformation",
      "Manual loan processing slowing turnaround times",
      "Payment integrations that are brittle or incomplete",
      "Compliance gaps in financial workflows",
    ],
    tech: ["Java Spring Boot", "Node.js", "Payment APIs", "Banking APIs", "PostgreSQL", "Kafka", "Redis", "OAuth 2.0"],
    accent: "primary" as const,
  },
];

const accentIconMap = {
  primary: "bg-brand-primary/10 text-brand-primary",
  secondary: "bg-brand-secondary/10 text-brand-secondary",
};

const accentBadgeMap: Record<string, "primary" | "secondary"> = {
  primary: "primary",
  secondary: "secondary",
};

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,212,255,0.07) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-brand-primary text-sm font-semibold uppercase tracking-widest mb-4">
            What We Build
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6">
            Services
          </h1>
          <p className="text-text-secondary text-xl max-w-2xl mx-auto leading-relaxed">
            We don&apos;t do everything. We do a focused set of things
            exceptionally well, applied to problems that require real
            engineering depth.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="pb-12 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-20">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isEven = i % 2 === 0;
            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
              >
                {/* Content */}
                <div className={isEven ? "order-1" : "order-1 lg:order-2"}>
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${accentIconMap[service.accent]}`}
                  >
                    <Icon size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-text-primary mb-3">
                    {service.title}
                  </h2>
                  <p className="text-brand-primary font-medium mb-5">
                    {service.tagline}
                  </p>
                  <p className="text-text-secondary leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Who it's for */}
                  <div className="mb-6">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">
                      Who this is for
                    </h3>
                    <ul className="flex flex-col gap-2" role="list">
                      {service.whoFor.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <span className="mt-2 w-1 h-1 rounded-full bg-brand-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((t) => (
                      <Badge key={t} variant={accentBadgeMap[service.accent]}>
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Problems card */}
                <div className={isEven ? "order-2" : "order-2 lg:order-1"}>
                  <GlassCard
                    glow={service.accent === "primary" ? "primary" : "secondary"}
                    hover={false}
                    className="h-full"
                  >
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-5">
                      Problems we solve
                    </h3>
                    <ul className="flex flex-col gap-4" role="list">
                      {service.problems.map((problem) => (
                        <li
                          key={problem}
                          className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed"
                        >
                          <span
                            className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                              service.accent === "primary"
                                ? "bg-brand-primary"
                                : "bg-brand-secondary"
                            }`}
                          />
                          {problem}
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
