import { ComponentProps, ElementType } from "react";
import clsx from "clsx";
import { baseButton, sizeStyles, variantStyles } from "./button.css";

export interface ButtonProps extends ComponentProps<"button"> {
  as?: ElementType;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md";
}

export const Button = ({
  as: Component = "button",
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) => {
  return (
    <Component
      className={clsx(
        baseButton,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    />
  );
};

Button.displayName = "Button";
