import { compareAsc } from 'date-fns'
import { meals } from './meals'

export const listMeal: {
  date: string
  meals: {
    id: string
    name: string
    time: string
    onADiet: boolean
  }[]
}[] = []

const result = meals.reduce((acc, current) => {
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
  return acc.sort((a, b) => compareAsc(new Date(a.date), new Date(b.date)))
}, listMeal)

const sortedResult = [...result].sort((a, b) =>
  compareAsc(new Date(a.date), new Date(b.date)),
)

console.log('sortedResult', sortedResult)
