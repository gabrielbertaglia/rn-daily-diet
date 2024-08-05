import { Button } from '@components/button'
import { Diet } from '@components/card-diet/styles'
import { Header } from '@components/header'
import { Input } from '@components/input'
import { ButtonInDiet } from '@components/select-button'
import { Title } from '@components/title'
import { useState } from 'react'
import { View } from 'react-native'
import {
  ButtonContainer,
  ButtonInDietContainer,
  Column,
  Container,
  Form,
  Row,
} from './styles'

export function Meal() {
  const [selected, setSelected] = useState<Diet | null>(null)

  return (
    <>
      <Container>
        <Header title="Nova refeição" />
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
              Cadastrar refeição
            </Button>
          </ButtonContainer>
        </Form>
      </Container>
    </>
  )
}
