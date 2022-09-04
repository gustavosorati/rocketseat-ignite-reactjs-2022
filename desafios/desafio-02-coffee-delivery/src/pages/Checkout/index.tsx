import { FormProvider, useForm } from 'react-hook-form'
import zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { CheckCoffee } from './components/CheckCoffe'
import { CheckOrder } from './components/CheckOrder'
import * as S from './styles'

const checkoutValidationSchema = zod.object({
  cep: zod.number().min(8).max(8),
  street: zod.string(),
  number: zod.number().min(1),
  complement: zod.string(),
  district: zod.string(),
  city: zod.string(),
  state: zod.string(),
})

interface IFormInputs {
  cep: number
  street: string
  number: number
  complement: string
  district: string
  city: string
  state: string
}

export function Checkout() {
  const checkoutForm = useForm<IFormInputs>({
    resolver: zodResolver(checkoutValidationSchema),
  })

  const onSubmit = (data: IFormInputs) => console.log(data)

  return (
    <S.CheckoutContainer>
      <form onSubmit={checkoutForm.handleSubmit(onSubmit)}>
        <FormProvider {...checkoutForm}>
          <CheckOrder />

          <CheckCoffee />
        </FormProvider>
      </form>
    </S.CheckoutContainer>
  )
}
