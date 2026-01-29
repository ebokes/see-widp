import { cn } from "@/lib/utils";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  level?: "h1" | "h2" | "h3" | "h4";
  intent?: "title" | "subtitle" | "section-heading";
}

export function Heading({
  children,
  className,
  level = "h2",
  intent = "section-heading",
  ...props
}: HeadingProps) {
  const Component = level;

  return (
    <Component
      className={cn(
        "font-heading font-bold",
        intent === "title" &&
          "text-4xl md:text-5xl lg:text-6xl text-emerald-950",
        intent === "section-heading" &&
          "text-3xl md:text-4xl text-emerald-950 mb-4",
        intent === "subtitle" &&
          "text-xl md:text-2xl text-emerald-800 font-medium",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
