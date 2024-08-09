import styled from 'styled-components/native'

export const Container = styled.View`
  /* flex: 1; */
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.color['gray-700']};
  padding: 40px 24px 24px;
  gap: 32px;
`

export const ContentButton = styled.View`
  /* width: 100%; */
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
`
