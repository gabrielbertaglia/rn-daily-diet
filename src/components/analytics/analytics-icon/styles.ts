import styled, { css } from 'styled-components/native'

interface ContainerStyleProps {
  leftOrRight: 'left' | 'right'
}

export const Container = styled.View<ContainerStyleProps>`
  position: absolute;
  padding: 4px;
  top: 8px;
  ${({ leftOrRight }) => css`
    ${leftOrRight === 'left' ? 'left: 8px;' : 'right: 8px;'};
  `}
`
