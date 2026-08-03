"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="relative py-16 sm:py-24 px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto overflow-hidden rounded-[2rem] bg-surface-raised border border-surface-border">
        <motion.div
          style={{ y }}
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 65%)",
            }}
          />
        </motion.div>

        <div className="relative z-10 px-8 py-20 sm:py-28 text-center">
          <p className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6">
            Ready when you are.
          </p>
          <p className="text-text-secondary text-base sm:text-lg max-w-md mx-auto mb-10">
            Tell us what you&apos;re building. We&apos;ll tell you honestly if
            we&apos;re the right team.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-brand-primary text-white font-semibold text-base transition-all duration-300 hover:bg-[#2563eb]"
          >
            Start a project
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
