interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "neutral";
}

const variants = {
  primary: "bg-brand-primary/10 text-brand-primary border border-brand-primary/20",
  secondary: "bg-brand-secondary/10 text-brand-secondary border border-brand-secondary/20",
  accent: "bg-brand-accent/10 text-brand-accent border border-brand-accent/20",
  neutral: "bg-surface-overlay text-text-secondary border border-surface-border",
};

export default function Badge({ children, variant = "neutral" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
