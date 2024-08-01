import styled, { css } from 'styled-components/native'

export type FontSizeType = 'xs' | 's' | 'm' | 'g'
export type FontFamilyType = 'regular' | 'bold'

interface TitleStyleProps {
  fontSize: FontSizeType
  fontFamily?: FontFamilyType
}

export const TitleStyled = styled.Text<TitleStyleProps>`
  ${({ theme, fontSize, fontFamily }) => css`
    font-size: ${theme['font-size'].title[fontSize]};
    font-family: ${fontFamily
      ? theme['font-family'][fontFamily]
      : theme['font-family'].bold};
    color: ${theme.color['gray-100']};
  `}
`
