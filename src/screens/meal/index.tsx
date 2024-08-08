import { FormMeal } from '@components/form-meal'
import { Header } from '@components/header'
import { useRoute } from '@react-navigation/native'
import { MealDetail } from 'src/@types/meal'
import { Container } from './styles'

export interface RouteMealParams {
  meal: MealDetail | null
}

export function Meal() {
  // const [selected, setSelected] = useState<Diet | null>(null)
  // const { control, handleSubmit } = useForm()

  const route = useRoute()

  const { meal } = route.params as RouteMealParams

  return (
    <>
      <Container>
        <Header title={meal === null ? 'Nova refeição' : 'Editar refeição'} />
        <FormMeal meal={meal} />
        {/* <Form>
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
        </Form> */}
      </Container>
    </>
  )
}
