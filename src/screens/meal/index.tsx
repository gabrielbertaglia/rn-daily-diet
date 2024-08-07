import { Button } from '@components/button'
import { Diet } from '@components/card-diet/styles'
import { Header } from '@components/header'
import { Input } from '@components/input'
import { ButtonInDiet } from '@components/select-button'
import { Title } from '@components/title'
import { useRoute } from '@react-navigation/native'
import { useState } from 'react'
import { View } from 'react-native'
import { MealDetail } from 'src/@types/meal'
import {
  ButtonContainer,
  ButtonInDietContainer,
  Column,
  Container,
  Form,
  Row,
} from './styles'

interface RouteMealParams {
  meal: MealDetail | null
}

export function Meal() {
  const [selected, setSelected] = useState<Diet | null>(null)

  const route = useRoute()

  const { meal } = route.params as RouteMealParams

  return (
    <>
      <Container>
        <Header title={meal === null ? 'Nova refeição' : 'Editar refeição'} />
        <Form>
          <Input title="Name" />
          <View
            style={{
              paddingVertical: 24,
            }}
          >
            <Input title="Description" multiline numberOfLines={4} />
          </View>

          <Row>
            <Column>
              <Input title="Data" />
            </Column>
            <Column>
              <Input title="Hora" />
            </Column>
          </Row>
          <ButtonInDietContainer>
            <Title
              fontSize="xs"
              style={{
                marginBottom: 8,
              }}
            >
              Está dentro da dieta?
            </Title>
            <Row>
              <Column>
                <ButtonInDiet
                  selected={selected === 'inside'}
                  onPress={() => setSelected('inside')}
                  diet="inside"
                  title="Sim"
                />
              </Column>
              <Column>
                <ButtonInDiet
                  selected={selected === 'outside'}
                  onPress={() => setSelected('outside')}
                  diet="outside"
                  title="Não"
                />
              </Column>
            </Row>
          </ButtonInDietContainer>
          <ButtonContainer>
            <Button fullWidth color="white" fontSize="m" fontFamily="bold">
              {meal === null ? 'Cadastrar refeição' : 'Salvar refeição'}
            </Button>
          </ButtonContainer>
        </Form>
      </Container>
    </>
  )
}
