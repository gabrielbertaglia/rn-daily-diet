import styled from 'styled-components/native'

export type Diet = 'inside' | 'outside'

interface ContainerProps {
  diet: Diet
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  align-items: center;
  justify-content: center;

  text-align: center;

  /* Talvez futuramente retirar */
  width: 150px;

  padding: 16px;
  border-radius: 8px;
  gap: 16px;

  background-color: ${({ theme, diet }) =>
    diet === 'inside' ? theme.color['green-light'] : theme.color['red-light']};
`
