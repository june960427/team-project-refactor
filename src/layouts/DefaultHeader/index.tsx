import { Link } from 'react-router-dom'

import Logo from '@assets/logo/logo_navy.svg?react'

import { Header, LogoWrap } from './style'

function DefaultHeader() {
  return (
    <Header>
      <nav>
        <Link to='/'>
          <LogoWrap>
            <Logo />
          </LogoWrap>
        </Link>
      </nav>
    </Header>
  )
}

export default DefaultHeader
