import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '@storage/storage-config'
import { MealDetail } from 'src/@types/meal'
import { getAllMeals } from './get-all-meals'

export async function removeMeal(id: string) {
  try {
    const storageMeals: MealDetail[] = await getAllMeals()
    const meals = storageMeals.filter((meal) => meal.id !== id)
    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(meals))
  } catch (error) {
    return error
  }
}
