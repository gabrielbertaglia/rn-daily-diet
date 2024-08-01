import { Analytics } from '@components/analytics'
import ArrowUpRight from 'phosphor-react-native/src/icons/ArrowUpRight'
import LogoImg from '../../assets/logo.png'
import LogoAvatar from '../../assets/me.jpg'
import { Avatar, Container, HeaderContent, Logo } from './styles'

export function Home() {
  return (
    <Container>
      <HeaderContent>
        <Logo source={LogoImg} />
        <Avatar source={LogoAvatar} />
      </HeaderContent>

      <Analytics.Root color="green-light">
        <Analytics.Content />
        <Analytics.Action icon={ArrowUpRight} color="green-dark" />
      </Analytics.Root>
    </Container>
  )
}
