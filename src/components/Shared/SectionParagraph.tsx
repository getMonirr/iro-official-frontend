import { cn } from "@/helpers/cn";
import { ReactNode } from "react";

const SectionParagraph = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn("text-base md:text-lg mt-5 font-ubuntu mb-10", className)}>
      {children}
    </p>
  );
};

export default SectionParagraph;
