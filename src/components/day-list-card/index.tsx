import { Diet } from '@components/card-diet/styles'
import { Paragraph } from '@components/paragraph'
import { useNavigation } from '@react-navigation/native'
import { MealDetail } from 'src/@types/meal'
import { Container, Divider, MealCard, Status } from './styles'

interface DayListCardProps {
  data: {
    date: string
    id: string
    name: string
    time: string
    diet: Diet
    description: string
    createdAt: string
  }
}

export function DayListCard({ data }: DayListCardProps) {
  const { diet, id, name, time } = data
  const navigation = useNavigation()

  function handleMealDetails(meal: MealDetail) {
    navigation.navigate('meal-detail', { meal })
  }

  return (
    <Container>
      <MealCard key={id} onPress={() => handleMealDetails(data)}>
        <Paragraph color="gray-100" fontSize="xs">
          {time}
        </Paragraph>
        <Divider />
        <Paragraph color="gray-200" fontSize="m">
          {name}
        </Paragraph>
        <Status diet={diet} />
      </MealCard>
    </Container>
  )
}
