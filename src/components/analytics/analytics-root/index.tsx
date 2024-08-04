import { ReactNode } from 'react'
// import { defaultColorToAnalytics } from '..'
import { ViewProps } from 'react-native'
import { ColorAnalyticsRootStyleType, Container } from './styles'

interface AnalyticsRootProps extends ViewProps {
  children: ReactNode
  color?: ColorAnalyticsRootStyleType
}

export function AnalyticsRoot({
  children,
  color = 'gray-600',
  ...rest
}: AnalyticsRootProps) {
  return (
    <Container color={color} {...rest}>
      {children}
    </Container>
  )
}
