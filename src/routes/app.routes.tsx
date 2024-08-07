import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'
import { Feedback } from '@screens/feedback'
import { Meal } from '@screens/meal'
import { MealDetail } from '@screens/meal-detail'
import { Statistics } from '@screens/statistics'
import { Home } from '../screens/home'

const { Navigator, Screen } = createNativeStackNavigator()

type ScreenProps = {
  name: string
  component: React.ComponentType
  options?: NativeStackNavigationOptions
}

const screens: ScreenProps[] = [
  {
    name: 'home',
    component: Home,
  },
  {
    name: 'statistics',
    component: Statistics,
  },
  {
    name: 'meal',
    component: Meal,
  },
  {
    name: 'meal-detail',
    component: MealDetail,
  },
  {
    name: 'feedback',
    component: Feedback,
  },
]

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {screens.map(({ name, component }) => {
        return <Screen key={name} name={name} component={component} />
      })}
    </Navigator>
  )
}
