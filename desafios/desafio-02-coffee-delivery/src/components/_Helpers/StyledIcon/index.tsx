import { ReactNode } from 'react'
import * as S from './styles'

interface IconFlagProps {
  icon: ReactNode
  iconColor?: string
  iconBg?: string
  text?: string
  subText?: string
}

export function StyledIcon({
  icon,
  iconColor,
  iconBg,
  text,
  subText,
}: IconFlagProps) {
  return (
    <S.Container>
      <S.IconWrapper iconColor={iconColor} iconBg={iconBg}>
        {icon}
      </S.IconWrapper>

      {text && (
        <S.TextContent>
          {text && <p>{text}</p>}

          {subText && <span>{subText}</span>}
        </S.TextContent>
      )}
    </S.Container>
  )
}
