import { Meal } from './group-meals-by-date'

export function getMealsInsideAndOutsideDiet(meals: Meal[]): {
  insideDiet: number
  outsideDiet: number
} {
  const insideDiet = meals.filter((meal) => meal.diet === 'inside').length
  const outsideDiet = meals.filter((meal) => meal.diet === 'outside').length

  return { insideDiet, outsideDiet }
}
