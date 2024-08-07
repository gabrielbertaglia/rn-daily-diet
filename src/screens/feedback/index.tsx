import { Button } from '@components/button'
import { Paragraph } from '@components/paragraph'
import { Title } from '@components/title'
import FeedbackPositive from '../../assets/feedback-positive.png'
import {
  Container,
  ContentButton,
  ContentHeader,
  ContentImage,
  FeedbackImage,
} from './styles'
// import FeedbackNegative from '../../assets/feedback-negative.png'

export function Feedback() {
  return (
    <Container>
      <ContentHeader>
        <Title fontSize="m" color="green-dark">
          Continue assim!
        </Title>
        <Paragraph fontSize="m" color="gray-100">
          Você continua{' '}
          <Paragraph color="gray-200" fontSize="m" fontFamily="bold">
            dentro da dieta.
          </Paragraph>{' '}
          Muito bem!
        </Paragraph>
      </ContentHeader>
      <ContentImage>
        <FeedbackImage source={FeedbackPositive} />
      </ContentImage>
      <ContentButton>
        <Button color="white" fontSize="m" fontFamily="bold">
          Ir para a página inicial
        </Button>
      </ContentButton>
    </Container>
  )
}
