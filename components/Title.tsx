import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type titleProps = {
  className?: string;
  children: ReactNode;
};

export default function Title({ className, children }: titleProps) {
  return (
    <h1 className={cn("text-2xl font-[600] mb-3", className)}>{children}</h1>
  );
}
