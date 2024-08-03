import { compareDesc, parse } from 'date-fns'
import { meals } from './meals'

interface Meal {
  id: string
  name: string
  time: string
  onADiet: boolean
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
      onADiet: current.onADiet,
    })
  } else {
    acc.push({
      date: current.date,
      meals: [
        {
          id: current.id,
          name: current.name,
          time: current.time,
          onADiet: current.onADiet,
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
