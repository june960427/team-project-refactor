import { theme } from '@styles/theme'
import styled from 'styled-components'

export const NavWrapper = styled.nav`
  width: 100%;
  height: 60px;

  display: flex;

  border-top: 1px solid ${theme.border};
`

export const NavUl = styled.ul`
  width: 100%;

  display: flex;
  align-items: center;
`

export const NavLi = styled.li`
  width: 20%;

  display: flex;
  flex-direction: column;

  & > a {
    width: 100%;
    height: 100%;

    & > svg {
      display: block;
      margin: 0 auto;
    }
  }
`

export const NavText = styled.p`
  margin-top: 0.375em;

  font-size: ${theme.fontSize.small};
  font-weight: 300;

  color: ${theme.fontColor.black};
  text-align: center;
`
