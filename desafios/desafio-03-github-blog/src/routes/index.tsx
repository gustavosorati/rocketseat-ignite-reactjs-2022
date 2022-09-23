import { Route, Routes} from 'react-router-dom'
import { DefaultLayout } from '../layout/Default'
import { Home } from '../pages/Home'
import { Posts } from '../pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/posts/:id' element={<Posts />} />
      </Route>
    </Routes>
  )
}
