import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '@storage/storage-config'
import { MealDetail } from 'src/@types/meal'
import { getAllMeals } from './get-all-meals'

export async function createMeal(newMeal: MealDetail) {
  try {
    const storageMeals: MealDetail[] = await getAllMeals()

    const storage = JSON.stringify([...storageMeals, newMeal])

    await AsyncStorage.setItem(MEAL_COLLECTION, storage)
  } catch (error) {
    return error
  }
}
