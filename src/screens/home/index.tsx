import { Analytics } from '@components/analytics'
import { Button } from '@components/button'
import { DayListCard } from '@components/day-list-card'
import { Paragraph } from '@components/paragraph'
import { Title } from '@components/title'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { getAllMeals } from '@storage/meal/get-all-meals'
import { calculateDietPercentage } from '@utils/calculate-diet-percentage'
import { groupMealsByDate, Meal } from '@utils/group-meals-by-date'
import ArrowUpRight from 'phosphor-react-native/src/icons/ArrowUpRight'
import Plus from 'phosphor-react-native/src/icons/Plus'
import { useCallback, useState } from 'react'
import { SectionList } from 'react-native'
import LogoImg from '../../assets/logo.png'
import LogoAvatar from '../../assets/me.jpg'
import {
  Avatar,
  Container,
  DayList,
  HeaderContent,
  Logo,
  NewMealContent,
} from './styles'

export function Home() {
  const [meals, setMeals] = useState<Meal[]>([])

  const navigation = useNavigation()
  const groupedMeals = groupMealsByDate(meals)

  const { title, subtitle, percentage } = calculateDietPercentage(meals)

  function handleSeeStatistics() {
    navigation.navigate('statistics', { meals })
  }

  function handleNewMeal() {
    navigation.navigate('meal', {
      meal: null,
    })
  }

  async function fetchMeals() {
    try {
      const data = await getAllMeals()
      setMeals(data)
    } catch (error) {
      console.log(error)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals()
    }, []),
  )

  return (
    <Container>
      <HeaderContent>
        <Logo source={LogoImg} />
        <Avatar source={LogoAvatar} />
      </HeaderContent>

      <Analytics.Root
        isTouchable
        color={percentage >= 50 ? 'green-light' : 'red-light'}
        onPress={handleSeeStatistics}
      >
        <Analytics.Content title={title} subtitle={subtitle} />
        <Analytics.Action
          icon={ArrowUpRight}
          color={percentage >= 50 ? 'green-dark' : 'red-dark'}
        />
      </Analytics.Root>

      <NewMealContent>
        <Paragraph color="gray-100" fontSize="m">
          Refeições
        </Paragraph>
        <Button
          icon={Plus}
          color="white"
          fontSize="s"
          fontFamily="bold"
          fullWidth
          onPress={handleNewMeal}
        >
          Nova refeição
        </Button>
      </NewMealContent>
      <DayList>
        <SectionList
          style={{
            paddingBottom: 32,
          }}
          sections={groupedMeals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <DayListCard data={item} />}
          renderSectionHeader={({ section: { date } }) => (
            <Title
              fontSize="s"
              style={{
                paddingTop: 32,
              }}
            >
              {date}
            </Title>
          )}
        />
      </DayList>
    </Container>
  )
}
