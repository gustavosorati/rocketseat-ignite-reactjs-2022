import { Route, Routes} from 'react-router-dom'
import { DefaultLayout } from '../layout/Default'
import { Home } from '../pages/Home'
import { Posts } from '../pages/Posts'

export function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/posts' element={<Posts />} />
      </Route>
    </Routes>
  )
}
