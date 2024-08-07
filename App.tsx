/* eslint-disable camelcase */
import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from '@expo-google-fonts/nunito-sans'
import { MealDetail } from '@screens/meal-detail'
import { Text, View } from 'react-native'
import theme from 'src/theme'
import { ThemeProvider } from 'styled-components'

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })
  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? (
        // <Routes />
        <MealDetail />
      ) : (
        <View>
          <Text>Carregando</Text>
        </View>
      )}
    </ThemeProvider>
  )
}
