import * as React from "react";
import { cn } from "@/lib/utils";
// Simple Button component without cva constraint for speed, but clean.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
          // Variants
          variant === "primary" &&
            "bg-emerald-950 text-white hover:bg-emerald-900",
          variant === "secondary" &&
            "bg-emerald-100 text-emerald-900 hover:bg-emerald-200",
          variant === "gold" &&
            "bg-gold-500 text-emerald-950 hover:bg-gold-600",
          variant === "outline" &&
            "border border-emerald-950 text-emerald-950 hover:bg-emerald-50",
          variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
          // Sizes
          size === "default" && "h-10 py-2 px-4",
          size === "sm" && "h-9 px-3 rounded-md",
          size === "lg" && "h-12 px-8 rounded-md text-lg",
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
