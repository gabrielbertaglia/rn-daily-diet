import { Diet } from '@components/card-diet/styles'
import { compareDesc, parse } from 'date-fns'

export interface Meal {
  id: string
  name: string
  time: string
  description: string
  diet: Diet
  date: string
}

export interface MealGroup {
  date: string
  meals: Meal[]
}

export function groupMealsByDate(meals: Meal[]): MealGroup[] {
  return meals
    .reduce((acc: MealGroup[], current: Meal) => {
      const date = current.date
      const existingGroup = acc.find((group) => group.date === date)

      if (existingGroup) {
        existingGroup.meals.push(current)
      } else {
        acc.push({ date, meals: [current] })
      }

      return acc
    }, [])
    .sort((a, b) => {
      const dateA = parse(a.date, 'dd/MM/yyyy', new Date())
      const dateB = parse(b.date, 'dd/MM/yyyy', new Date())
      return compareDesc(dateA, dateB)
    })
}
