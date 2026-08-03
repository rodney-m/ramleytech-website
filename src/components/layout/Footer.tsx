import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-surface-border mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/ramley_logo_on_dark_bg.png"
                alt="Ramley Technologies"
                width={140}
                height={32}
                className="h-7 w-auto"
              />
            </Link>
            <p className="text-text-secondary text-sm max-w-xs leading-relaxed">
              Software for organisations that can&apos;t afford to fail.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
            <div>
              <p className="text-text-muted text-xs uppercase tracking-widest mb-4">
                Navigate
              </p>
              <ul className="flex flex-col gap-2" role="list">
                {footerLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-text-secondary text-sm hover:text-text-primary transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-text-muted text-xs uppercase tracking-widest mb-4">
                Contact
              </p>
              <a
                href="mailto:projects@ramleytech.com"
                className="text-text-secondary text-sm hover:text-brand-primary transition-colors"
              >
                projects@ramleytech.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-surface-border text-text-muted text-xs">
          <p>
            &copy; {new Date().getFullYear()} Ramley Technologies (Pty) Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
