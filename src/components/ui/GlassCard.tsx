interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: "primary" | "secondary" | "none";
  hover?: boolean;
  as?: "div" | "article" | "section" | "li";
}

export default function GlassCard({
  children,
  className = "",
  glow = "none",
  hover = true,
  as: Tag = "div",
}: GlassCardProps) {
  const glowClass =
    glow === "primary"
      ? "glow-primary"
      : glow === "secondary"
      ? "glow-secondary"
      : "";

  return (
    <Tag
      className={`glass rounded-2xl p-6 ${glowClass} ${
        hover
          ? "transition-all duration-300 hover:border-brand-primary/20 hover:bg-white/[0.06]"
          : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
