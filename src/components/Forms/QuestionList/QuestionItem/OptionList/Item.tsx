import { Draggable } from 'react-beautiful-dnd'
import {
  Option,
  QuestionSlice,
  removeQuestionOption,
  updateQuestionOption,
} from '../../../../../feature/questionSlice'
import { useAppDispatch } from '../../../../../store'
import Flex from '../../../../Widget/Flex'
import Input from '../../../../Widget/Input'
import Text from '../../../../Widget/Text'
import Icon from '../../../../Icons'

interface OptionItemProps {
  index: number
  optionIndex: number
  question: QuestionSlice
  option: Option
  isCurrent: boolean
}

const OptionItem = ({ index, optionIndex, isCurrent, question, option }: OptionItemProps) => {
  const dispatch = useAppDispatch()

  const setValue = (optionIndex: number, val: string) => {
    dispatch(
      updateQuestionOption({
        index,
        optionIndex,
        text: val,
      })
    )
  }

  const removeOption = () => dispatch(removeQuestionOption({ index, optionIndex }))

  return (
    <Draggable index={optionIndex} key={option.id} draggableId={option.id}>
      {(provided, snapshot) => (
        <Flex
          ref={provided.innerRef}
          {...provided.draggableProps}
          style={{
            ...provided.draggableProps.style,
            alignItems: 'center',
            height: '48px',
            gap: '6px',
            opacity: snapshot.isDragging ? 0.6 : 1,
            boxShadow: snapshot.isDragging ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : 'none',
          }}
        >
          <Icon
            {...provided.dragHandleProps}
            iconName='drag-indicator'
            style={{ position: 'absolute', left: -24 }}
          />
          {question.questionType === 'dropdown' ? (
            <Text text={`${optionIndex + 1}`} />
          ) : (
            <Icon
              color='gray_light'
              iconName={
                question.questionType === 'checkbox'
                  ? 'checkbox-outline-blank'
                  : 'radio-button-unchecked'
              }
            />
          )}
          <Input
            value={option.text}
            onBlur={() => {
              if (option.text === '') {
                dispatch(
                  updateQuestionOption({
                    index,
                    optionIndex,
                    text: `옵션 ${optionIndex + 1}`,
                  })
                )
              }
            }}
            setValue={(val) => setValue(optionIndex, val)}
            removeInput={question.options.length > 1 && isCurrent ? removeOption : undefined}
            hoverDisabled={!isCurrent}
          />
        </Flex>
      )}
    </Draggable>
  )
}

export default OptionItem
