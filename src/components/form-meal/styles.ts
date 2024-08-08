import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color['gray-500']};
`

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
`

export const Column = styled.View`
  flex: 1;
`

export const Form = styled.View`
  padding: 40px 24px 0;
  flex: 1;
  background-color: ${({ theme }) => theme.color['gray-700']};

  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`

export const ButtonInDietContainer = styled.View`
  flex-direction: column;
  padding-top: 24px;
`

export const ButtonContainer = styled.View`
  margin-top: auto;
  padding-bottom: 24px;
`
