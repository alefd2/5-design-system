import styled from "@emotion/styled"
import { theme } from "../../styles"
import { Text } from "../Text"

export const MultiStepContainer = styled.div``

export const Label = styled(Text)`
  color: ${theme.colors.gray200};
  font-size: ${theme.fontSizes.xs};
`

export const Steps = styled.div`
  display: grid;
  grid-template-columns: repeat(var(--steps-size), 1fr);
  gap: ${theme.space[2]};
  margin-top: ${theme.space[1]};
`

export const Step = styled.div<{ active?: boolean }>`
  height: ${theme.space[1]};
  border-radius: ${theme.radii.px};
  background-color: ${(props) =>
    props.active ? theme.colors.gray100 : theme.colors.gray600};
`
