import * as Checkbox from "@radix-ui/react-checkbox"
import styled from "@emotion/styled"
import { keyframes } from "@emotion/react"
import { theme } from "../../styles"

export const CheckboxContainer = styled(Checkbox.Root)`
  all: unset;
  width: ${theme.space[6]};
  height: ${theme.space[6]};
  background-color: ${theme.colors.gray900};
  border-radius: ${theme.radii.xs};
  line-height: 0;
  cursor: pointer;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${theme.colors.gray900};

  &[data-state="checked"] {
    background-color: ${theme.colors.ignite300};
  }

  &:focus,
  &[data-state="checked"] {
    border: 2px solid ${theme.colors.ignite300};
  }
`

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`

const slideOut = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  color: ${theme.colors.white};
  width: ${theme.space[4]};
  height: ${theme.space[4]};

  &[data-state="checked"] {
    animation: ${slideIn} 200ms ease-out;
  }

  &[data-state="unchecked"] {
    animation: ${slideOut} 200ms ease-out;
  }
`
