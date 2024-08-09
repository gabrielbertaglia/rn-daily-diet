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
      </Container>
    </>
  )
}
