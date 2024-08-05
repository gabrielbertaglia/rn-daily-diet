import { Paragraph } from '@components/paragraph'
import { Title } from '@components/title'
import { Container } from './styles'

interface CardProps {
  title: string
  description: string
}

export function Card({ title, description }: CardProps) {
  return (
    <Container>
      <Title fontSize="m">{title}</Title>
      <Paragraph
        color="gray-200"
        fontSize="m"
        style={{
          textAlign: 'center',
        }}
      >
        {description}
      </Paragraph>
    </Container>
  )
}
