import { ReactNode } from 'react'
import { TouchableOpacityProps, ViewProps } from 'react-native'
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

interface AnalyticsRootTouchableProps extends TouchableOpacityProps {
  children: ReactNode
  color?: ColorAnalyticsRootStyleType
  isTouchable: boolean
}

type AnalyticsRootAllProps = AnalyticsRootProps & AnalyticsRootTouchableProps

export function AnalyticsRoot({
  children,
  color = 'gray-600',
  isTouchable = true,
  ...rest
}: AnalyticsRootAllProps) {
  if (!isTouchable) {
    return (
      <ContainerUntouchable color={color} {...(rest as ViewProps)}>
        {children}
      </ContainerUntouchable>
    )
  }
  return (
    <Container color={color} {...(rest as TouchableOpacityProps)}>
      {children}
    </Container>
  )
}
