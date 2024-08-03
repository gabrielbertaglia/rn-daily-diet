import { Paragraph } from '@components/paragraph'
import { Title } from '@components/title'
import { View } from 'react-native'
import { Container, Divider, MealCard, Status } from './styles'

interface DayListCardProps {
  listMeal: {
    date: string
    meals: {
      id: string
      name: string
      time: string
      onADiet: boolean
    }[]
  }
}

export function DayListCard({ listMeal }: DayListCardProps) {
  const { date, meals } = listMeal
  return (
    <Container>
      <View
        style={{
          paddingBottom: 6,
        }}
      >
        <Title fontSize="s">{date}</Title>
      </View>
      {meals.map((meal) => (
        <MealCard key={meal.id}>
          <Paragraph color="gray-100" fontSize="xs">
            {meal.time}
          </Paragraph>
          <Divider />
          <Paragraph color="gray-200" fontSize="m">
            {meal.name}
          </Paragraph>
          <Status onADiet={meal.onADiet} />
        </MealCard>
      ))}
    </Container>
  )
}
