import { type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  href?: string;
}

const styles: Record<Variant, string> = {
  primary:
    "bg-white text-ser-purple hover:bg-gray-100 shadow-lg shadow-ser-purple-dark/20",
  secondary:
    "bg-ser-purple text-white hover:bg-ser-purple-dark",
  outline:
    "border-2 border-white text-white hover:bg-white/10",
};

export function Button({ variant = "primary", href, children, className, ...props }: ButtonProps) {
  const cls = `inline-flex items-center justify-center rounded-[28px] px-10 py-4 text-lg font-semibold transition-all duration-200 cursor-pointer ${styles[variant]} ${className ?? ""}`;

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
