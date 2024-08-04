import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Header = styled.View`
  padding: 32px 16px;
  background-color: ${({ theme }) => theme.color['green-light']};
`

export const Content = styled.View`
  padding: 32px 24px 12px;
  align-items: center;
`

export const ContentTotalMeal = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 0px 24px;

  gap: 12px;
`
