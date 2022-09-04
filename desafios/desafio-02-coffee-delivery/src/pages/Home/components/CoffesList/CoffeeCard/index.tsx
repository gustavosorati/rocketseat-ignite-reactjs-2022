import { ShoppingCartSimple } from 'phosphor-react'
import { useContext, useState } from 'react'
import { InputQuantity } from '../../../../../components/Forms/InputQuantity'
import { CartContext } from '../../../../../contexts/CartContext'
import {
  Attributes,
  BtnAddToCart,
  CoffeeCardContainer,
  Descriptions,
  Footer,
  Image,
  Price,
} from './styles'

interface CoffeeCardProps {
  coffee: {
    id: number
    image: string
    tags: string[]
    title: string
    description: string
    price: number
  }
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { addProduct } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

  function handleAddCoffee() {
    addProduct(coffee, quantity)
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
