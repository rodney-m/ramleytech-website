import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ramley Technologies — Software Engineering for the Future",
    template: "%s | Ramley Technologies",
  },
  description:
    "Ramley Technologies builds enterprise-grade software systems for banks, fintech platforms, health systems, and AI-driven products. Based in South Africa, serving clients globally.",
  keywords: [
    "software development",
    "South Africa",
    "enterprise software",
    "fintech",
    "React",
    "Next.js",
    "Spring Boot",
    "AWS",
    "AI solutions",
    "web applications",
  ],
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://ramleytech.com",
    siteName: "Ramley Technologies",
    title: "Ramley Technologies — Software Engineering for the Future",
    description:
      "Enterprise-grade software systems for banks, fintech, health, and AI. Built to scale.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramley Technologies",
    description: "Enterprise-grade software systems built to scale.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased bg-surface-base text-text-primary">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
