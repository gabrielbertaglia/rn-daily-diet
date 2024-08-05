import { TouchableOpacityProps } from 'react-native'
import styled, { css } from 'styled-components/native'

interface ContainerStyleProps extends TouchableOpacityProps {
  leftOrRight: 'left' | 'right'
}

export const Container = styled.TouchableOpacity<ContainerStyleProps>`
  position: absolute;
  padding: 4px;
  top: 8px;
  ${({ leftOrRight }) => css`
    ${leftOrRight === 'left' ? 'left: 8px;' : 'right: 8px;'};
  `}
`
