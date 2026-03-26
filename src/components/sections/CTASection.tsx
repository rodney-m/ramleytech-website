import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
      <div
        className="relative overflow-hidden rounded-3xl glass border border-surface-border text-center px-8 py-20"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,212,255,0.07) 0%, transparent 70%)",
        }}
      >
        {/* Background decoration */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 40% 40% at 80% 20%, rgba(108,92,231,0.08) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-brand-primary text-sm font-semibold uppercase tracking-widest mb-4">
            Ready to Build?
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-6">
            Let&apos;s build something
            <br />
            <span className="gradient-text">powerful together</span>
          </h2>
          <p className="text-text-secondary text-base leading-relaxed mb-10">
            Whether you&apos;re starting from scratch, rescuing a failing
            system, or scaling something that already works — we&apos;re the
            right team for the job.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-primary text-surface-base font-semibold text-base hover:opacity-90 hover:scale-[1.02] transition-all duration-200 active:scale-100 glow-primary"
            >
              Start Your Project
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <a
              href="mailto:info@ramleytech.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass border border-surface-border text-text-primary font-semibold text-base hover:border-brand-primary/30 transition-all"
            >
              <Mail size={17} />
              info@ramleytech.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
