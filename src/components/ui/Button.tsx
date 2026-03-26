import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
  "aria-label"?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-primary text-surface-base font-semibold hover:opacity-90 hover:scale-[1.02] active:scale-100",
  secondary:
    "bg-brand-secondary text-white font-semibold hover:opacity-90 hover:scale-[1.02] active:scale-100",
  ghost:
    "text-text-secondary hover:text-text-primary hover:bg-surface-overlay",
  outline:
    "border border-surface-border text-text-primary hover:border-brand-primary/50 hover:bg-brand-primary/5",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-2.5 text-sm rounded-lg",
  lg: "px-8 py-3.5 text-base rounded-xl",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  external = false,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 font-medium transition-all duration-150 ${variants[variant]} ${sizes[size]} ${disabled ? "opacity-40 cursor-not-allowed pointer-events-none" : ""} ${className}`;

  if (href) {
    const externalProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
    return (
      <Link href={href} className={baseClasses} aria-label={ariaLabel} {...externalProps}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
