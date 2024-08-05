import { ReactNode } from 'react'
// import { defaultColorToAnalytics } from '..'
import { ViewProps } from 'react-native'
import {
  ColorAnalyticsRootStyleType,
  Container,
  ContainerUntouchable,
} from './styles'

interface AnalyticsRootProps extends ViewProps {
  children: ReactNode
  color?: ColorAnalyticsRootStyleType
  isTouchable: boolean
}

export function AnalyticsRoot({
  children,
  color = 'gray-600',
  isTouchable = true,
  ...rest
}: AnalyticsRootProps) {
  if (!isTouchable) {
    return (
      <ContainerUntouchable color={color} {...rest}>
        {children}
      </ContainerUntouchable>
    )
  }
  return (
    <Container color={color} {...rest}>
      {children}
    </Container>
  )
}
