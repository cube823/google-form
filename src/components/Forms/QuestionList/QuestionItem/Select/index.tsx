import * as S from './style'
import * as Select from '@radix-ui/react-select'
import Icon, { IconSymbol } from '../../../../Icons'
import { useAppDispatch, useAppSelector } from '../../../../../store'
import { updateQuestion } from '../../../../../feature/questionSlice'
import { QuestionType } from '../../../../../feature/type'
import SelectItem from './Item'
import Flex from '../../../../Widget/Flex'

const iconMap: Record<QuestionType, IconSymbol> = {
  short: 'short-text',
  long: 'subject',
  multiple: 'radio-button-checked',
  checkbox: 'checkbox',
  dropdown: 'expand-circle-down',
}

const QuestionSelect = ({ index }: { index: number }) => {
  const dispatch = useAppDispatch()
  const questions = useAppSelector((state) => state.questionReducer)
  const currentQuestion = questions[index]

  return (
    <Select.Root
      value={currentQuestion.questionType}
      onValueChange={(value) => {
        dispatch(
          updateQuestion({
            index,
            question: { ...currentQuestion, questionType: value as QuestionType },
          })
        )
      }}
    >
      <S.Trigger aria-label='질문 유형'>
        <Flex style={{ alignItems: 'center', gap: '8px' }}>
          <Icon iconName={iconMap[currentQuestion.questionType]} color='gray' />
          <S.Value defaultValue={currentQuestion.questionType} />
        </Flex>
        <Icon iconName='arrow-drop-down' color='gray' />
      </S.Trigger>
      <Select.Portal>
        <S.Content className='SelectContent'>
          <Select.ScrollUpButton>
            <Icon iconName='visibility' color='gray' />
          </Select.ScrollUpButton>
          <Select.Viewport className='SelectViewport'>
            <Select.Group>
              <SelectItem value='short' iconName='short-text'>
                단답형
              </SelectItem>
              <SelectItem iconName='subject' value='long'>
                장문형
              </SelectItem>
            </Select.Group>

            <Select.Separator className='SelectSeparator' />

            <Select.Group>
              <SelectItem iconName='radio-button-checked' value='multiple'>
                객관식 질문
              </SelectItem>
              <SelectItem iconName='checkbox' value='checkbox'>
                체크박스
              </SelectItem>
              <SelectItem iconName='expand-circle-down' value='dropdown'>
                드롭다운
              </SelectItem>
            </Select.Group>
          </Select.Viewport>
        </S.Content>
      </Select.Portal>
    </Select.Root>
  )
}

export default QuestionSelect
