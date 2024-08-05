import styled from 'styled-components/native'

export const Container = styled.View`
  align-items: center;
  width: 100%;

  padding: 16px;
  border-radius: 8px;
  gap: 8px;

  background-color: ${({ theme }) => theme.color['gray-600']};
`
