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

import PencilSimpleLine from 'phosphor-react-native/src/icons/PencilSimpleLine'
import Trash from 'phosphor-react-native/src/icons/Trash'

export function MealDetail() {
  return (
    <Container>
      <Header title="Refeição" />
      <Content>
        <ContentDetail>
          <Title fontSize="m" fontFamily="bold">
            Sanduíche
          </Title>
          <Paragraph color="gray-200" fontSize="m">
            Sanduíche de pão integral com atum e salada de alface e tomate
          </Paragraph>
        </ContentDetail>
        <ContentDetailTime>
          <Title fontSize="xs" fontFamily="bold">
            Data e hora
          </Title>
          <Paragraph color="gray-200" fontSize="m">
            12/08/2022 às 16:00
          </Paragraph>
        </ContentDetailTime>
        <Tag>
          <TagStatus />
          <Paragraph color="gray-100" fontSize="s">
            dentro da dieta
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
