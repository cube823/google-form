import {
  Option,
  QuestionSlice,
  updateQuestionOptionAnswerChecked,
} from '../../../../../feature/questionSlice'
import { useAppDispatch } from '../../../../../store'
import Flex from '../../../../Widget/Flex'
import Text from '../../../../Widget/Text'
import IconButton from '../../../../Widget/IconButton'
import { memo, useCallback, useMemo } from 'react'

interface OptionItemProps {
  index: number
  optionIndex: number
  question: QuestionSlice
  option: Option
}

const OptionItem = ({ index, optionIndex, question, option }: OptionItemProps) => {
  const dispatch = useAppDispatch()

  const checkOption = useCallback(
    () =>
      dispatch(
        updateQuestionOptionAnswerChecked({ index, optionIndex, checked: !option.answerChecked })
      ),
    [index, optionIndex, option.answerChecked]
  )

  const iconName = useMemo(() => {
    if (question.questionType === 'checkbox') {
      return option.answerChecked ? 'checkbox' : 'checkbox-outline-blank'
    }

    return option.answerChecked ? 'radio-button-checked' : 'radio-button-unchecked'
  }, [question.questionType, option.answerChecked])

  return (
    <Flex
      style={{
        alignItems: 'center',
        height: '48px',
        gap: '6px',
      }}
    >
      {question.questionType === 'dropdown' ? (
        <Text text={`${optionIndex + 1}`} />
      ) : (
        <IconButton onClick={checkOption} iconName={iconName} style={{ width: 24, height: 24 }} />
      )}

      <Text text={option.text} />
    </Flex>
  )
}

export default memo(OptionItem)
