import { themeMap } from "./theme.css"

export const applyTheme = <
  Property extends keyof typeof themeMap,
  Value extends keyof (typeof themeMap)[Property],
>(
  property: Property,
  value: Value
) => {
  return { [property]: themeMap[property][value] }
}
