// import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import coffeeBanner from '../../../../assets//coffeeBanner.jpg'
import { StyledIcon } from '../../../../components/_Helpers/StyledIcon'

import { HeroContainer, HeroContent, ListOfBenefits } from './styles'

export function Hero() {
  const colors = useTheme()

  return (
    <HeroContainer>
      <div>
        <HeroContent>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>

          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </HeroContent>

        <ListOfBenefits>
          <li>
            <StyledIcon
              icon={<ShoppingCart weight="fill" size={22} />}
              text={'Compra simples e segura'}
              iconBg={colors.yellowDark}
              iconColor={colors.white}
            />
          </li>
          <li>
            <StyledIcon
              icon={<Package weight="fill" size={22} />}
              text={'Embalagem mantém o café intacto'}
              iconBg={colors.baseText}
              iconColor={colors.white}
            />
          </li>
          <li>
            <StyledIcon
              icon={<Timer weight="fill" size={22} />}
              text={'Entrega rápida e rastreada'}
              iconBg={colors.yellow}
              iconColor={colors.white}
            />
          </li>
          <li>
            <StyledIcon
              icon={<Coffee weight="fill" size={22} />}
              text={'O café chega fresquinho até você'}
              iconBg={colors.purple}
              iconColor={colors.white}
            />
          </li>
        </ListOfBenefits>
      </div>

      <img src={coffeeBanner} alt="" />
    </HeroContainer>
  )
}
