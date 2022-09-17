import { Route, Routes} from 'react-router-dom'
import { DefaultLayout } from '../layout/Default'
import { Home } from '../pages/Home'

export function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  )
}
