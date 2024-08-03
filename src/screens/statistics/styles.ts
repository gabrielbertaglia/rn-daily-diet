import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Header = styled.View`
  padding: 32px 16px;
  background-color: ${({ theme }) => theme.color['green-light']};
`
