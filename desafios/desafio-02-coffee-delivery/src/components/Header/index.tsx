import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'

import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/logo.svg'
import {
  AmountProducts,
  BtnBag,
  HeaderContainer,
  LocalityWrapper,
  Wrapper,
} from './styles'

export function Header() {
  const { cart } = useContext(CartContext)

  const amountProducts = cart?.length

  return (
    <HeaderContainer>
      <Wrapper>
        <Link to="/">
          <img src={logo} alt="Coffee Delivery" />
        </Link>

        <div>
          <LocalityWrapper>
            <MapPin weight="fill" size={20} />
            Orlândia, SP
          </LocalityWrapper>

          {cart?.length ? (
            <Link to="/checkout">
              <BtnBag type="button">
                {amountProducts! >= 1 && (
                  <AmountProducts>{amountProducts}</AmountProducts>
                )}
                <ShoppingCart color="#C47F17" size={20} weight="fill" />
              </BtnBag>
            </Link>
          ) : (
            <BtnBag type="button">
              <ShoppingCart color="#C47F17" size={20} weight="fill" />
            </BtnBag>
          )}
        </div>
      </Wrapper>
    </HeaderContainer>
  )
}
