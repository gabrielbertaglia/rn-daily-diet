import { Title } from '@components/title'
import { useNavigation } from '@react-navigation/native'
import ArrowLeft from 'phosphor-react-native/src/icons/ArrowLeft'
import { TouchableOpacity } from 'react-native'
import { Container } from './styles'

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  const navigation = useNavigation()

  function handleGoToHome() {
    navigation.navigate('home')
  }

  return (
    <Container>
      <TouchableOpacity onPress={handleGoToHome}>
        <ArrowLeft />
      </TouchableOpacity>
      <Title
        fontSize="s"
        style={{
          flex: 1,
          textAlign: 'center',
        }}
      >
        {title}
      </Title>
    </Container>
  )
}
