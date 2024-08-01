import theme from 'src/theme'
import styled, { NativeTarget } from 'styled-components/native'
import { Container } from './styles'

export type ColorAnalyticsIconType = 'red-dark' | 'green-dark'

interface AnalyticsIconProps {
  color?: ColorAnalyticsIconType
  icon: NativeTarget
}

export function AnalyticsAction({
  color = 'green-dark',
  icon: IconTarget,
}: AnalyticsIconProps) {
  const Icon = styled(IconTarget).attrs({
    size: 24,
    color: theme.color[color],
  })``

  return (
    <Container>
      <Icon />
    </Container>
  )
}
