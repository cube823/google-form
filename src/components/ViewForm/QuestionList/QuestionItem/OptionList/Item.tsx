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
import { IconSymbol } from '../../../../Icons'
import { Color } from '../../../../../style/theme'

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

  const { iconName, color }: { iconName: IconSymbol; color: Color } = useMemo(() => {
    if (question.questionType === 'checkbox') {
      return option.answerChecked
        ? { iconName: 'checkbox', color: 'purple_dark' }
        : { iconName: 'checkbox-outline-blank', color: 'gray' }
    }

    return option.answerChecked
      ? { color: 'purple_dark', iconName: 'radio-button-checked' }
      : { color: 'gray', iconName: 'radio-button-unchecked' }
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
        <IconButton
          onClick={checkOption}
          color={color}
          iconName={iconName}
          style={{ width: 24, height: 24 }}
        />
      )}

      <Text text={option.text} />
    </Flex>
  )
}

export default memo(OptionItem)
