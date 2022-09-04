import { Card, SuccessContainer, Text, Title, Wrapper } from './styles'
import shipment from '../../assets/shipment.svg'
import { StyledIcon } from '../../components/_Helpers/StyledIcon'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function Success() {
  const theme = useTheme()

  return (
    <SuccessContainer>
      <Title>Uhu! Pedido confirmado</Title>
      <Text>Agora é só aguardar que logo o café chegará até você</Text>

      <Wrapper>
        <Card>
          <StyledIcon
            icon={<MapPin weight="fill" size={20} />}
            iconBg={theme.purple}
            iconColor={theme.white}
            subText={
              'Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto Alegre, RS'
            }
          />
          <StyledIcon
            icon={<Timer weight="fill" size={20} />}
            iconBg={theme.yellow}
            iconColor={theme.white}
            text="Previsão de entrega"
            subText="20 min - 30 min "
          />
          <StyledIcon
            icon={<CurrencyDollar weight="fill" size={20} />}
            iconBg={theme.yellowDark}
            iconColor={theme.white}
            text="Pagamento na entrega"
            subText="Cartão de Crédito"
          />
        </Card>

        <img src={shipment} alt="" />
      </Wrapper>
    </SuccessContainer>
  )
}
