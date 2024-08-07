import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color['gray-500']};
`
export const Content = styled.View`
  padding: 40px 24px 0;
  flex: 1;
  background-color: ${({ theme }) => theme.color['gray-700']};

  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`

export const ContentDetail = styled.View`
  gap: 8px;
`

export const ContentDetailTime = styled.View`
  gap: 8px;
  padding-top: 24px;
  padding-bottom: 24px;
`

export const Tag = styled.View`
  background-color: ${({ theme }) => theme.color['gray-600']};
  padding: 8px 16px;
  border-radius: 999px;

  flex-direction: row;
  justify-content: center;
  align-self: flex-start;
  align-items: center;

  gap: 8px;
`

export const TagStatus = styled.View`
  width: 8px;
  height: 8px;
  background-color: ${({ theme }) => theme.color['green-dark']};
  border-radius: 999px;
`

export const ContentButton = styled.View`
  margin-top: auto;
  margin-bottom: 16px;

  gap: 8px;
`
