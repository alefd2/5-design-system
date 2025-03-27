import { ComponentProps, ElementType } from "react";
import { css } from "@emotion/react";
import { theme } from "../styles"; // Importando os tokens do tema
import styled from "@emotion/styled";

export const Box = styled.div<BoxProps>`
  font-family: sans-serif;
  padding: ${theme.space[6]};
  border-radius: ${theme.radii.md};
  background-color: ${theme.colors.gray800};
  color: ${theme.colors.white};
  border: 1px solid ${theme.colors.gray600};
`;

// Tipando corretamente o BoxProps
export interface BoxProps extends ComponentProps<"div"> {
  as?: ElementType;
}

Box.displayName = "Box";
