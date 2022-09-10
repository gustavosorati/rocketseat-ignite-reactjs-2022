import { FormProvider, useForm } from 'react-hook-form'
import zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { CheckoutCoffeesAmount } from './components/CheckoutCoffeesAmount'
import { CompleteOrderForm } from './components/CompleteOrderForm'
import { CompleteOrderContainer } from './styles'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

const checkoutValidationSchema = zod.object({
  cep: zod.string(),
  street: zod.string(),
  number: zod.number(),
  complement: zod.string(),
  district: zod.string(),
  city: zod.string(),
  state: zod.string(),
  paymentMethod: zod.enum(['credit', 'debit', 'money']),
  // paymentMethod: zod.nativeEnum(
  //   { credit: 'credit', debit: 'debit', money: 'money' },
  //   {
  //     errorMap: () => {
  //       return { message: 'Informe o método de pagamento' }
  //     },
  //   },
  // ),
})

type ConfirmOrderData = zod.infer<typeof checkoutValidationSchema>

export function CompleteOrder() {
  const { cleanCart } = useContext(CartContext)
  const confirmOrderForm = useForm<ConfirmOrderData>({
    resolver: zodResolver(checkoutValidationSchema),
    defaultValues: {
      paymentMethod: undefined,
    },
  })
  const navigate = useNavigate()

  const { handleSubmit, reset } = confirmOrderForm

  function handleConfirmOrder(data: ConfirmOrderData) {
    navigate('success', { replace: true })
    cleanCart()
    reset()
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CompleteOrderContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CompleteOrderForm />
        <CheckoutCoffeesAmount />
      </CompleteOrderContainer>
    </FormProvider>
  )
}
