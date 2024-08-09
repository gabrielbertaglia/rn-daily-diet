import { Meal } from './group-meals-by-date'

export function calculateDietPercentage(meals: Meal[]): {
  title: string
  subtitle: string
  percentage: number
} {
  const insideDietMeals = meals.filter((meal) => meal.diet === 'inside')
  const totalInsideDietMeals = insideDietMeals.length

  if (totalInsideDietMeals === 0) {
    return {
      title: '0%',
      subtitle: 'das refeições dentro da dieta',
      percentage: 0,
    }
  } else {
    const insideDietPercentage = (totalInsideDietMeals / meals.length) * 100
    const formattedPercentage =
      insideDietPercentage % 1 === 0
        ? insideDietPercentage.toFixed(0)
        : insideDietPercentage.toFixed(2)

    return {
      title: `${formattedPercentage}%`,
      subtitle: 'das refeições dentro da dieta',
      percentage: insideDietPercentage,
    }
  }
}
