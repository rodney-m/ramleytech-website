"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const round = (n: number) => Math.round(n * 100) / 100;

const RING_SEGMENTS = Array.from({ length: 28 }, (_, i) => {
  const angle = (i / 28) * Math.PI * 2;
  const r = 130;
  const x = round(200 + Math.cos(angle) * r);
  const y = round(200 + Math.sin(angle) * r);
  const len = i % 3 === 0 ? 28 : 18;
  const thick = i % 4 === 0 ? 7 : 4;
  return {
    x: round(x - thick / 2),
    y: round(y - len / 2),
    thick,
    len,
    fill: i % 5 === 0 ? "url(#ringGrad2)" : "url(#ringGrad)",
    opacity: round(0.55 + (i % 5) * 0.08),
    transform: `rotate(${round((angle * 180) / Math.PI + 90)} ${x} ${y})`,
    glow: i % 4 === 0,
  };
});

const ORBIT_DOTS = [0, 1, 2].map((i) => {
  const angle = (i / 3) * Math.PI * 2;
  const r = 78;
  return {
    cx: round(200 + Math.cos(angle) * r),
    cy: round(200 + Math.sin(angle) * r),
    r: i === 0 ? 5 : 3.5,
    fill: i === 0 ? "#93c5fd" : "#3b82f6",
  };
});

function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 40, damping: 20 });
  const springY = useSpring(my, { stiffness: 40, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-14, 14]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mx.set((e.clientX - rect.left) / rect.width - 0.5);
      my.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    const onLeave = () => {
      mx.set(0);
      my.set(0);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [mx, my]);

  return (
    <div
      ref={ref}
      className="relative w-full aspect-square max-w-[520px] mx-auto lg:max-w-none"
      style={{ perspective: 1000 }}
    >
      {/* Soft glow */}
      <div
        className="absolute inset-[12%] rounded-full blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.45) 0%, rgba(37,99,235,0.15) 45%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <motion.div
        className="relative w-full h-full"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        {/* Outer ring */}
        <motion.div
          className="absolute inset-[8%] rounded-full border border-white/10"
          style={{ transform: "translateZ(20px)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          aria-hidden="true"
        />

        {/* Segmented torus-like ring */}
        <motion.svg
          viewBox="0 0 400 400"
          className="absolute inset-0 w-full h-full"
          style={{ transform: "translateZ(40px)" }}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="45%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
            <linearGradient id="ringGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.4" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <motion.g
            animate={{ rotate: -360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "200px 200px" }}
          >
            {RING_SEGMENTS.map((seg, i) => (
              <rect
                key={i}
                x={seg.x}
                y={seg.y}
                width={seg.thick}
                height={seg.len}
                rx={2}
                fill={seg.fill}
                opacity={seg.opacity}
                transform={seg.transform}
                filter={seg.glow ? "url(#glow)" : undefined}
              />
            ))}
          </motion.g>

          {/* Inner orbit dots */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "200px 200px" }}
          >
            {ORBIT_DOTS.map((dot, i) => (
              <circle
                key={i}
                cx={dot.cx}
                cy={dot.cy}
                r={dot.r}
                fill={dot.fill}
                opacity={0.85}
              />
            ))}
          </motion.g>

          {/* Core */}
          <circle
            cx="200"
            cy="200"
            r="36"
            fill="url(#ringGrad)"
            opacity="0.25"
            filter="url(#glow)"
          />
          <circle
            cx="200"
            cy="200"
            r="14"
            fill="#fff"
            opacity="0.9"
          />
        </motion.svg>

        {/* Floating accent shards */}
        <motion.div
          className="absolute top-[18%] right-[12%] w-16 h-16 rounded-2xl border border-white/15 bg-gradient-to-br from-brand-primary/40 to-transparent backdrop-blur-sm"
          style={{ transform: "translateZ(80px)" }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute bottom-[22%] left-[10%] w-10 h-10 rounded-full bg-brand-primary/30 border border-white/10"
          style={{ transform: "translateZ(60px)" }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          aria-hidden="true"
        />
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden grain pt-24 pb-16">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 75% 45%, rgba(59,130,246,0.14) 0%, transparent 55%), radial-gradient(ellipse 40% 40% at 15% 80%, rgba(37,99,235,0.08) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-text-primary leading-[1.05] tracking-tight mb-6"
            >
              Software that holds
              <br />
              <span className="gradient-text">when it matters.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="text-text-secondary text-base sm:text-lg leading-relaxed mb-10 max-w-md"
            >
              Systems for banks, health platforms, and products that can&apos;t
              afford to fail.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 pl-7 pr-2 py-2 rounded-full bg-brand-primary text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-[#2563eb]"
              >
                Let&apos;s connect
                <span className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight size={16} />
                </span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="hidden sm:block"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
