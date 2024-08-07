import { Diet } from '@components/card-diet/styles'

export interface MealDetail {
  id: string
  name: string
  description: string
  date: string
  time: string
  diet: Diet
}
