import {
  AllCostContainer,
  Amount,
  Button,
  CheckCoffeeContainer,
  ProductContainer,
  ProductDescription,
  ProductPrice,
  Title,
  Wrapper,
} from './styles'

import americano from '../../../../assets/coffees/americano.png'
import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { BtnDelete } from '../../../../components/Forms/BtnDelete'
import { InputQuantity } from '../../../../components/Forms/InputQuantity'
import { useLocation, useNavigate } from 'react-router-dom'
import { useFormContext } from 'react-hook-form'

export function CheckCoffee() {
  const { cart, updateQuantity, deleteProduct } = useContext(CartContext)
  const { handleSubmit } = useFormContext()
  const natigate = useNavigate()
  const location = useLocation()

  function handlepurchaseConfirm() {
    natigate(`${location.pathname}/success`)
  }

  function handleDecrease(coffeeId: number) {
    updateQuantity(coffeeId, -1)
  }

  function handleIncrement(coffeeId: number) {
    updateQuantity(coffeeId, 1)
  }

  function numberFormat(value: number) {
    return Intl.NumberFormat('pt-BR', {
      currency: 'BRL',
      style: 'currency',
    }).format(value)
  }

  const totalCoffees = cart.reduce((acc, cur) => {
    return (acc += cur.quantity * cur.price)
  }, 0)

  const total = totalCoffees + 3.5

  return (
    <CheckCoffeeContainer className="checkout-coffee-container">
      <Title>Cafés selecionados</Title>

      <Wrapper>
        {cart.map((coffee) => {
          return (
            <ProductContainer key={coffee.id}>
              <img src={americano} alt="" />

              <ProductDescription>
                <strong>{coffee.title}</strong>
                <InputQuantity
                  quantity={coffee.quantity}
                  onDecrease={() => handleDecrease(coffee.id)}
                  onIncrease={() => handleIncrement(coffee.id)}
                />
                <BtnDelete onDelete={() => deleteProduct(coffee.id)} />
              </ProductDescription>

              <ProductPrice>
                {Intl.NumberFormat('pt-BR', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(coffee.quantity * coffee.price)}
              </ProductPrice>
            </ProductContainer>
          )
        })}

        {/* ------ */}

        <AllCostContainer>
          <div>
            <p>Total de itens</p>
            <span>{numberFormat(totalCoffees)}</span>
          </div>

          <div>
            <p>Entrega</p>
            <span>R$ 3,50</span>
          </div>

          <Amount>
            <strong>Total de itens</strong>
            <strong>{numberFormat(total)}</strong>
          </Amount>
        </AllCostContainer>

        <Button type="submit" onClick={handlepurchaseConfirm}>
          Confirmar Pedido
        </Button>
      </Wrapper>
    </CheckCoffeeContainer>
  )
}
