import { Paragraph, ParagraphProps } from '@components/paragraph'
import { ReactNode } from 'react'
import { TouchableOpacityProps } from 'react-native'
import styled from 'styled-components'
import { NativeTarget, useTheme } from 'styled-components/native'
import { ButtonContainer, ButtonVariant } from './styles'

interface ButtonProps extends ParagraphProps, TouchableOpacityProps {
  children: ReactNode
  variant?: ButtonVariant
  fullWidth?: boolean
  icon?: NativeTarget
  flex?: boolean
}

export function Button({
  children,
  fullWidth = false,
  variant = 'primary',
  color = 'gray-200',
  fontSize = 's',
  fontFamily = 'regular',
  icon: IconTarget,
  flex = false,
  ...rest
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
    <ButtonContainer
      flex={flex}
      fullWidth={fullWidth}
      variant={variant}
      {...rest}
    >
      {StyledIcon && <StyledIcon />}
      <Paragraph color={color} fontSize={fontSize} fontFamily={fontFamily}>
        {children}
      </Paragraph>
    </ButtonContainer>
  )
}
