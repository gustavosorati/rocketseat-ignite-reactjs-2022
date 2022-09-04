import { Bank, CreditCard } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { StyledIcon } from '../../../../components/_Helpers/StyledIcon'
import { CheckoutPaymentFormContainer, PaymentOPT } from './styles'

export function CheckoutPaymentForm() {
  const theme = useTheme()
  return (
    <CheckoutPaymentFormContainer>
      <PaymentOPT>
        <StyledIcon
          icon={<CreditCard weight="regular" size={22} />}
          iconColor={theme.purple}
        />
        <p>Cartão de crédito</p>
      </PaymentOPT>

      <PaymentOPT>
        <StyledIcon
          icon={<Bank weight="regular" size={22} />}
          iconColor={theme.purple}
        />
        <p>Cartão de Débito</p>
      </PaymentOPT>

      <PaymentOPT>
        <StyledIcon
          icon={<CreditCard weight="regular" size={22} />}
          iconColor={theme.purple}
        />
        <p>Cartão de crédito</p>
      </PaymentOPT>
    </CheckoutPaymentFormContainer>
  )
}
