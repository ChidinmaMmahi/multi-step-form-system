import type { ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  text: string;
  variant?: "primary" | "secondary" | "disabled";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  extraClassName?: string;
  onClick?: () => void;
};

export const Button = ({
  text,
  variant = "primary",
  startIcon,
  endIcon,
  extraClassName,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "w-full p-2.5 rounded-lg",
        variant === "primary" && "bg-primary text-base cursor-pointer",
        variant === "secondary" &&
          "border border-base-100 text-primary cursor-pointer",
        variant === "disabled" &&
          "opacity-30 text-base bg-primary cursor-not-allowed",
        extraClassName
      )}
      onClick={onClick}
    >
      {startIcon}
      {text}
      {endIcon}
    </button>
  );
};
