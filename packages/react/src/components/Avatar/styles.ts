import * as Avatar from "@radix-ui/react-avatar"
import styled from "@emotion/styled"
import { theme } from "../../styles"

export const AvatarContainer = styled(Avatar.Root)`
  border-radius: ${theme.radii.full};
  display: inline-block;
  width: ${theme.space[16]};
  height: ${theme.space[16]};
  overflow: hidden;
`

export const AvatarImage = styled(Avatar.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`

export const AvatarFallback = styled(Avatar.Fallback)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.gray400};
  color: ${theme.colors.gray200};

  svg {
    width: ${theme.space[6]};
    height: ${theme.space[6]};
  }
`
