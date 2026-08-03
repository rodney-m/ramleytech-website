export const SITE_URL = "https://ramleytech.com";

export const SITE_NAME = "Ramley Technologies";

export const SITE_TAGLINE = "Software that holds when it matters.";

export const SITE_DESCRIPTION =
  "We design and ship software systems for banks, health platforms, and products that can't afford to fail.";

export const SITE_EMAIL = "projects@ramleytech.com";

export const ROUTES = [
  {
    path: "/",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    changeFrequency: "weekly" as const,
    priority: 1,
  },
  {
    path: "/services",
    title: "Services",
    description:
      "Custom systems, products, intelligence, infrastructure, and financial software — built for organisations that need software they can trust.",
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    path: "/about",
    title: "About",
    description:
      "Ramley Technologies is a lean software company that ships systems organisations can depend on.",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
  {
    path: "/contact",
    title: "Contact",
    description:
      "Start a project with Ramley Technologies. Tell us what you're building — we respond within one business day.",
    changeFrequency: "yearly" as const,
    priority: 0.8,
  },
] as const;
