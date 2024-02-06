import { useCallback, useMemo } from 'react'
import {
  QuestionSlice,
  updateQuestionEtcOptionText,
  updateQuestionEtcOptionChecked,
} from '../../../../../feature/questionSlice'
import { useAppDispatch } from '../../../../../store'
import { Color } from '../../../../../style/theme'
import { IconSymbol } from '../../../../Icons'
import Flex from '../../../../Widget/Flex'
import IconButton from '../../../../Widget/IconButton'
import Input from '../../../../Widget/Input'
import Text from '../../../../Widget/Text'

interface EtcItemProps {
  index: number
  question: QuestionSlice
}

const EtcItem = ({ index, question }: EtcItemProps) => {
  const dispatch = useAppDispatch()
  const { iconName, color }: { iconName: IconSymbol; color: Color } = useMemo(() => {
    if (question.questionType === 'checkbox') {
      if (question.etcOption.checked)
        return {
          iconName: 'checkbox',
          color: 'purple_dark',
        }
      return { iconName: 'checkbox-outline-blank', color: 'gray' }
    }

    if (question.questionType === 'multiple') {
      if (question.etcOption.checked)
        return { iconName: 'radio-button-checked', color: 'purple_dark' }
    }

    return { iconName: 'radio-button-unchecked', color: 'gray' }
  }, [question.questionType, question.etcOption.checked])

  const updateEtcText = useCallback(
    (val: string) => {
      if (!question.etcOption.checked && val)
        dispatch(updateQuestionEtcOptionChecked({ index, checked: true }))

      dispatch(updateQuestionEtcOptionText({ index, text: val }))
    },
    [index, question.etcOption.hasEtcOption]
  )

  if (!question.etcOption.hasEtcOption) return null
  if (question.questionType === 'dropdown') return null

  return (
    <Flex
      style={{
        width: '100%',
        alignItems: 'center',
        height: '48px',
        gap: '6px',
      }}
    >
      <IconButton
        iconName={iconName}
        style={{ width: 24, height: 24 }}
        color={color}
        onClick={() =>
          dispatch(updateQuestionEtcOptionChecked({ index, checked: !question.etcOption.checked }))
        }
      />
      <Flex style={{ width: '100%', gap: 32, alignItems: 'center' }}>
        <Text text='기타:' style={{ flexShrink: 0 }} />
        <Input
          hasBorderBottom
          value={question.etcOption.text}
          setValue={updateEtcText}
          style={{ fontSize: 16 }}
        />
      </Flex>
    </Flex>
  )
}

export default EtcItem
