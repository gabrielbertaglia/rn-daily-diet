import { Diet } from '@components/card-diet/styles'
import { compareAsc, compareDesc, format, parse, parseISO } from 'date-fns'

export interface Meal {
  id: string
  name: string
  time: string
  description: string
  diet: Diet
  date: string
  createdAt: string
}

export interface MealGroup {
  date: string
  meals: Meal[]
}

export function groupMealsByDate(meals: Meal[]): MealGroup[] {
  return meals
    .reduce((acc: MealGroup[], current: Meal) => {
      const date = current.date
      if (!date) {
        throw new Error(`Meal ${current.id} has no date`)
      }
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
    .map((group) => ({
      ...group,
      meals: group.meals.sort((a, b) => {
        const baseDate = (date: string) =>
          format(parse(date, 'dd/MM/yyyy', new Date()), 'yyyy-MM-dd')
        const dateTimeA = parseISO(`${baseDate(a.date)}T${a.time}:00.000Z`)
        const dateTimeB = parseISO(`${baseDate(b.date)}T${b.time}:00.000Z`)
        return compareAsc(dateTimeA, dateTimeB)
      }),
    }))
}
