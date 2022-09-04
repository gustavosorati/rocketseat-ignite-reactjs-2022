import { Minus, Plus } from 'phosphor-react'
import { Button, InputQuantityContainer } from './styles'

interface InputQuantityProps {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}

export function InputQuantity({
  quantity,
  onIncrease,
  onDecrease,
}: InputQuantityProps) {
  return (
    <InputQuantityContainer>
      <Button onClick={onDecrease}>
        <Minus weight="bold" size={14} />
      </Button>

      <input value={quantity} readOnly />

      <Button type="button" onClick={onIncrease}>
        <Plus weight="bold" size={14} />
      </Button>
    </InputQuantityContainer>
  )
}
