import type { ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  text: string;
  variant?: "primary" | "secondary";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  disabled?: boolean;
  extraClassName?: string;
  onClick?: () => void;
};

export const Button = ({
  text,
  variant = "primary",
  startIcon,
  endIcon,
  disabled,
  extraClassName,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "w-full p-2.5 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed",
        variant === "primary" &&
          "bg-primary dark:bg-d-primary text-base cursor-pointer",
        variant === "secondary" &&
          "border border-base-100 text-primary cursor-pointer",
        extraClassName
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {startIcon}
      {text}
      {endIcon}
    </button>
  );
};
