import styled from 'styled-components/native'

export const Container = styled.View`
  padding-top: 32px;
`

export const MealCard = styled.TouchableOpacity`
  padding: 12px;
  margin-top: 8px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color['gray-500']};
  flex-direction: row;
  align-items: center;

  gap: 12px;
`

export const Divider = styled.View`
  height: 14px;
  border: 0.5px solid ${({ theme }) => theme.color['gray-400']};
`

interface StatusProps {
  onADiet: boolean
}

export const Status = styled.View<StatusProps>`
  width: 14px;
  height: 14px;
  border-radius: 999px;

  background-color: ${({ theme, onADiet }) =>
    onADiet ? theme.color.red : theme.color.green};

  margin-left: auto;
`
