import { Title } from '@components/title'
import { TextInputProps } from 'react-native'
import { Input as InputComponent } from './styles'

interface InputProps extends TextInputProps {
  title: string
}

export function Input({ title }: InputProps) {
  return (
    <>
      <Title
        fontSize="xs"
        style={{
          marginBottom: 8,
        }}
      >
        {title}
      </Title>
      <InputComponent />
    </>
  )
}
