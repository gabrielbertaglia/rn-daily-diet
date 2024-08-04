import { Paragraph } from '@components/paragraph'
import { Title } from '@components/title'
import { Container, Diet } from './styles'

interface CardDietProps {
  diet: Diet
  title: string
  description: string
}

export function CardDiet({ diet, description, title }: CardDietProps) {
  return (
    <Container diet={diet}>
      <Title fontSize="m">{title}</Title>
      <Paragraph color="gray-200" fontSize="m">
        {description}
      </Paragraph>
    </Container>
  )
}
