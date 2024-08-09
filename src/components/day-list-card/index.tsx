import { Diet } from '@components/card-diet/styles'
import { Paragraph } from '@components/paragraph'
import { Title } from '@components/title'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'
import { MealDetail } from 'src/@types/meal'
import { Container, Divider, MealCard, Status } from './styles'

interface DayListCardProps {
  listMeal: {
    date: string
    meals: {
      id: string
      name: string
      time: string
      date: string
      diet: Diet
      description: string
    }[]
  }
}

export function DayListCard({ listMeal }: DayListCardProps) {
  const { date, meals } = listMeal
  const navigation = useNavigation()

  // let newMeal = {} as MealDetail

  // function newMealArray() {
  //   for (let i = 0; i < meals.length; i++) {
  //     const meal = meals[i]
  //     newMeal = {
  //       id: meal.id,
  //       date,
  //       name: meal.name,
  //       time: meal.time,
  //       diet: meal.diet,
  //       description: meal.description,
  //     }
  //   }
  //   return newMeal
  // }

  // const dataMeal = newMealArray()

  function handleMealDetails(meal: MealDetail) {
    navigation.navigate('meal-detail', { meal })
  }

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
        <MealCard key={meal.id} onPress={() => handleMealDetails(meal)}>
          <Paragraph color="gray-100" fontSize="xs">
            {meal.time}
          </Paragraph>
          <Divider />
          <Paragraph color="gray-200" fontSize="m">
            {meal.name}
          </Paragraph>
          <Status diet={meal.diet} />
        </MealCard>
      ))}
    </Container>
  )
}
