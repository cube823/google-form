import { styled } from 'styled-components'

interface DividerProps {
  direction: 'horizontal' | 'vertical'
  length?: number
  style?: React.CSSProperties
}

const Divider = ({ direction, length, style }: DividerProps) => {
  return <Container direction={direction} length={length} style={style} />
}

const Container = styled.div<DividerProps>`
  width: ${({ direction, length }) => (direction === 'vertical' ? '1px' : length ?? '100%')};
  height: ${({ direction, length }) =>
    direction === 'vertical' ? `${length}px` ?? '100%' : '1px'};
  background-color: ${({ theme }) => theme.colors.gray_lighter};
`

export default Divider
