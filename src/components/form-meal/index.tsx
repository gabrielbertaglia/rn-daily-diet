import { Button } from '@components/button'
import { Input } from '@components/input'
import { Title } from '@components/title'
import { Alert, View } from 'react-native'

import { KeyboardAvoidingContainer } from '@components/KeyboardAvoidingContainer'
import { Paragraph } from '@components/paragraph'
import { ButtonInDiet } from '@components/select-button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigation } from '@react-navigation/native'
import { RouteMealParams } from '@screens/meal'
import { createMeal } from '@storage/meal/create-meal'
import { AppError } from '@utils/app-error'
import { isValid, parse } from 'date-fns'
import { Controller, useForm } from 'react-hook-form'
import uuid from 'react-native-uuid'
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
  date: z.string().refine((value) => {
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/
    if (!dateRegex.test(value)) {
      return false
    }
    const date = parse(value, 'dd/MM/yyyy', new Date())
    return isValid(date)
  }, 'Informe a data'),
  time: z.string().refine((value) => {
    const [hours, minutes] = value.split(':')
    return isValid(new Date(0, 0, 0, parseInt(hours), parseInt(minutes)))
  }, 'Informe o horário'),
  diet: z.nativeEnum(Diet, {
    errorMap: () => {
      return { message: 'Informe se está dentro da dieta ou não' }
    },
  }),
})

export type MealType = z.infer<typeof mealFormValidation>

type ConfirmMealFormData = MealType

export function FormMeal({ meal }: RouteMealParams) {
  const navigation = useNavigation()

  const defaultValues = {
    name: '',
    description: '',
    date: '',
    time: '',
    diet: undefined,
  }

  const mealForm = useForm<ConfirmMealFormData>({
    resolver: zodResolver(mealFormValidation),
    defaultValues: {
      name: meal?.name ?? defaultValues.name,
      date: meal?.date ?? defaultValues.date,
      time: meal?.time ?? defaultValues.time,
      description: meal?.description ?? defaultValues.description,
      diet:
        meal?.diet === 'inside'
          ? Diet.inside
          : meal?.diet === 'outside'
            ? Diet.outside
            : defaultValues.diet,
    },
  })

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = mealForm

  async function handleCreateOrEditMeal(data: ConfirmMealFormData) {
    try {
      const id = uuid.v4().toString()
      const meal = { id, ...data }

      await createMeal(meal)
      navigation.navigate('feedback', { diet: data.diet })
      reset(defaultValues)
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova refeição', error.message)
        return
      }
      Alert.alert('Nova refeição', 'Não foi possível criar uma refeição')
      console.log(error)
    }
  }

  return (
    <Form>
      {/* <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      > */}
      <KeyboardAvoidingContainer>
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
                    title="Não"
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
      </KeyboardAvoidingContainer>
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
