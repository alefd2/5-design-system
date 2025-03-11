import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from "@alef-ui/tokens"

export const theme = {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} as const

type Theme = typeof theme

const themeMap = {
  color: "colors",
  backgroundColor: "colors",
  borderColor: "colors",
  fontSize: "fontSizes",
  fontWeight: "fontWeights",
  lineHeight: "lineHeights",
  borderRadius: "radii",
  padding: "space",
  gap: "space",
  margin: "space",
  width: "space",
  height: "space",
} as const

type ThemeMap = typeof themeMap

export const applyTheme = <
  Property extends keyof ThemeMap,
  Value extends keyof Theme[ThemeMap[Property]],
>(
  property: Property,
  value: Value
) => {
  return `${property}: ${theme[themeMap[property]][value]};`
}
