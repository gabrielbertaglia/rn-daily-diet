/* eslint-disable camelcase */
import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from '@expo-google-fonts/nunito-sans'
import { Routes } from '@routes/index'
import { StatusBar, Text, View } from 'react-native'
import theme from 'src/theme'
import { ThemeProvider } from 'styled-components'

import 'react-native-get-random-values'

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? (
        <Routes />
      ) : (
        <View>
          <Text>Carregando</Text>
        </View>
      )}
    </ThemeProvider>
  )
}
