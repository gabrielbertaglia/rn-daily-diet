import { ReactNode } from 'react'
import { TextProps } from 'react-native'
import { FontFamilyType, FontSizeType, SubtitleStyled } from './styles'

interface SubtitleComponentProps extends TextProps {
  children: ReactNode
  fontSize: FontSizeType
  fontFamily?: FontFamilyType
}

export function Subtitle({
  children,
  fontSize,
  fontFamily,
  ...rest
}: SubtitleComponentProps) {
  return (
    <SubtitleStyled fontSize={fontSize} fontFamily={fontFamily} {...rest}>
      {children}
    </SubtitleStyled>
  )
}
