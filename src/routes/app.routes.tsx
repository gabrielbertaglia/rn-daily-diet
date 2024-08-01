import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'
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
