import { Analytics } from '@components/analytics'
import { Button } from '@components/button'
import { DayListCard } from '@components/day-list-card'
import { Paragraph } from '@components/paragraph'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { getAllMeals } from '@storage/meal/get-all-meals'
import { groupMealsByDate, Meal } from '@utils/group-meals-by-date'
import ArrowUpRight from 'phosphor-react-native/src/icons/ArrowUpRight'
import Plus from 'phosphor-react-native/src/icons/Plus'
import { useCallback, useState } from 'react'
import { FlatList } from 'react-native'
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

  function handleSeeStatistics() {
    navigation.navigate('statistics')
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
        color="green-light"
        onPress={handleSeeStatistics}
      >
        <Analytics.Content
          title="90,86%"
          subtitle="das refeições dentro da dieta"
        />
        <Analytics.Action icon={ArrowUpRight} color="green-dark" />
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
        <FlatList
          data={groupedMeals}
          renderItem={({ item }) => <DayListCard listMeal={item} />}
          showsVerticalScrollIndicator={false}
        />
      </DayList>
    </Container>
  )
}
