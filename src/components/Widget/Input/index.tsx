import { styled } from 'styled-components'
import { CSSProperties, HTMLAttributes } from 'react'
import Flex from '../Flex'
import IconButton from '../IconButton'

interface InputProps extends HTMLAttributes<any> {
  value: string
  setValue: (val: string) => void
  placeholder?: string
  removeInput?: () => void
  style?: CSSProperties
}

const Input = ({ value, style, setValue, removeInput, ...props }: InputProps) => {
  return (
    <Flex style={{ alignItems: 'center', width: '100%' }}>
      <InputContainer
        {...props}
        value={value}
        style={style}
        onChange={(e) => {
          setValue(e.currentTarget.value)
        }}
      />

      {removeInput && <IconButton iconName='close' onClick={removeInput} />}
    </Flex>
  )
}

const InputContainer = styled.input`
  width: 100%;
`

export default Input
