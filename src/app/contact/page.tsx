import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { Mail, MapPin, Clock, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Ramley Technologies. Tell us what you're building and we'll respond within one business day.",
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "info@ramleytech.com",
    href: "mailto:info@ramleytech.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "South Africa",
    href: null,
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 1 business day",
    href: null,
  },
  {
    icon: MessageSquare,
    label: "Preferred contact",
    value: "Email or project form",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="pt-16 pb-0">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(108,92,231,0.07) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-brand-primary text-sm font-semibold uppercase tracking-widest mb-4">
              Get In Touch
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6">
              Start your
              <br />
              <span className="gradient-text">next project</span>
            </h1>
            <p className="text-text-secondary text-xl leading-relaxed">
              Tell us what you&apos;re building. We&apos;ll respond within one
              business day with a direct, honest assessment of how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="glass rounded-2xl p-6">
              <h2 className="font-semibold text-text-primary mb-5">
                Contact details
              </h2>
              <ul className="flex flex-col gap-5" role="list">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-text-muted text-xs mb-0.5">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="text-text-primary text-sm font-medium hover:text-brand-primary transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-text-primary text-sm font-medium">
                          {value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass rounded-2xl p-6">
              <h2 className="font-semibold text-text-primary mb-3">
                What happens next
              </h2>
              <ol className="flex flex-col gap-4" role="list">
                {[
                  "We read your message and assess fit within 1 business day.",
                  "If there's a match, we schedule a short technical scoping call.",
                  "We send a clear proposal — scope, timeline, and investment.",
                  "We get to work.",
                ].map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-primary/10 text-brand-primary text-xs flex items-center justify-center font-bold mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="glass rounded-2xl p-6 border-brand-primary/20">
              <p className="text-text-muted text-xs uppercase tracking-widest mb-2">
                Not ready to commit?
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                That&apos;s fine. Email us at{" "}
                <a
                  href="mailto:info@ramleytech.com"
                  className="text-brand-primary hover:underline"
                >
                  info@ramleytech.com
                </a>{" "}
                with a brief description of what you&apos;re working on. No
                sales process, no pressure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
