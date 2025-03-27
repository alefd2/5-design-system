import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ComponentProps, ElementType } from "react";

import { theme } from "../../styles";

export interface ButtonProps extends ComponentProps<"button"> {
  as?: ElementType;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md";
}

const variantStyles = {
  primary: css`
    color: ${theme.colors.white};
    font-family: sans-serif;
    background-color: ${theme.colors.ignite500};

    &:not(:disabled):hover {
      background-color: ${theme.colors.ignite300};
    }

    &:disabled {
      background-color: ${theme.colors.gray200};
    }
  `,
  secondary: css`
    color: ${theme.colors.ignite300};
    border-color: ${theme.colors.ignite500};
    border-width: 2px;
    border-style: solid;
    font-family: sans-serif;

    &:not(:disabled):hover {
      background-color: ${theme.colors.ignite500};
      color: ${theme.colors.white};
    }

    &:disabled {
      color: ${theme.colors.gray200};
      border-color: ${theme.colors.gray200};
    }
  `,

  tertiary: css`
    color: ${theme.colors.gray100};
    font-family: sans-serif;
    &:not(:disabled):hover {
      color: ${theme.colors.white};
    }

    &:disabled {
      color: ${theme.colors.gray600};
    }
  `,
};

const sizeStyles = {
  sm: css`
    height: ${theme.space[2]};
  `,
  md: css`
    height: ${theme.space[3]};
  `,
};

export const Button = styled.button<ButtonProps>`
  all: unset;
  border-radius: ${theme.radii.sm};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
  text-align: center;
  min-width: 120px;
  box-sizing: border-box;
  padding: ${theme.space[4]};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.space[2]};
  cursor: pointer;

  svg {
    width: ${theme.space[4]};
    height: ${theme.space[4]};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${theme.colors.gray100};
  }

  //default styles
  ${(props) => variantStyles[props.variant || "primary"]}
  ${(props) => sizeStyles[props.size || "md"]}
`;

Button.displayName = "Button";
