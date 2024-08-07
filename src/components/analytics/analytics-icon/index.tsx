import { TouchableOpacityProps } from 'react-native'
import theme from 'src/theme'
import styled, { NativeTarget } from 'styled-components/native'
import { Container } from './styles'

export type ColorAnalyticsIconType = 'red-dark' | 'green-dark'

interface AnalyticsIconProps extends TouchableOpacityProps {
  color?: ColorAnalyticsIconType
  icon: NativeTarget

  leftOrRight?: 'left' | 'right'
}

export function AnalyticsAction({
  color = 'green-dark',
  icon: IconTarget,
  leftOrRight = 'right',
  ...rest
}: AnalyticsIconProps) {
  const Icon = styled(IconTarget).attrs({
    size: 24,
    color: theme.color[color],
  })``

  return (
    <Container leftOrRight={leftOrRight} {...rest}>
      <Icon />
    </Container>
  )
}
