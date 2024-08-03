import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color['gray-700']};
  padding: 24px;
`

export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 30px;
`

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`
export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.color['gray-200']};
  border-radius: 999px;
  filter: grayscale(100%);
`

export const NewMealContent = styled.View`
  padding-top: 40px;
  gap: 12px;
`

export const DayList = styled.View`
  /* padding-top: 4px; */
  margin-top: 16px;
  /* gap: 12px; */
  flex: 1;
`
