import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '@storage/storage-config'
import { MealDetail } from 'src/@types/meal'
import { getAllMeals } from './get-all-meals'

export async function editMeal(meal: MealDetail, id: string) {
  try {
    const storageMeals: MealDetail[] = await getAllMeals()
    const updatedMeal = storageMeals.filter((meal) => meal.id !== id)
    updatedMeal.push({ ...meal, id })
    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedMeal))
  } catch (error) {
    return error
  }
}
