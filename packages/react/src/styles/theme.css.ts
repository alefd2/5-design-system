import {
  createTheme,
  createThemeContract,
  globalStyle,
} from "@vanilla-extract/css"

import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from "@alef-ui/tokens"

export const themeContract = createThemeContract({
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
})

export const theme = createTheme(themeContract, {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
})

export const themeMap = {
  height: themeContract.space,
  width: themeContract.space,
} as const

globalStyle("body", {
  fontFamily: themeContract.fonts.default,
  backgroundColor: themeContract.colors.gray100,
  color: themeContract.colors.black,
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
})
