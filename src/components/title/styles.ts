import styled, { css } from 'styled-components/native'

export type FontSizeType = 'xs' | 's' | 'm' | 'g'
export type FontFamilyType = 'regular' | 'bold'
export type ColorType = 'green-dark' | 'red-dark'

interface TitleStyleProps {
  fontSize: FontSizeType
  fontFamily?: FontFamilyType
  color?: ColorType
}

export const TitleStyled = styled.Text<TitleStyleProps>`
  ${({ theme, fontSize, fontFamily, color }) => css`
    font-size: ${theme['font-size'].title[fontSize]};
    font-family: ${fontFamily
      ? theme['font-family'][fontFamily]
      : theme['font-family'].bold};
    ${color === 'green-dark'
      ? `color: ${theme.color['green-dark']}`
      : color === 'red-dark'
        ? `color: ${theme.color['red-dark']}`
        : `color: ${theme.color['gray-100']}`}
  `}
`
