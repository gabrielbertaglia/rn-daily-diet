import { Analytics } from '@components/analytics'
import { CardDiet } from '@components/card-diet'
import { Title } from '@components/title'
import ArrowLeft from 'phosphor-react-native/src/icons/ArrowLeft'
import { Container, Content, ContentTotalMeal, Header } from './styles'

export function Statistics() {
  return (
    <Container>
      <Header>
        <Analytics.Root color="green-light">
          <Analytics.Content
            title="90,86%"
            subtitle="das refeições dentro da dieta"
          />
          <Analytics.Action icon={ArrowLeft} leftOrRight="left" />
        </Analytics.Root>
      </Header>
      <Content>
        <Title fontSize="xs">Estatísticas gerais</Title>
        <Analytics.Root
          style={{
            marginTop: 24,
            marginBottom: 12,
          }}
        >
          <Analytics.Content
            title="22"
            subtitle="melhor sequência de pratos dentro da dieta"
          />
        </Analytics.Root>
        <Analytics.Root>
          <Analytics.Content title="109" subtitle="refeições registradas" />
        </Analytics.Root>
      </Content>
      <ContentTotalMeal>
        <CardDiet
          diet="inside"
          description="refeições dentro da dieta"
          title="99"
        />
        <CardDiet
          diet="outside"
          description="refeições fora da dieta"
          title="10"
        />
      </ContentTotalMeal>
    </Container>
  )
}
