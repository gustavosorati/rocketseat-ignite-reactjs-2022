import { Trash } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { BtnDeleteContainer } from './styles'

interface BtnDeleteProps {
  onDelete: (id: number) => void
}

export function BtnDelete({ onDelete }: BtnDeleteProps) {
  const theme = useTheme()

  return (
    <BtnDeleteContainer onClick={onDelete}>
      <Trash color={theme.purple} weight="light" size={16} /> Remover
    </BtnDeleteContainer>
  )
}
