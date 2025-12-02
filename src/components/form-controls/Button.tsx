import type { ReactNode } from "react";

type ButtonProps = {
  text: string;
  variant?: "primary" | "secondary" | "disabled";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  extraClassName?: string;
};

const Button = ({
  text,
  variant,
  startIcon,
  endIcon,
  extraClassName,
}: ButtonProps) => {
  return (
    <button
      className={`${
        variant === "primary"
          ? ""
          : variant === "secondary"
          ? ""
          : variant === "disabled" && ""
      }${extraClassName}`}
    >
      {startIcon}
      {text}
      {endIcon}
    </button>
  );
};

export default Button;
