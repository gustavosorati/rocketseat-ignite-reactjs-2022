import { CoffeeCard } from './CoffeeCard'
import { CoffesContainer, CoffesListContainer } from './styles'

import { coffees } from '../../../../../database'

export function CoffeList() {
  return (
    <CoffesContainer>
      <h1>Nossos Cafés</h1>

      <CoffesListContainer>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffesListContainer>
    </CoffesContainer>
  )
}
