import { ReactNode } from 'react'
import { TextProps } from 'react-native'
import { ColorType, FontFamilyType, FontSizeType, TitleStyled } from './styles'

interface TitleComponentProps extends TextProps {
  children: ReactNode
  fontSize: FontSizeType
  fontFamily?: FontFamilyType
  color?: ColorType
}

export function Title({
  children,
  fontSize,
  fontFamily,
  color,
  ...rest
}: TitleComponentProps) {
  return (
    <TitleStyled
      color={color}
      fontSize={fontSize}
      fontFamily={fontFamily}
      {...rest}
    >
      {children}
    </TitleStyled>
  )
}
