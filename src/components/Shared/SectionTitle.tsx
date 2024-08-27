import { cn } from "@/helpers/cn";
import { ReactNode } from "react";

const SectionTitle = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "text-3xl md:text-4xl font-medium underline underline-offset-8 text-iro-green",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default SectionTitle;
