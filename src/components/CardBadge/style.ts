import { theme } from '@styles/theme'
import styled from 'styled-components'

interface BadgeWrapperProps {
  $status?: string
  $teamName?: string
}

export const BadgeWrapper = styled.div<BadgeWrapperProps>`
  width: fit-content;

  padding: 0.25em 10px;

  font-size: ${theme.fontSize.small};
  color: ${theme.fontColor.cwhite};

  border-radius: 4px;
  background-color: #ea0029;
`
