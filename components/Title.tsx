import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type titleProps = {
  className?: string;
  children: ReactNode;
};

export default function Title({ className, children }: titleProps) {
  return (
    <h1
      className={cn(
        " text-3xl font-[600] mb-3 md:text-4xl lg:text-5xl lg:leading-[60px] ",
        className
      )}
    >
      {children}
    </h1>
  );
}
