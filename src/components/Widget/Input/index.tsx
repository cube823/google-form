import { ChangeEvent, CSSProperties, HTMLAttributes } from 'react'
import { styled } from 'styled-components'
import IconButton from '../IconButton'

interface InputProps extends HTMLAttributes<any> {
  as?: keyof JSX.IntrinsicElements
  value: string
  setValue: (val: string) => void
  placeholder?: string
  removeInput?: () => void
  style?: CSSProperties
  hasBorderBottom?: boolean
  hoverDisabled?: boolean
}

const Input = ({
  as = 'input',
  value,
  style,
  setValue,
  removeInput,
  hasBorderBottom,
  hoverDisabled,
  ...props
}: InputProps) => {
  return (
    <Main>
      <InputContainer
        as={as}
        hasBorderBottom={hasBorderBottom}
        hoverDisabled={hoverDisabled}
        {...props}
        value={value}
        style={{ ...style }}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setValue(e.currentTarget.value)
        }}
      />

      {removeInput && <IconButton iconName='close' onClick={removeInput} />}
    </Main>
  )
}

const Main = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 20px;
`

const InputContainer = styled.input<{ hasBorderBottom?: boolean; hoverDisabled?: boolean }>`
  width: 100%;
  line-height: 1.5;
  border-bottom: 1px solid
    ${({ theme, hasBorderBottom }) => (hasBorderBottom ? theme.colors.gray_lighter : 'transparent')};

  transition: border-bottom 0.2s ease-in-out;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  &:hover {
    border-bottom: 1px solid
      ${({ theme, hoverDisabled }) => (!hoverDisabled ? theme.colors.gray_lighter : 'transparent')};
  }

  &:focus {
    border-bottom: 2px solid #673ab7;
  }
`

export default Input
