import { useFormContext } from 'react-hook-form'
import { Input } from '../../../../components/Forms/Input'

// import { InputStyled } from '../../../../components/Forms/Input'
import { CheckoutAddresFormContainer } from './styles'

export function CheckoutAddresForm() {
  const { register, formState } = useFormContext()
  const { errors } = formState as any

  return (
    <CheckoutAddresFormContainer>
      <Input
        className="cep"
        placeholder="cep"
        {...register('cep')}
        error={errors.cep?.message}
      />
      <Input
        className="rua"
        placeholder="Rua"
        {...register('street')}
        error={errors.street?.message}
      />
      <Input
        placeholder="Número"
        {...register('number', { valueAsNumber: true })}
        error={errors.number?.message}
      />
      <Input
        className="complemento"
        placeholder="Complemento"
        {...register('complement')}
      />
      <Input
        placeholder="Bairro"
        {...register('district')}
        error={errors.district?.message}
      />
      <Input
        placeholder="Cidade"
        {...register('city')}
        error={errors.city?.message}
      />
      <Input
        placeholder="UF"
        {...register('state')}
        error={errors.state?.message}
      />
    </CheckoutAddresFormContainer>
  )
}
