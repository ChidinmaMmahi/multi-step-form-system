import type { ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  text: string;
  variant?: "primary" | "secondary" | "link";
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
        "disabled:opacity-30 disabled:cursor-not-allowed",
        variant === "primary" &&
          "w-full p-2.5 rounded-lg bg-primary dark:bg-d-primary text-base cursor-pointer",
        variant === "secondary" &&
          "w-full p-2.5 rounded-lg border border-black dark:border-base-100 text-primary cursor-pointer",
        variant === "link" &&
          "underline text-primary-100 cursor-pointer text-xs",
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
