import { ComponentProps, ElementType } from "react";
import clsx from "clsx";
import { boxStyle } from "./box.css";

export interface BoxProps extends ComponentProps<"div"> {
  as?: ElementType;
  className?: string;
}

export const Box = ({
  as: Component = "div",
  className,
  ...props
}: BoxProps) => {
  return <Component className={clsx(boxStyle, className)} {...props} />;
};

Box.displayName = "Box";
