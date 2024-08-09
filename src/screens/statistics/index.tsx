import { Analytics } from '@components/analytics'
import { Card } from '@components/card'
import { CardDiet } from '@components/card-diet'
import { Title } from '@components/title'
import { useNavigation, useRoute } from '@react-navigation/native'
import { calculateDietPercentage } from '@utils/calculate-diet-percentage'
import { getMealsInsideAndOutsideDiet } from '@utils/get-meals-inside-and-outside-diet'
import { Meal } from '@utils/group-meals-by-date'
import ArrowLeft from 'phosphor-react-native/src/icons/ArrowLeft'
import {
  Container,
  Content,
  ContentAll,
  ContentTotalMeal,
  Header,
} from './styles'

interface RouteStatisticsParams {
  meals: Meal[]
}

export function Statistics() {
  const navigation = useNavigation()
  const route = useRoute()

  const { meals } = route?.params as RouteStatisticsParams

  const { title, subtitle, percentage } = calculateDietPercentage(meals)

  const { insideDiet, outsideDiet } = getMealsInsideAndOutsideDiet(meals)

  function handleGoBack() {
    navigation.goBack()
  }

  function getBestSequence(meals: Meal[]): number {
    let bestSequence = 0
    let currentSequence = 0

    meals.forEach((meal) => {
      if (meal.diet === 'inside') {
        currentSequence++
        bestSequence = Math.max(bestSequence, currentSequence)
      } else {
        currentSequence = 0
      }
    })

    return bestSequence
  }

  const bestSequence = getBestSequence(meals)

  return (
    <Container>
      <Header color={percentage >= 50 ? 'green-light' : 'red-light'}>
        <Analytics.Root
          color={percentage >= 50 ? 'green-light' : 'red-light'}
          isTouchable={false}
        >
          <Analytics.Content title={title} subtitle={subtitle} />
          <Analytics.Action
            icon={ArrowLeft}
            leftOrRight="left"
            onPress={handleGoBack}
            color={percentage >= 50 ? 'green-dark' : 'red-dark'}
          />
        </Analytics.Root>
      </Header>
      <ContentAll>
        <Content>
          <Title
            fontSize="xs"
            style={{
              marginBottom: 12,
            }}
          >
            Estatísticas gerais
          </Title>
          <Card
            title={bestSequence.toString()}
            description="melhor sequência de pratos dentro da dieta"
          />
          <Card
            title={meals.length.toString()}
            description="refeições registradas"
          />
        </Content>
        <ContentTotalMeal>
          <CardDiet
            diet="inside"
            description="refeições dentro da dieta"
            title={insideDiet.toString()}
          />
          <CardDiet
            diet="outside"
            description="refeições fora da dieta"
            title={outsideDiet.toString()}
          />
        </ContentTotalMeal>
      </ContentAll>
    </Container>
  )
}
