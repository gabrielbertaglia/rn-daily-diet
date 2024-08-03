import { Analytics } from '@components/analytics'
import ArrowLeft from 'phosphor-react-native/src/icons/ArrowLeft'
import { Container, Header } from './styles'

export function Statistics() {
  return (
    <Container>
      <Header>
        <Analytics.Root color="green-light">
          <Analytics.Content
            title="90,86%"
            subtitle="das refeições dentro da dieta"
          />
          <Analytics.Action icon={ArrowLeft} leftOrRight="left" />
        </Analytics.Root>
      </Header>
    </Container>
  )
}
