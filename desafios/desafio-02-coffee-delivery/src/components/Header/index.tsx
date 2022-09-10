import { Link } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'

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
  const { cartQuantity } = useCart()

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

          {cartQuantity ? (
            <Link to="/checkout">
              <BtnBag type="button">
                {cartQuantity >= 1 && (
                  <AmountProducts>{cartQuantity}</AmountProducts>
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
