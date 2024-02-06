import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'
import { updateQuestionOptionOrder } from '../../../../../feature/questionSlice'
import { useAppDispatch, useAppSelector } from '../../../../../store'
import Grid from '../../../../Widget/Grid'
import Text from '../../../../Widget/Text'
import AddButton from './AddButton'
import EtcItem from './EtcItem'
import OptionItem from './Item'

const QuestionOptionList = ({ index }: { index: number }) => {
  const dispatch = useAppDispatch()
  const questions = useAppSelector((state) => state.questionReducer)
  const { currentIndex } = useAppSelector((state) => state.currentReducer)
  const question = questions[index]

  const isCurrent = currentIndex === index

  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return

    if (source.droppableId === 'droppable') {
      dispatch(
        updateQuestionOptionOrder({
          index,
          sourceIndex: source.index,
          destinationIndex: destination.index,
        })
      )
    }
  }

  const textStyle = {
    paddingBottom: 8,
    marginTop: 16,
    marginBottom: isCurrent ? 24 : 8,
    width: '50%',
    borderBottom: '1px solid #e0e0e0',
  }

  if (question.questionType === 'short')
    return <Text style={textStyle} color='gray_light' text='단답형 텍스트' />

  if (question.questionType === 'long')
    return <Text style={{ ...textStyle, width: '75%' }} color='gray_light' text='장문형 텍스트' />

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='droppable' direction='vertical'>
        {(provided) => (
          <Grid ref={provided.innerRef} {...provided.droppableProps}>
            {question.options.map((option, optionIndex) => (
              <OptionItem
                key={optionIndex}
                index={index}
                optionIndex={optionIndex}
                option={option}
                question={question}
                isCurrent={isCurrent}
              />
            ))}

            <EtcItem index={index} isCurrent={isCurrent} question={question} />

            {provided.placeholder}
          </Grid>
        )}
      </Droppable>
      {isCurrent && <AddButton question={question} index={index} />}
    </DragDropContext>
  )
}

export default QuestionOptionList
