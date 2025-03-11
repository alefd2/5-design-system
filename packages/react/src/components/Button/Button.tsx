import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ComponentProps, ElementType } from "react";
import { applyTheme } from "../../styles";

interface ButtonProps extends ComponentProps<"button"> {
  as?: ElementType;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md";
}

const variantStyles = {
  primary: css`
    ${applyTheme("color", "white")}
    ${applyTheme("backgroundColor", "ignite500")}

    &:not(:disabled):hover {
      ${applyTheme("backgroundColor", "ignite300")}
    }

    &:disabled {
      ${applyTheme("backgroundColor", "gray200")}
    }
  `,
  secondary: css`
    ${applyTheme("color", "ignite300")}
    ${applyTheme("borderColor", "ignite500")}
    border-width: 2px;
    border-style: solid;

    &:not(:disabled):hover {
      ${applyTheme("backgroundColor", "ignite500")}
      ${applyTheme("color", "white")}
    }

    &:disabled {
      ${applyTheme("color", "gray200")}
      ${applyTheme("borderColor", "gray200")}
    }
  `,

  tertiary: css`
    ${applyTheme("color", "gray100")}

    &:not(:disabled):hover {
      ${applyTheme("color", "white")}
    }

    &:disabled {
      ${applyTheme("color", "gray600")}
    }
  `,
};

const sizeStyles = {
  sm: css`
    height: 38;
  `,
  md: css`
    height: 46;
  `,
};

const StyledButton = styled.button<ButtonProps>`
  all: unset;
  ${applyTheme("borderRadius", "sm")}
  ${applyTheme("fontSize", "sm")}
  ${applyTheme("fontWeight", "medium")}
  text-align: center;
  min-width: 120px;
  box-sizing: border-box;
  ${applyTheme("padding", 4)}
  display: flex;
  align-items: center;
  justify-content: center;
  ${applyTheme("gap", 2)}
  cursor: pointer;

  svg {
    ${applyTheme("width", 4)}
    ${applyTheme("height", 4)}
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${applyTheme("color", "gray100")};
  }

  ${(props) => variantStyles[props.variant || "primary"]}
  ${(props) => sizeStyles[props.size || "md"]}
`;

export const Button = ({ as: Component = "button", ...props }: ButtonProps) => {
  return <StyledButton as={Component} {...props} />;
};

Button.displayName = "Button";
