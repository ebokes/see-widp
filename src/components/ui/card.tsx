import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  padding?: "none" | "sm" | "md" | "lg";
  hoverEffect?: boolean;
}

export function Card({
  children,
  className,
  padding = "md",
  hoverEffect = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-lg border border-neutral-200 shadow-sm overflow-hidden",
        padding === "sm" && "p-4",
        padding === "md" && "p-6",
        padding === "lg" && "p-8",
        hoverEffect &&
          "transition-shadow hover:shadow-md hover:border-emerald-200",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
