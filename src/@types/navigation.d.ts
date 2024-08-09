import { MealDetail } from './meal'

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      statistics: {
        meals: Meal[]
      }
      meal: {
        meal: MealDetail | null
      }
      feedback: {
        diet: 'inside' | 'outside'
      }
      'meal-detail': {
        meal: MealDetail
      }
    }
  }
}
