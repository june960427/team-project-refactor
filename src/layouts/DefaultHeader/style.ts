import styled from 'styled-components'
import { theme } from '@styles/theme'

export const Header = styled.nav`
  width: 100%;
  height: 48px;

  display: flex;
  align-items: center;

  padding-inline: ${theme.defaultPadding.inline};
  border-bottom: 1px solid ${theme.border};
`

export const LogoWrap = styled.h1`
  margin: 0;

  font-size: 1em;
`
