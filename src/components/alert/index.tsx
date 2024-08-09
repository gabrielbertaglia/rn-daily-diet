import { Button } from '@components/button'
import { Title } from '@components/title'
import Modal from 'react-native-modal'
import { Container, ContentButton } from './styles'

interface AlertProps {
  isModalVisible: boolean
  title: string
  onAccept: () => void
  onReject: () => void
}

export function Alert({
  isModalVisible = false,
  title,
  onReject,
  onAccept,
}: AlertProps) {
  return (
    <Modal isVisible={isModalVisible}>
      <Container>
        <Title fontSize="s" style={{ textAlign: 'center', maxWidth: '90%' }}>
          {title}
        </Title>
        {/* <Button title="Hide modal" onPress={toggleModal} /> */}
        <ContentButton>
          <Button
            flex
            color="gray-100"
            variant="secondary"
            fontSize="s"
            onPress={onReject}
            fontFamily="bold"
            fullWidth
          >
            Cancelar
          </Button>

          <Button
            flex
            color="white"
            variant="primary"
            fontSize="s"
            fontFamily="bold"
            onPress={onAccept}
            fullWidth
          >
            Sim, exluir
          </Button>
        </ContentButton>
      </Container>
    </Modal>
  )
}
