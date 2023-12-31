import { cn } from "@/lib/utils";
import React from "react";

type ParagraphProps = {
  description: string;
  className?: string;
};

export default function Paragraph({ description, className }: ParagraphProps) {
  return (
    <p
      className={cn("text-sm md:text-lg lg:text-xl text-secondary", className)}
    >
      {description}
    </p>
  );
}
