import Link from "next/link";
import { Mail, MapPin, Globe, Code2, X } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Custom Software", href: "/services#custom-software" },
    { label: "Web & Mobile", href: "/services#web-mobile" },
    { label: "AI & Automation", href: "/services#ai-automation" },
    { label: "Cloud & DevOps", href: "/services#cloud-devops" },
    { label: "Fintech Systems", href: "/services#fintech" },
  ],
};

const socialLinks = [
  { icon: Globe, label: "LinkedIn", href: "#" },
  { icon: Code2, label: "GitHub", href: "#" },
  { icon: X, label: "X / Twitter", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-surface-border bg-surface-raised mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center text-surface-base font-bold text-sm">
                R
              </div>
              <span className="font-semibold text-text-primary tracking-tight">
                Ramley<span className="text-brand-primary">Tech</span>
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs mb-6">
              Building enterprise-grade software systems for Africa and beyond.
              We write code that scales.
            </p>
            <div className="flex flex-col gap-3 text-sm text-text-secondary">
              <a
                href="mailto:info@ramleytech.com"
                className="flex items-center gap-2 hover:text-brand-primary transition-colors"
              >
                <Mail size={15} />
                info@ramleytech.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={15} />
                South Africa
              </span>
            </div>
            <div className="flex gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-text-muted hover:text-brand-primary hover:border-brand-primary/30 transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-text-primary font-semibold text-sm mb-4">
                {heading}
              </h3>
              <ul className="flex flex-col gap-2" role="list">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-text-secondary text-sm hover:text-brand-primary transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-6 border-t border-surface-border flex flex-col sm:flex-row justify-between items-center gap-4 text-text-muted text-xs">
          <p>
            &copy; {new Date().getFullYear()} Ramley Technologies (Pty) Ltd.
            All rights reserved.
          </p>
          <p>Registered in South Africa</p>
        </div>
      </div>
    </footer>
  );
}
