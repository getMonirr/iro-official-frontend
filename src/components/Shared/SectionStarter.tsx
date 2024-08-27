import { cn } from "@/helpers/cn";
import { ReactNode } from "react";

const SectionStarter = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: String;
}) => {
  return <div className={cn("py-16 md:py-32", className)}>{children}</div>;
};

export default SectionStarter;
