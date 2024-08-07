import { Button } from '@components/button'
import { Header } from '@components/header'
import { Paragraph } from '@components/paragraph'
import { Title } from '@components/title'
import {
  Container,
  Content,
  ContentButton,
  ContentDetail,
  ContentDetailTime,
  Tag,
  TagStatus,
} from './styles'

import { useRoute } from '@react-navigation/native'
import PencilSimpleLine from 'phosphor-react-native/src/icons/PencilSimpleLine'
import Trash from 'phosphor-react-native/src/icons/Trash'
import { MealDetail as MealDetailProps } from 'src/@types/meal'

interface RouteMealDetailParams {
  meal: MealDetailProps
}

export function MealDetail() {
  const route = useRoute()

  const { meal } = route.params as RouteMealDetailParams
  const { date, description, name, diet, time } = meal

  return (
    <Container>
      <Header title="Refeição" />
      <Content>
        <ContentDetail>
          <Title fontSize="m" fontFamily="bold">
            {name}
          </Title>
          <Paragraph color="gray-200" fontSize="m">
            {description}
          </Paragraph>
        </ContentDetail>
        <ContentDetailTime>
          <Title fontSize="xs" fontFamily="bold">
            Data e hora
          </Title>
          <Paragraph color="gray-200" fontSize="m">
            {date} às {time}
          </Paragraph>
        </ContentDetailTime>
        <Tag>
          <TagStatus color={diet === 'inside' ? 'green-dark' : 'red-dark'} />
          <Paragraph color="gray-100" fontSize="s">
            {diet === 'inside' ? 'dentro da dieta' : 'fora da dieta'}
          </Paragraph>
        </Tag>

        <ContentButton>
          <Button
            fontSize="s"
            fullWidth
            color="white"
            fontFamily="bold"
            icon={PencilSimpleLine}
          >
            Editar refeição
          </Button>
          <Button
            variant="secondary"
            fontSize="s"
            fullWidth
            color="gray-100"
            fontFamily="bold"
            icon={Trash}
          >
            Excluir refeição
          </Button>
        </ContentButton>
      </Content>
    </Container>
  )
}
