import Icon from '../../../../../Icons'
import { useAppDispatch, useAppSelector } from '../../../../../../store'
import { updateQuestionOptionAnswerChecked } from '../../../../../../feature/questionSlice'
import SelectItem from './Item'
import Flex from '../../../../../Widget/Flex'
import Divider from '../../../../../Widget/Divider'
import { Select } from '../../../../../Widget/Select/style'

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
      <Select.Trigger aria-label='presentation'>
        <Flex style={{ alignItems: 'center', gap: '8px' }}>
          <Select.Value defaultValue={currentOption?.text ?? UNSELECTED} />
        </Flex>
        <Icon iconName='arrow-drop-down' color='gray' />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className='SelectContent'>
          <Select.ScrollUpButton>
            <Icon iconName='more-vert' color='gray' />
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
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}

export default DropdownSelect
