import { cn } from "@/lib/utils";
import React from "react";

const Loading = () => (
  <div>
    <h1>Loading...</h1>
  </div> 
);

type buttonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  rounded?: boolean;
};

export default function Button({
  className,
  children,
  loading,
  variant,
  rounded,
  ...rest
}: buttonProps) {
  return (
    <button
      className={cn(
        "px-4 py-1 mt-5    transition duration-300",
        rounded ? "rounded-sm" : "",
        variant === "primary"
          ? "bg-primary text-secondary hover:bg-primary/90"
          : "",
        variant === "secondary"
          ? "bg-secondary text-primary hover:bg-secondary/90"
          : "",
        variant === "outline"
          ? " text-primary border-2 border-primary hover:bg-primary/10"
          : "",
        variant === "ghost" ? " text-secondary " : "",
        className
      )}
      {...rest}
    >
      {loading ? (
        <Loading />
      ) : (
        <span
          className={cn(`transition`, {
            "opacity-0": loading,
            "opacity-100": !loading,
          })}
        >
          {children}
        </span>
      )}
    </button>
  );
}
