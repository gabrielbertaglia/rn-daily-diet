import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.color['gray-500']};
`
