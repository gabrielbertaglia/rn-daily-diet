import { Diet } from '@components/card-diet/styles'
import styled, { css } from 'styled-components/native'

interface ButtonStyledContainer {
  diet: Diet
  selected: boolean
  title: string
}

interface StatusStyledProps {
  diet: Diet
}

export const Container = styled.TouchableOpacity<ButtonStyledContainer>`
  width: 100%;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 6px;

  ${({ theme, selected, diet }) => css`
    border: 1px solid
      ${selected
        ? diet === 'inside'
          ? theme.color['green-dark']
          : theme.color['red-dark']
        : theme.color['gray-600']};
    background-color: ${selected
      ? diet === 'inside'
        ? theme.color['green-light']
        : theme.color['red-light']
      : theme.color['gray-600']};
  `}
`
export const Status = styled.View<StatusStyledProps>`
  width: 8px;
  height: 8px;
  background-color: ${({ theme, diet }) =>
    diet === 'inside' ? theme.color['green-dark'] : theme.color['red-dark']};
  border-radius: 999px;
`
