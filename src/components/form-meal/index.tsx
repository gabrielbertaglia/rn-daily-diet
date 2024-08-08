import { Button } from '@components/button'
import { Input } from '@components/input'
import { Title } from '@components/title'
import { View } from 'react-native'

import { Paragraph } from '@components/paragraph'
import { ButtonInDiet } from '@components/select-button'
import { zodResolver } from '@hookform/resolvers/zod'
import { RouteMealParams } from '@screens/meal'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  ButtonContainer,
  ButtonInDietContainer,
  Column,
  Form,
  Row,
} from './styles'

enum Diet {
  inside = 'inside',
  outside = 'outside',
}

const mealFormValidation = z.object({
  name: z.string().min(1, 'Informe o nome da refeição'),
  description: z.string().min(1, 'Informe a descrição da refeição'),
  date: z.string().date('Informe a data'),
  time: z.string().time('Informe o horário'),
  diet: z.nativeEnum(Diet, {
    errorMap: () => {
      return { message: 'Informe se está dentro da dieta ou não' }
    },
  }),
})

export type MealType = z.infer<typeof mealFormValidation>

type ConfirmMealFormData = MealType

export function FormMeal({ meal }: RouteMealParams) {
  console.log('meal', meal?.name ?? '')
  const mealForm = useForm<ConfirmMealFormData>({
    resolver: zodResolver(mealFormValidation),
    defaultValues: {
      name: meal?.name ?? '',
      date: meal?.date ?? '',
      time: meal?.time ?? '',
      description: meal?.description ?? '',
      diet:
        meal?.diet === 'inside'
          ? Diet.inside
          : meal?.diet === 'outside'
            ? Diet.outside
            : undefined,
    },
  })

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = mealForm

  console.log('errors', errors.diet)

  function handleCreateOrEditMeal(data: ConfirmMealFormData) {
    console.log('data', data)
  }

  return (
    <Form>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <Input
            error={errors.name?.message}
            title="Nome"
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <View
        style={{
          paddingVertical: 24,
        }}
      >
        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, value } }) => (
            <Input
              textAlignVertical="top"
              error={errors.description?.message}
              title="Descrição"
              multiline
              onChangeText={onChange}
              value={value}
              numberOfLines={4}
            />
          )}
        />
      </View>

      <Row>
        <Column>
          <Controller
            control={control}
            name="date"
            render={({ field: { onChange, value } }) => (
              <Input
                title="Data"
                error={errors.date?.message}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        </Column>
        <Column>
          <Controller
            control={control}
            name="time"
            render={({ field: { onChange, value } }) => (
              <Input
                title="Hora"
                error={errors.time?.message}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
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
            <Controller
              control={control}
              name="diet"
              render={({ field: { onChange, value } }) => (
                <ButtonInDiet
                  diet="inside"
                  title="Sim"
                  selected={value === Diet.inside}
                  onPress={() => onChange(Diet.inside)}
                />
              )}
            />
          </Column>
          <Column>
            <Controller
              control={control}
              name="diet"
              render={({ field: { onChange, value } }) => (
                <ButtonInDiet
                  diet="outside"
                  title="Sim"
                  selected={value === Diet.outside}
                  onPress={() => onChange(Diet.outside)}
                />
              )}
            />
          </Column>
        </Row>
        {errors.diet && (
          <Paragraph color="red-dark" fontSize="s">
            {errors.diet.message}
          </Paragraph>
        )}
      </ButtonInDietContainer>
      <ButtonContainer>
        <Button
          fullWidth
          color="white"
          fontSize="m"
          fontFamily="bold"
          onPress={handleSubmit(handleCreateOrEditMeal)}
        >
          {meal === null ? 'Cadastrar refeição' : 'Salvar refeição'}
        </Button>
      </ButtonContainer>
    </Form>
  )
}
