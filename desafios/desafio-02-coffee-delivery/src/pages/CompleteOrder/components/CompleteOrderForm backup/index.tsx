import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { StyledIcon } from '../../../../components/_Helpers/StyledIcon'
import { CheckoutAddresForm } from './CheckoutAddresForm'
import { CheckoutPaymentForm } from './CheckoutPaymentForm'
import {
  CompleteOrderFormContainer,
  Title,
  FormSectionContainer,
} from './styles'

export function CompleteOrderForm() {
  const theme = useTheme()

  return (
    <CompleteOrderFormContainer className="CheckoutContainer">
      <Title>Complete o seu pedido</Title>

      <FormSectionContainer>
        <StyledIcon
          icon={<MapPinLine weight="regular" size={22} />}
          iconColor={theme.yellowDark}
          text="Endereço de Entrega"
          subText="Informe o endereço onde deseja receber seu pedido"
        />

        <CheckoutAddresForm />
      </FormSectionContainer>

      <FormSectionContainer>
        <StyledIcon
          icon={<CurrencyDollar weight="regular" size={22} />}
          iconColor={theme.purple}
          text="Pagamento"
          subText="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        />

        <CheckoutPaymentForm />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}
