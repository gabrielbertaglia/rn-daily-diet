import { Analytics } from '@components/analytics'
import { Button } from '@components/button'
import { DayListCard } from '@components/day-list-card'
import { Paragraph } from '@components/paragraph'
import { useNavigation } from '@react-navigation/native'
import ArrowUpRight from 'phosphor-react-native/src/icons/ArrowUpRight'
import Plus from 'phosphor-react-native/src/icons/Plus'
import { FlatList } from 'react-native'
import LogoImg from '../../assets/logo.png'
import LogoAvatar from '../../assets/me.jpg'
import { listMeal } from '../../mocks/list-meal'
import {
  Avatar,
  Container,
  DayList,
  HeaderContent,
  Logo,
  NewMealContent,
} from './styles'

export function Home() {
  const navigation = useNavigation()

  function handleSeeStatistics() {
    navigation.navigate('statistics')
  }

  function handleNewMeal() {
    navigation.navigate('meal', {
      meal: null,
    })
  }

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
          data={listMeal}
          renderItem={({ item }) => <DayListCard listMeal={item} />}
          showsVerticalScrollIndicator={false}
        />
      </DayList>
    </Container>
  )
}
