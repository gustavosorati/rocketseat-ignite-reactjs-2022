import { CoffeList } from './components/CoffesList'
import { Hero } from './components/Hero'

import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Hero />

      <CoffeList />
    </HomeContainer>
  )
}
