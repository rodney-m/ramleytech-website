import { Code2, Globe, Cloud, Database, Cpu, GitBranch } from "lucide-react";

const techStack = [
  {
    category: "Frontend",
    icon: Globe,
    items: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS", "React Native"],
  },
  {
    category: "Backend",
    icon: Code2,
    items: ["Java Spring Boot", "Node.js", "REST APIs", "GraphQL", "Microservices", "Python"],
  },
  {
    category: "Cloud & Infra",
    icon: Cloud,
    items: ["AWS", "DigitalOcean", "Docker", "Kubernetes", "Terraform", "Nginx"],
  },
  {
    category: "Data",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Kafka"],
  },
  {
    category: "AI & ML",
    icon: Cpu,
    items: ["TensorFlow", "PyTorch", "OpenCV", "Facial Recognition", "NLP Pipelines", "AWS SageMaker"],
  },
  {
    category: "DevOps & Quality",
    icon: GitBranch,
    items: ["GitHub Actions", "CI/CD Pipelines", "Automated Testing", "Monitoring", "RabbitMQ", "Prometheus"],
  },
];

export default function Capabilities() {
  return (
    <section className="py-24 bg-surface-raised border-y border-surface-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Technical Depth
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary">
            Our technology stack
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto text-base">
            Battle-tested tools used by the world&apos;s best engineering teams.
            No trend-chasing — just deliberate technology choices made by
            engineers who have shipped production systems with them.
          </p>
        </div>

        {/* Stack grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {techStack.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.category}
                className="glass rounded-2xl p-6 hover:border-brand-primary/20 transition-colors group"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary transition-colors group-hover:bg-brand-primary/20">
                    <Icon size={16} />
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary">
                    {group.category}
                  </h3>
                </div>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg bg-surface-overlay text-text-secondary text-xs font-medium border border-surface-border"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Domain experience row */}
        <div className="mt-14 pt-10 border-t border-surface-border">
          <p className="text-center text-text-muted text-xs uppercase tracking-widest mb-8">
            Domain experience
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Commercial Banking",
              "Loan Origination",
              "Payment Gateways",
              "Health Information Systems",
              "DHIS2",
              "Event Platforms",
              "National Data Platforms",
              "Fintech",
              "Identity & Access",
              "Multi-tenant SaaS",
            ].map((domain) => (
              <span
                key={domain}
                className="px-4 py-2 rounded-full glass text-text-secondary text-sm border border-surface-border hover:border-brand-primary/25 hover:text-text-primary transition-colors cursor-default"
              >
                {domain}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
