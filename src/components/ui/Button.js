import Link from "next/link";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 " +
    "active:scale-[0.99]";

  const variants = {
    primary:
      "bg-slate-900 text-white shadow-sm hover:bg-slate-800 hover:shadow-md",
    secondary:
      "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50",
    subtle:
      "bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-200",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
  };

  const classes = twMerge(clsx(base, variants[variant], sizes[size], className));

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
