import theme from 'src/theme'
import styled, { NativeTarget } from 'styled-components/native'
import { Container } from './styles'

export type ColorAnalyticsIconType = 'red-dark' | 'green-dark'

interface AnalyticsIconProps {
  color?: ColorAnalyticsIconType
  icon: NativeTarget

  leftOrRight?: 'left' | 'right'
}

export function AnalyticsAction({
  color = 'green-dark',
  icon: IconTarget,
  leftOrRight = 'right',
}: AnalyticsIconProps) {
  const Icon = styled(IconTarget).attrs({
    size: 24,
    color: theme.color[color],
  })``

  return (
    <Container leftOrRight={leftOrRight}>
      <Icon />
    </Container>
  )
}
