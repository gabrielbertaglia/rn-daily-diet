import { Input } from '@components/input'
import { TextInputMask, TextInputMaskProps } from 'react-native-masked-text'

interface InputMaskProps extends TextInputMaskProps {
  value: string
  title: string
  error?: string | undefined
}

export function InputMask({
  value,
  title,
  type,
  error,
  options,
  ...rest
}: InputMaskProps) {
  return (
    <>
      <TextInputMask
        {...rest}
        type={type}
        options={options}
        value={value}
        customTextInput={Input}
        customTextInputProps={{
          title,
          error,
        }}
      />
    </>
  )
}
