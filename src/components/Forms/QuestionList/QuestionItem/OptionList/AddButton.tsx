import { styled } from 'styled-components'
import {
  addQuestionOption,
  QuestionSlice,
  updateQuestionHasEtcOption,
} from '../../../../../feature/questionSlice'
import { useAppDispatch } from '../../../../../store'
import Flex from '../../../../Widget/Flex'
import Text from '../../../../Widget/Text'

const AddButton = ({ question, index }: { question: QuestionSlice; index: number }) => {
  const isDropdown = question.questionType === 'dropdown'

  const dispatch = useAppDispatch()

  const addOption = () => {
    dispatch(addQuestionOption({ index }))
  }

  const addEtcOption = () => {
    dispatch(updateQuestionHasEtcOption({ index, checked: true }))
  }

  return (
    <Flex style={{ height: '48px', alignItems: 'center' }}>
      <Flex style={{ gap: '6px' }}>
        <Flex onClick={addOption} style={{ cursor: 'pointer' }}>
          <Text text='옵션 추가' color='gray_dark' />
        </Flex>
        {!isDropdown && <Text text='또는' />}
      </Flex>
      {!isDropdown && (
        <Etc onClick={addEtcOption}>
          <Text text="'기타' 추가" color='blue_light' />
        </Etc>
      )}
    </Flex>
  )
}

const Etc = styled.div`
  display: flex;
  cursor: pointer;
  padding: 8px;
  position: relative;

  &:hover {
    background-color: rgba(26, 115, 232, 0.04);
    border-radius: 4px;
  }
`

export default AddButton
