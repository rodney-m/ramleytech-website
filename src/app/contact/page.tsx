import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Ramley Technologies. Tell us what you're building — we respond within one business day.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Ramley Technologies",
    description:
      "Start a project with Ramley Technologies. We respond within one business day.",
    url: `${SITE_URL}/contact`,
  },
  twitter: {
    title: "Contact | Ramley Technologies",
    description:
      "Start a project with Ramley Technologies. We respond within one business day.",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 80% 40%, rgba(59,130,246,0.1) 0%, transparent 55%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-brand-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Contact
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-text-primary leading-tight mb-5">
            Let&apos;s talk.
          </h1>
          <p className="text-text-secondary text-lg max-w-md leading-relaxed">
            Tell us what you&apos;re building. We respond within one business
            day — with a direct take, not a script.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <aside className="lg:col-span-4 lg:col-start-9 flex flex-col gap-10 pt-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">
                Email
              </p>
              <a
                href="mailto:projects@ramleytech.com"
                className="text-text-primary text-lg hover:text-brand-primary transition-colors"
              >
                projects@ramleytech.com
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                What happens next
              </p>
              <ol className="flex flex-col gap-4" role="list">
                {[
                  "We read your note and check fit.",
                  "If it makes sense, we book a short call.",
                  "You get a clear proposal — scope, timeline, investment.",
                ].map((step, i) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 text-sm text-text-secondary"
                  >
                    <span className="font-display text-brand-primary font-bold text-sm">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
