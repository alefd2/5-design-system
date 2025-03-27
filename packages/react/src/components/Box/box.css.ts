import { style } from "@vanilla-extract/css"
import { themeContract } from "../../styles/theme.css"

export const boxStyle = style({
  padding: themeContract.space[6],
  borderRadius: themeContract.radii.md,
  backgroundColor: themeContract.colors.gray800,
  border: `1px solid ${themeContract.colors.gray600}`,
})
