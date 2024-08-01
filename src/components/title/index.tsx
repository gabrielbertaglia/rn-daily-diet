import { ReactNode } from 'react'
import { TextProps } from 'react-native'
import { FontFamilyType, FontSizeType, TitleStyled } from './styles'

interface TitleComponentProps extends TextProps {
  children: ReactNode
  fontSize: FontSizeType
  fontFamily?: FontFamilyType
}

export function Title({
  children,
  fontSize,
  fontFamily,
  ...rest
}: TitleComponentProps) {
  return (
    <TitleStyled fontSize={fontSize} fontFamily={fontFamily} {...rest}>
      {children}
    </TitleStyled>
  )
}
