import { Text } from 'react-native'
import { useTheme } from 'styled-components/native'
import { Container } from './styles'

export function Home() {
  const theme = useTheme()
  return (
    <Container>
      <Text
        style={{
          fontFamily: theme['font-family'].bold,
        }}
      >
        Home
      </Text>
    </Container>
  )
}
