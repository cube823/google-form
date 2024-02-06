import {
  copyQuestion,
  QuestionSlice,
  removeQuestion,
  updateQuestion,
} from '../../../../../feature/questionSlice'
import { useAppDispatch } from '../../../../../store'
import Divider from '../../../../Widget/Divider'
import Flex from '../../../../Widget/Flex'
import QuestionSwitch from '../../../../Widget/Switch'
import Text from '../../../../Widget/Text'
import * as S from './style'
import IconButton from '../../../../Widget/IconButton'
import { updateCurrentSlice } from '../../../../../feature/currentSlice'
import { memo } from 'react'

const Footer = ({ question, index }: { index: number; question: QuestionSlice }) => {
  const dispatch = useAppDispatch()

  const onCopyQuestionItem = () => {
    dispatch(copyQuestion({ index }))
    dispatch(updateCurrentSlice(index + 1))
  }

  const onRemoveQuestionItem = () => {
    dispatch(removeQuestion({ index }))
    dispatch(updateCurrentSlice(index === 0 ? index : index - 1))
  }

  const onCheckedChange = (checked: boolean) => {
    dispatch(updateQuestion({ index, question: { ...question, isRequired: checked } }))
  }

  return (
    <S.Footer>
      <IconButton iconName='content-copy' onClick={onCopyQuestionItem} />
      <IconButton iconName='delete' onClick={onRemoveQuestionItem} />

      <Divider direction='vertical' length={32} style={{ margin: '0 16px 0 16px' }} />
      <Flex style={{ alignItems: 'center', gap: '12px' }}>
        <Text text='필수' color='black' fontSize={14} fontWeight={400} />
        <QuestionSwitch checked={question.isRequired} onCheckedChange={onCheckedChange} />
      </Flex>

      <IconButton iconName='more-vert' onClick={() => {}} />
    </S.Footer>
  )
}

export default memo(Footer)
