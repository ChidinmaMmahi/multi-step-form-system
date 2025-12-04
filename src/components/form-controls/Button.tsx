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
        "text-white w-full p-2.5 rounded-lg",
        variant === "primary" && "bg-primary",
        variant === "secondary" && "",
        variant === "disabled" && "opacity-30 bg-primary cursor-not-allowed",
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
