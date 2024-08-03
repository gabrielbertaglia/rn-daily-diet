import { Analytics } from '@components/analytics'
import { Button } from '@components/button'
import { DayListCard } from '@components/day-list-card'
import { Paragraph } from '@components/paragraph'
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
  console.log(listMeal)
  return (
    <Container>
      <HeaderContent>
        <Logo source={LogoImg} />
        <Avatar source={LogoAvatar} />
      </HeaderContent>

      <Analytics.Root color="green-light">
        <Analytics.Content />
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
        >
          Nova refeição
        </Button>
      </NewMealContent>
      <DayList>
        <FlatList
          data={listMeal}
          renderItem={({ item }) => <DayListCard listMeal={item} />}
        />
      </DayList>
    </Container>
  )
}
