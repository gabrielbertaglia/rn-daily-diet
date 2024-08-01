import styled, { css } from 'styled-components/native'

export type FontSizeType = 'xs' | 's' | 'm'
export type FontFamilyType = 'regular' | 'bold'

interface SubtitleStyleProps {
  fontSize: FontSizeType
  fontFamily?: FontFamilyType
}

export const SubtitleStyled = styled.Text<SubtitleStyleProps>`
  ${({ theme }) => css`
    font-size: ${theme['font-size'].body.s};
    font-family: ${theme['font-family'].regular};
    color: ${theme.color['gray-200']};
  `}
`
