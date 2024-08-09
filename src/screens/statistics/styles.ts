import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color['green-light']};
`

export type ColorHeaderStyleType = 'red-light' | 'green-light'

interface StyleHeader {
  color: ColorHeaderStyleType
}

export const Header = styled.View<StyleHeader>`
  padding: 32px 16px;
  background-color: ${({ theme, color }) => theme.color[color]};
`

export const Content = styled.View`
  padding: 32px 24px 12px;

  align-items: center;
  gap: 12px;
`

export const ContentTotalMeal = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 0px 24px;

  gap: 12px;
`

export const ContentAll = styled.View`
  flex: 1;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: ${({ theme }) => theme.color['gray-700']};
`
