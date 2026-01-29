import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  id?: string;
  background?: "white" | "light" | "dark";
}

export function SectionWrapper({
  children,
  className,
  id,
  background = "white",
  ...props
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        background === "white" && "bg-white",
        background === "light" && "bg-neutral-50",
        background === "dark" && "bg-emerald-950 text-white",
        className,
      )}
      {...props}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  );
}
