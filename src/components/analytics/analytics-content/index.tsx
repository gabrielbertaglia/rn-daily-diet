import { Paragraph } from '@components/paragraph'
import { Title } from '@components/title'
import { Container } from './styles'

interface AnalyticsContentProps {
  title: string
  subtitle: string
}

export function AnalyticsContent({ subtitle, title }: AnalyticsContentProps) {
  return (
    <Container>
      <Title fontSize="g">{title}</Title>
      <Paragraph fontSize="s" color="gray-200">
        {subtitle}
      </Paragraph>
    </Container>
  )
}
