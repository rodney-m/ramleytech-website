import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ramley Technologies is a lean software company that ships systems organisations can depend on.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Ramley Technologies",
    description:
      "A lean software company that ships systems organisations can depend on.",
    url: `${SITE_URL}/about`,
  },
  twitter: {
    title: "About | Ramley Technologies",
    description:
      "A lean software company that ships systems organisations can depend on.",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 20% 40%, rgba(59,130,246,0.1) 0%, transparent 55%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-brand-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            About
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-text-primary leading-tight max-w-3xl mb-8">
            Engineers who ship what they promise.
          </h1>
          <p className="text-text-secondary text-xl leading-relaxed max-w-2xl">
            Ramley is a lean software company founded by people who have built
            critical systems for banks and national health programmes — and got
            tired of watching important work fail for lack of serious
            engineering.
          </p>
        </div>
      </section>

      <section className="py-8 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-surface-border py-16">
          <h2 className="lg:col-span-4 font-display text-2xl font-bold text-text-primary">
            Why we exist
          </h2>
          <div className="lg:col-span-7 flex flex-col gap-5 text-text-secondary leading-relaxed">
            <p>
              Too many organisations are stuck between vendors who are too large
              to care and teams who are too green to deliver complexity. We
              started Ramley to sit in the gap: senior, focused, and accountable
              for systems that still work years after launch.
            </p>
            <p>
              We keep the team intentionally small. The people you meet in the
              first conversation are the people who build your software.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-surface-border rounded-2xl overflow-hidden mb-8">
          {[
            {
              title: "Craft over volume",
              body: "We take on fewer projects so each one gets real attention.",
            },
            {
              title: "Built for ownership",
              body: "You leave with software your team can run — not a black box.",
            },
            {
              title: "Direct access",
              body: "You work with the engineers building the system — not a relay of account layers.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-surface-base p-8 sm:p-10">
              <h3 className="font-display text-lg font-semibold text-text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
