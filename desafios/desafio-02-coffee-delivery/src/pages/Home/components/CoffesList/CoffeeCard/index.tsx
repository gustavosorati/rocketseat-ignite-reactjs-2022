import { ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'
import { InputQuantity } from '../../../../../components/Forms/InputQuantity'
import { useCart } from '../../../../../contexts/CartContext'
import {
  Attributes,
  BtnAddToCart,
  CoffeeCardContainer,
  Descriptions,
  Footer,
  Image,
  Price,
} from './styles'

export interface Coffee {
  id: number
  image: string
  tags: string[]
  title: string
  description: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const { addCoffee } = useCart()
  const [quantity, setQuantity] = useState(1)

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

  function handleAddCoffee() {
    addCoffee(coffee, quantity)
  }

  return (
    <CoffeeCardContainer>
      <Image src={`/src/assets/coffees/${coffee.image}`} alt="" />

      <Attributes>
        {coffee.tags.map((tag) => {
          return <span key={tag}>{tag}</span>
        })}
      </Attributes>

      <Descriptions>
        <strong>{coffee.title}</strong>
        <p>{coffee.description}</p>
      </Descriptions>

      <Footer>
        <Price>
          <span>R$</span>
          {coffee.price}
        </Price>

        <InputQuantity
          quantity={quantity}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />

        <BtnAddToCart onClick={handleAddCoffee}>
          <ShoppingCartSimple />
        </BtnAddToCart>
      </Footer>
    </CoffeeCardContainer>
  )
}
