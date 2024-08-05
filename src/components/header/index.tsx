import { Title } from '@components/title'
import ArrowLeft from 'phosphor-react-native/src/icons/ArrowLeft'
import { TouchableOpacity } from 'react-native'
import { Container } from './styles'

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  return (
    <Container>
      <TouchableOpacity>
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
