import { Meal } from './meal'

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      statistics: undefined
      meal: {
        meal: Meal | null
      }
      feedback: {
        diet: 'inside' | 'outside'
      }
      'meal-detail': {
        meal: Meal
      }
    }
  }
}
