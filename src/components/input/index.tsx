import { Paragraph } from '@components/paragraph'
import { Title } from '@components/title'
import { TextInputProps } from 'react-native'
import { Input as InputComponent } from './styles'

interface InputProps extends TextInputProps {
  title: string
  error?: string | undefined
}

export function Input({ title, error = undefined, ...rest }: InputProps) {
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
      <InputComponent error={error} {...rest} />
      {error && (
        <Paragraph fontSize="s" color="red-dark">
          {error}
        </Paragraph>
      )}
    </>
  )
}
