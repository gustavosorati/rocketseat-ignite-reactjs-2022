import {
  CostsContainer,
  AmountPriceItens,
  BtnConfirmOrder,
  CheckoutCoffeesAmountContainer,
  ProductContainer,
  ProductDescription,
  ProductPrice,
  Title,
  CoffeListContainer,
} from './styles'

import { useCart } from '../../../../contexts/CartContext'
import { BtnDelete } from '../../../../components/Forms/BtnDelete'
import { InputQuantity } from '../../../../components/Forms/InputQuantity'

export function CheckoutCoffeesAmount() {
  const { cartItems, updateQuantity, deleteProduct } = useCart()

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

  const totalCoffees = cartItems.reduce((acc, cur) => {
    return (acc += cur.quantity * cur.price)
  }, 0)

  const total = totalCoffees + 3.5

  return (
    <CheckoutCoffeesAmountContainer className="checkout-coffee-container">
      <Title>Cafés selecionados</Title>

      <CoffeListContainer>
        {cartItems.map((coffee) => {
          return (
            <ProductContainer key={coffee.id}>
              <img src={`src/assets/coffees/${coffee.image}`} alt="" />

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

        <CostsContainer>
          <div>
            <p>Total de itens</p>
            <span>{numberFormat(totalCoffees)}</span>
          </div>

          <div>
            <p>Entrega</p>
            <span>R$ 3,50</span>
          </div>

          <AmountPriceItens>
            <strong>Total de itens</strong>
            <strong>{numberFormat(total)}</strong>
          </AmountPriceItens>
        </CostsContainer>

        <BtnConfirmOrder type="submit" disabled={cartItems.length <= 0}>
          Confirmar Pedido
        </BtnConfirmOrder>
      </CoffeListContainer>
    </CheckoutCoffeesAmountContainer>
  )
}
