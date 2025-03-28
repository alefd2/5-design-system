import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { theme } from "../../styles"

export const TextInputContainer = styled.div<{ size?: "sm" | "md" }>`
  background-color: ${theme.colors.gray900};
  border-radius: ${theme.radii.sm};
  box-sizing: border-box;
  border: 2px solid ${theme.colors.gray900};
  display: flex;
  align-items: center;

  ${({ size }) =>
    size === "sm"
      ? css`
          padding: ${theme.space[2]} ${theme.space[3]};
        `
      : css`
          padding: ${theme.space[3]} ${theme.space[4]};
        `}

  &:has(input:focus) {
    border-color: ${theme.colors.ignite300};
  }

  &:has(input:disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const Prefix = styled.span`
  font-family: ${theme.fonts.default};
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.gray400};
  font-weight: normal;
`

export const Input = styled.input`
  font-family: ${theme.fonts.default};
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.white};
  font-weight: normal;
  background: transparent;
  border: none;
  width: 100%;

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${theme.colors.gray400};
  }
`
