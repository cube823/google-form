import { styled } from 'styled-components'
import Text from '../../Widget/Text'
import * as S from './style'

const ViewFormFooter = () => {
  const onSubmit = () => {}

  const onReset = () => {}

  return (
    <S.Main>
      <Button>제출</Button>

      <TextButton>
        <Text text='양식 지우기' color='purple_dark' />
      </TextButton>
    </S.Main>
  )
}

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.purple_dark};
  color: ${({ theme }) => theme.colors.white};
  padding: 10px 24px;
  border-radius: 8px;
`

const TextButton = styled.div`
  padding: 8px;

  &:hover {
    cursor: pointer;
    background-color: rgba(26, 115, 232, 0.04);
    border-radius: 4px;
  }
`

export default ViewFormFooter
