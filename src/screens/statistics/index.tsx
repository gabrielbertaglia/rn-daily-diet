import { Analytics } from '@components/analytics'
import { Card } from '@components/card'
import { CardDiet } from '@components/card-diet'
import { Title } from '@components/title'
import { useNavigation } from '@react-navigation/native'
import ArrowLeft from 'phosphor-react-native/src/icons/ArrowLeft'
import {
  Container,
  Content,
  ContentAll,
  ContentTotalMeal,
  Header,
} from './styles'

export function Statistics() {
  const navigation = useNavigation()
  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <Container>
      <Header>
        <Analytics.Root color="green-light" isTouchable={false}>
          <Analytics.Content
            title="90,86%"
            subtitle="das refeições dentro da dieta"
          />
          <Analytics.Action
            icon={ArrowLeft}
            leftOrRight="left"
            onPress={handleGoBack}
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
            title="22"
            description="melhor sequência de pratos dentro da dieta"
          />
          <Card title="109" description="refeições registradas" />
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
      </ContentAll>
    </Container>
  )
}
