import { Button } from '@components/button'
import { Diet } from '@components/card-diet/styles'
import { Paragraph } from '@components/paragraph'
import { Title } from '@components/title'
import { useNavigation, useRoute } from '@react-navigation/native'
import FeedbackNegative from '../../assets/feedback-negative.png'
import FeedbackPositive from '../../assets/feedback-positive.png'
import {
  Container,
  ContentButton,
  ContentHeader,
  ContentImage,
  FeedbackImage,
} from './styles'

interface RouteFeedbackParams {
  diet: Diet
}

export function Feedback() {
  const route = useRoute()
  const navigation = useNavigation()

  const { diet } = route.params as RouteFeedbackParams

  const feedbackPositive = diet === 'inside'

  function handleGoToHome() {
    navigation.navigate('home')
  }

  return (
    <Container>
      <ContentHeader>
        <Title
          fontSize="m"
          color={feedbackPositive ? 'green-dark' : 'red-dark'}
        >
          {feedbackPositive ? 'Continue assim!' : 'Que pena!'}
        </Title>
        {feedbackPositive ? (
          <Paragraph
            style={{ textAlign: 'center' }}
            fontSize="m"
            color="gray-100"
          >
            Você continua{' '}
            <Paragraph color="gray-200" fontSize="m" fontFamily="bold">
              dentro da dieta.
            </Paragraph>{' '}
            Muito bem!
          </Paragraph>
        ) : (
          <Paragraph
            style={{ textAlign: 'center' }}
            fontSize="m"
            color="gray-100"
          >
            Você{' '}
            <Paragraph color="gray-200" fontSize="m" fontFamily="bold">
              saiu da dieta.
            </Paragraph>{' '}
            dessa vez, mas continue se esforçando e não desista!
          </Paragraph>
        )}
      </ContentHeader>
      <ContentImage>
        <FeedbackImage
          source={feedbackPositive ? FeedbackPositive : FeedbackNegative}
        />
      </ContentImage>
      <ContentButton>
        <Button
          color="white"
          fontSize="m"
          fontFamily="bold"
          onPress={handleGoToHome}
        >
          Ir para a página inicial
        </Button>
      </ContentButton>
    </Container>
  )
}
