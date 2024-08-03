import { Paragraph, ParagraphProps } from '@components/paragraph'
import { ReactNode } from 'react'
import styled from 'styled-components'
import { NativeTarget, useTheme } from 'styled-components/native'
import { ButtonContainer, ButtonVariant } from './styles'

interface ButtonProps extends ParagraphProps {
  children: ReactNode
  variant?: ButtonVariant
  fullWidth?: boolean
  icon?: NativeTarget
}

export function Button({
  children,
  fullWidth = false,
  variant = 'primary',
  color = 'gray-200',
  fontSize = 's',
  fontFamily = 'regular',
  icon: IconTarget,
}: ButtonProps) {
  const theme = useTheme()
  const StyledIcon =
    IconTarget &&
    styled(IconTarget).attrs({
      size: 24,
    })`
      color: ${variant === 'primary'
        ? theme.color.white
        : theme.color['gray-100']};
    `

  return (
    <ButtonContainer fullWidth={fullWidth} variant={variant}>
      {StyledIcon && <StyledIcon />}
      <Paragraph color={color} fontSize={fontSize} fontFamily={fontFamily}>
        {children}
      </Paragraph>
    </ButtonContainer>
  )
}
