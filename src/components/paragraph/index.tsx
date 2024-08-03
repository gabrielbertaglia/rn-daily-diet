import { ReactNode } from 'react'
import { TextProps } from 'react-native'
import {
  ColorType,
  FontFamilyType,
  FontSizeType,
  ParagraphStyled,
} from './styles'

export type ParagraphProps = {
  fontSize: FontSizeType
  fontFamily?: FontFamilyType
  color: ColorType
}

interface ParagraphComponentProps extends TextProps, ParagraphProps {
  children: ReactNode
}

export function Paragraph({
  children,
  fontSize,
  fontFamily = 'regular',
  color,
  ...rest
}: ParagraphComponentProps) {
  return (
    <ParagraphStyled
      color={color}
      fontSize={fontSize}
      fontFamily={fontFamily}
      {...rest}
    >
      {children}
    </ParagraphStyled>
  )
}
