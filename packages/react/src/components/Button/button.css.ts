import { style, styleVariants } from "@vanilla-extract/css"
import { themeContract } from "../../styles/theme.css"

export const baseButton = style({
  all: "unset",
  textAlign: "center",
  minWidth: "120px",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  borderRadius: themeContract.radii.sm,
  fontSize: themeContract.fontSizes.sm,
  fontWeight: themeContract.fontWeights.medium,
  padding: themeContract.space[4],
  gap: themeContract.space[2],

  selectors: {
    "&:disabled": {
      cursor: "not-allowed",
    },
    "&:focus": {
      boxShadow: `0 0 0 2px ${themeContract.colors.gray100}`,
    },
  },
})

export const variantStyles = styleVariants({
  primary: {
    color: themeContract.colors.white,
    backgroundColor: themeContract.colors.ignite500,
    ":not(:disabled):hover": {
      backgroundColor: themeContract.colors.ignite300,
    },
    ":disabled": {
      backgroundColor: themeContract.colors.gray200,
    },
  },
  secondary: {
    color: themeContract.colors.ignite300,
    borderColor: themeContract.colors.ignite500,
    borderWidth: "2px",
    borderStyle: "solid",
    ":not(:disabled):hover": {
      backgroundColor: themeContract.colors.ignite500,
      color: themeContract.colors.white,
    },
    ":disabled": {
      color: themeContract.colors.gray200,
      borderColor: themeContract.colors.gray200,
    },
  },
  tertiary: {
    color: themeContract.colors.gray100,
    ":not(:disabled):hover": {
      color: themeContract.colors.white,
    },
    ":disabled": {
      color: themeContract.colors.gray600,
    },
  },
})

export const sizeStyles = styleVariants({
  sm: { height: "38px" },
  md: { height: "46px" },
})

export const iconStyles = style({
  width: themeContract.space[4],
  height: themeContract.space[4],
})
