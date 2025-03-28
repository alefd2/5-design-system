import { ComponentProps, ElementType } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { theme } from "../styles";

export interface HeadingProps extends ComponentProps<"h2"> {
  as?: ElementType;
  size?: keyof typeof sizeStyles;
}

const sizeStyles = {
  sm: css`
    font-size: ${theme.fontSizes.xl};
  `,
  md: css`
    font-size: ${theme.fontSizes["2xl"]};
  `,
  lg: css`
    font-size: ${theme.fontSizes["4xl"]};
  `,
  "2xl": css`
    font-size: ${theme.fontSizes["5xl"]};
  `,
  "3xl": css`
    font-size: ${theme.fontSizes["6xl"]};
  `,
  "4xl": css`
    font-size: ${theme.fontSizes["7xl"]};
  `,
  "5xl": css`
    font-size: ${theme.fontSizes["8xl"]};
  `,
  "6xl": css`
    font-size: ${theme.fontSizes["9xl"]};
  `,
};

export const Heading = styled.h2<HeadingProps>`
  font-family: ${theme.fonts.default};
  line-height: ${theme.lineHeights.shorter};
  margin: 0;
  color: ${theme.colors.gray100};

  ${({ size = "md" }) => sizeStyles[size]}
`;

Heading.displayName = "Heading";
