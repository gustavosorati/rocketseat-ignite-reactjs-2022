import styled, { css } from 'styled-components'

interface IconWrapperProps {
  iconBg?: string
  iconColor?: string
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const IconWrapper = styled.div<IconWrapperProps>`
  ${({ iconBg }) =>
    iconBg &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;

      background-color: ${iconBg};
      border-radius: 100%;

      min-width: 42px;
      min-height: 42px;
    `}

  svg {
    color: ${({ iconColor }) => iconColor};
  }
`

export const TextContent = styled.div`
  p {
    font-size: 1rem;
    color: ${(props) => props.theme.baseSubTitle};
    vertical-align: middle;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme.baseText};
  }
`
