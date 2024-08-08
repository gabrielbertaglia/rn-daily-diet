import styled, { css } from 'styled-components/native'

export type FontSizeType = 'xs' | 's' | 'm'
export type FontFamilyType = 'regular' | 'bold'
export type ColorType = 'white' | 'gray-200' | 'gray-100' | 'red-dark'

interface ParagraphStyleProps {
  fontSize: FontSizeType
  fontFamily: FontFamilyType
  color: ColorType
}

export const ParagraphStyled = styled.Text<ParagraphStyleProps>`
  ${({ theme, fontSize, fontFamily, color }) => css`
    font-size: ${theme['font-size'].body[fontSize]};
    font-family: ${theme['font-family'][fontFamily]};
    color: ${theme.color[color]};
  `}
`
