import { Link, useLocation } from 'react-router-dom'

import HomeIcon from '@assets/icon/nav_home.svg?react'
import FilledHomeIcon from '@assets/icon/nav_home_fill.svg?react'

import MateIcon from '@assets/icon/nav_find.svg?react'
import FilledMateIcon from '@assets/icon/nav_find_fill.svg?react'

import TradeIcon from '@assets/icon/nav_trade.svg?react'
import FilledTradeIcon from '@assets/icon/nav_trade_fill.svg?react'

import ChatIcon from '@assets/icon/nav_chat.svg?react'
import FilledChatIcon from '@assets/icon/nav_chat_fill.svg?react'

import MyIcon from '@assets/icon/nav_user.svg?react'
import FilledMyIcon from '@assets/icon/nav_user_fill.svg?react'

import { NavLi, NavText, NavUl, NavWrapper } from './style'

const NAV_ELEMENT_LIST = [
  {
    name: '홈',
    path: '/',
    DefaultIcon: HomeIcon,
    FilledIcon: FilledHomeIcon,
  },
  {
    name: '메이트 찾기',
    path: '/',
    DefaultIcon: MateIcon,
    FilledIcon: FilledMateIcon,
  },
  {
    name: '굿즈 거래',
    path: '/',
    DefaultIcon: TradeIcon,
    FilledIcon: FilledTradeIcon,
  },
  {
    name: '채팅',
    path: '/',
    DefaultIcon: ChatIcon,
    FilledIcon: FilledChatIcon,
  },
  {
    name: '마이',
    path: '/',
    DefaultIcon: MyIcon,
    FilledIcon: FilledMyIcon,
  },
]

function DefaultBottomNav() {
  const { pathname } = useLocation()

  return (
    <NavWrapper>
      <NavUl>
        {NAV_ELEMENT_LIST.map(({ name, path, DefaultIcon, FilledIcon }) => {
          return (
            <NavLi key={name}>
              <Link to={path}>
                {pathname === path ? <FilledIcon /> : <DefaultIcon />}
                <NavText>{name}</NavText>
              </Link>
            </NavLi>
          )
        })}
      </NavUl>
    </NavWrapper>
  )
}

export default DefaultBottomNav
