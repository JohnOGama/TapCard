import { cn } from "@/lib/utils";
import React from "react";
import { forwardRef } from "react";

type InputElement = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  className?: string;
};
const Input = forwardRef<HTMLInputElement, InputElement>(
  ({ className, ...rest }, ref) => (
    <input
      ref={ref}
      className={cn(
        "bg-gray px-5 w-[350px] py-2 rounded-sm placeholder:text-primary/30 outline-none text-primary",
        className
      )}
      {...rest}
    />
  )
);

export default Input;
