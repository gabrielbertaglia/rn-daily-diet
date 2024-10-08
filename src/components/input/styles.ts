import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  gap: 4px;
`

interface StyledTextInputProps {
  error: string | undefined
}

export const Input = styled.TextInput<StyledTextInputProps>`
  border: 1px solid
    ${({ theme, error }) =>
      error ? theme.color['red-dark'] : theme.color['gray-500']};
  border-radius: 6px;
  color: ${({ theme }) => theme.color['gray-100']};
  padding: 12px;
  font-family: ${({ theme }) => theme['font-family'].regular};
  font-size: ${({ theme }) => theme['font-size'].body.m};
`
