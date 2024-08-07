import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color['gray-700']};
  padding: 24px;
  justify-content: center;
  align-items: center;
`

export const ContentHeader = styled.View`
  align-items: center;
  gap: 16px;
  margin-bottom: 40px;
`

export const ContentImage = styled.View`
  margin-bottom: 32px;
`

export const FeedbackImage = styled.Image`
  width: 224px;
  height: 288px;
`

export const ContentButton = styled.View`
  justify-content: center;
`
