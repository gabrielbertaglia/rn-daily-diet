import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type ButtonVariant = 'primary' | 'secondary'

interface ButtonContainerProps {
  variant: ButtonVariant
  fullWidth: boolean
  flex: boolean
}

export const ButtonContainer = styled(TouchableOpacity)<ButtonContainerProps>`
  ${({ flex }) => flex && 'flex: 1;'}
  align-self: ${({ fullWidth }) => (fullWidth ? 'auto' : 'flex-start')};
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color['gray-200']};
  padding: 16px 24px;
  border-radius: 6px;
  flex-direction: row;
  gap: 12px;

  ${({ theme, variant }) => css`
    background-color: ${variant === 'secondary'
      ? 'transparent'
      : theme.color['gray-200']};

    ${variant === 'secondary' && {
      border: `1px solid ${theme.color['gray-100']}`,
    }}
  `}
`
