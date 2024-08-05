import { Diet } from '@components/card-diet/styles'
import { Title } from '@components/title'
import { TouchableOpacityProps } from 'react-native'
import { Container, Status } from './styles'

interface ButtonInDietProps extends TouchableOpacityProps {
  diet: Diet
  title: string
  selected: boolean
}

export function ButtonInDiet({
  diet,
  title,
  selected,
  ...rest
}: ButtonInDietProps) {
  return (
    <Container title={title} selected={selected} diet={diet} {...rest}>
      <Status diet={diet} />
      <Title fontSize="xs">{title}</Title>
    </Container>
  )
}
