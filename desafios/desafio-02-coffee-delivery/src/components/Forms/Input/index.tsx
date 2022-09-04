import React, { InputHTMLAttributes } from 'react'
import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  opcional?: string
}

// eslint-disable-next-line react/display-name
export const InputText = React.forwardRef<HTMLInputElement, InputProps>(
  ({ opcional, placeholder, ...rest }: InputProps, ref) => {
    return (
      <S.Container {...rest}>
        <S.Input type="text" placeholder={placeholder} ref={ref} />
        {opcional && <S.OptionalText>{opcional}</S.OptionalText>}
      </S.Container>
    )
  },
)
