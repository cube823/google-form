import * as S from './style'
import * as Select from '@radix-ui/react-select'
import Icon from '../../../../../Icons'
import { useAppDispatch, useAppSelector } from '../../../../../../store'
import { updateQuestionOptionAnswerChecked } from '../../../../../../feature/questionSlice'
import SelectItem from './Item'
import Flex from '../../../../../Widget/Flex'
import Divider from '../../../../../Widget/Divider'

const UNSELECTED = '선택'

const DropdownSelect = ({ index }: { index: number }) => {
  const dispatch = useAppDispatch()
  const options = useAppSelector((state) => state.questionReducer)[index].options

  const currentOption = options.find((option) => option.answerChecked)

  return (
    <Select.Root
      value={currentOption?.text ?? UNSELECTED}
      onValueChange={(value) => {
        if (currentOption) {
          dispatch(
            updateQuestionOptionAnswerChecked({
              index,
              optionIndex: options.findIndex((option) => option.text === currentOption?.text),
              checked: false,
            })
          )
        }

        dispatch(
          updateQuestionOptionAnswerChecked({
            index,
            optionIndex: options.findIndex((option) => option.text === value),
            checked: true,
          })
        )
      }}
    >
      <S.Trigger aria-label='presentation'>
        <Flex style={{ alignItems: 'center', gap: '8px' }}>
          <S.Value defaultValue={currentOption?.text ?? UNSELECTED} />
        </Flex>
        <Icon iconName='arrow-drop-down' color='#5f6368' />
      </S.Trigger>
      <Select.Portal>
        <S.Content className='SelectContent'>
          <Select.ScrollUpButton>
            <Icon iconName='visibility' color='#5f6368' />
          </Select.ScrollUpButton>
          <Select.Viewport className='SelectViewport'>
            <Select.Group>
              <SelectItem value={UNSELECTED}>선택</SelectItem>
            </Select.Group>

            <Divider direction='horizontal' style={{ margin: '8px 0 8px 0' }} />

            <Select.Group>
              {options.map((option, optionIndex) => (
                <SelectItem key={optionIndex} value={option.text || `옵션 ${optionIndex + 1}`}>
                  {option.text || `옵션 ${optionIndex + 1}`}
                </SelectItem>
              ))}
            </Select.Group>
          </Select.Viewport>
        </S.Content>
      </Select.Portal>
    </Select.Root>
  )
}

export default DropdownSelect
