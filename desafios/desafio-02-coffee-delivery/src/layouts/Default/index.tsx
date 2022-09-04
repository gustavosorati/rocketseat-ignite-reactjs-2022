import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { MainWrapper } from './styles'

export function DefaultLayout() {
  return (
    <>
      <Header />

      <MainWrapper>
        <Outlet />
      </MainWrapper>
    </>
  )
}
