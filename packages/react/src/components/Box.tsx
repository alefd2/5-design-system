import { ComponentProps, ElementType } from "react";
import { css } from "@emotion/react";
import { theme } from "../styles"; // Importando os tokens do tema

// Definindo o componente Box com tipagem explícita
export const Box = ({
  as: Tag = "div", // Permite substituir o elemento 'div' por outro
  ...props
}: BoxProps) => {
  return (
    <Tag
      {...props}
      css={css`
        padding: ${theme.space[6]}; /* Usando o espaço do tema */
        border-radius: ${theme.radii.md}; /* Usando o raio de borda do tema */
        background-color: ${theme.colors
          .gray800}; /* Usando a cor do fundo do tema */
        border: 1px solid ${theme.colors.gray600}; /* Usando a cor da borda do tema */
      `}
    />
  );
};

// Tipando corretamente o BoxProps
export interface BoxProps extends ComponentProps<"div"> {
  as?: ElementType; // Permite que o Box seja renderizado como outro tipo de elemento (ex: 'section', 'article', etc.)
}

Box.displayName = "Box";
