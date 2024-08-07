import { Diet } from '@components/card-diet/styles'
import { compareDesc, parse } from 'date-fns'
import { meals } from './meals'

export interface Meal {
  id: string
  name: string
  time: string
  description: string
  diet: Diet
}

interface MealGroup {
  date: string
  meals: Meal[]
}

export const listMeal = meals.reduce<MealGroup[]>((acc, current) => {
  const existingDate = acc.find((item) => item.date === current.date)
  if (existingDate) {
    existingDate.meals.push({
      id: current.id,
      name: current.name,
      time: current.time,
      diet: current.diet,
      description: current.description,
    })
  } else {
    acc.push({
      date: current.date,
      meals: [
        {
          id: current.id,
          description: current.description,
          name: current.name,
          time: current.time,
          diet: current.diet,
        },
      ],
    })
  }
  return acc
}, [])

listMeal.sort((a, b) => {
  const dateA = parse(a.date, 'dd/MM/yyyy', new Date())
  const dateB = parse(b.date, 'dd/MM/yyyy', new Date())
  return compareDesc(dateA, dateB)
})
