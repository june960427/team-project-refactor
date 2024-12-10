import DefaultBottomNav from '@layouts/DefaultBottomNav'
import DefaultHeader from '@layouts/DefaultHeader'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import { DefaultContainer } from './style'

function DefaultLayout() {
  return (
    <>
      <DefaultHeader />
      <DefaultContainer>
        <Outlet />
      </DefaultContainer>
      <DefaultBottomNav />
      <ScrollRestoration />
    </>
  )
}

export default DefaultLayout
