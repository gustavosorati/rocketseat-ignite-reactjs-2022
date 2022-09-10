import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/Default'
import { CompleteOrder } from './pages/CompleteOrder'
import { Home } from './pages/Home'
import { Success } from './pages/SuccessOrder'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CompleteOrder />} />
        <Route path="/checkout/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
