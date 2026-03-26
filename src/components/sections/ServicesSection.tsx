import Link from "next/link";
import {
  Code2,
  Globe,
  Brain,
  Cloud,
  CreditCard,
  ArrowRight,
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "End-to-end development of complex, high-throughput systems. We architect, build, and maintain software that handles real business complexity — not toy CRUD apps.",
    tags: ["Java", "Spring Boot", "Node.js", "TypeScript"],
    href: "/services#custom-software",
  },
  {
    icon: Globe,
    title: "Web & Mobile Applications",
    description:
      "Modern web applications built with React, Next.js, and Angular. Performant, accessible, and designed to be maintained by real teams in real organisations.",
    tags: ["React", "Next.js", "Angular", "React Native"],
    href: "/services#web-mobile",
  },
  {
    icon: Brain,
    title: "AI & Automation",
    description:
      "Practical AI solutions grounded in engineering discipline. Image recognition, workflow automation, and intelligent data pipelines — built for production, not pilots.",
    tags: ["Python", "TensorFlow", "OpenCV", "Automation"],
    href: "/services#ai-automation",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Infrastructure that scales with your product. We design cloud architectures, build CI/CD pipelines, and manage deployments across AWS and DigitalOcean.",
    tags: ["AWS", "DigitalOcean", "Docker", "CI/CD"],
    href: "/services#cloud-devops",
  },
  {
    icon: CreditCard,
    title: "Fintech & Payment Systems",
    description:
      "We have built loan origination systems, teller automation platforms, and payment integrations for financial institutions. Compliance-aware from day one.",
    tags: ["Fintech", "Banking APIs", "Payment Gateways", "Compliance"],
    href: "/services#fintech",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
      {/* Section header */}
      <div className="mb-16">
        <p className="text-brand-primary text-sm font-semibold uppercase tracking-widest mb-3">
          What We Build
        </p>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary max-w-xl leading-tight">
            Services built around
            <br />
            <span className="gradient-text">real engineering problems</span>
          </h2>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-brand-primary text-sm font-medium hover:gap-3 transition-all"
          >
            All Services
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Service cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <GlassCard
              key={service.title}
              as="article"
              className={`flex flex-col gap-4 group ${
                i === 0 ? "lg:col-span-1" : ""
              }`}
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary transition-colors duration-200 group-hover:bg-brand-primary/20">
                <Icon size={20} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-semibold text-text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-surface-border">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-text-muted px-2 py-1 rounded-md bg-surface-overlay"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          );
        })}

        {/* Final CTA card */}
        <GlassCard className="flex flex-col items-center justify-center text-center gap-4 min-h-48 border-dashed">
          <p className="text-text-secondary text-sm font-medium">
            Have something specific in mind?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-primary text-surface-base text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Talk to us
            <ArrowRight size={15} />
          </Link>
        </GlassCard>
      </div>
    </section>
  );
}
