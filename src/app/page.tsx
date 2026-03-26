import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import Capabilities from "@/components/sections/Capabilities";
import CaseStudies from "@/components/sections/CaseStudies";
import WhyRamley from "@/components/sections/WhyRamley";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Ramley Technologies — Software Engineering for the Future",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <Capabilities />
      <CaseStudies />
      <WhyRamley />
      <CTASection />
    </>
  );
}
