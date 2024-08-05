import styled from 'styled-components/native'

export type ColorAnalyticsRootStyleType =
  | 'red-light'
  | 'green-light'
  | 'gray-600'

interface AnalyticsRootStyleProps {
  color: ColorAnalyticsRootStyleType
}

export const Container = styled.TouchableOpacity<AnalyticsRootStyleProps>`
  width: 100%;
  background-color: ${({ theme, color }) => theme.color[color]};
  padding: 20px 16px;
  border-radius: 8px;

  position: relative;
`

export const ContainerUntouchable = styled.View<AnalyticsRootStyleProps>`
  width: 100%;
  background-color: ${({ theme, color }) => theme.color[color]};
  padding: 20px 16px;
  border-radius: 8px;
`
