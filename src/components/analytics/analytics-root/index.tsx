import { ReactNode } from 'react'
// import { defaultColorToAnalytics } from '..'
import { ColorAnalyticsRootStyleType, Container } from './styles'

interface AnalyticsRootProps {
  children: ReactNode
  color?: ColorAnalyticsRootStyleType
}

export function AnalyticsRoot({
  children,
  color = 'gray-600',
}: AnalyticsRootProps) {
  return <Container color={color}>{children}</Container>
}
