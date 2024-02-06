import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'
import { updateQuestionOrder } from '../../../feature/questionSlice'
import { useAppDispatch, useAppSelector } from '../../../store'
import FloatingBox from '../../FloatingBox'
import QuestionItem from './QuestionItem'
import * as S from './style'

const QuestionList = () => {
  const dispatch = useAppDispatch()
  const questionList = useAppSelector((state) => state.questionReducer)

  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return

    if (source.droppableId === 'droppable') {
      dispatch(
        updateQuestionOrder({
          sourceIndex: source.index,
          destinationIndex: destination.index,
        })
      )
    }
  }

  return (
    <>
      <S.Main>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='droppable' direction='vertical'>
            {(provided) => (
              <>
                <S.QuestionList ref={provided.innerRef} {...provided.droppableProps}>
                  {questionList.map((question, index) => (
                    <QuestionItem key={question.id} index={index} {...question} />
                  ))}
                </S.QuestionList>
                {provided.placeholder}
              </>
            )}
          </Droppable>
        </DragDropContext>
      </S.Main>

      <S.MobileFloatingBox>
        <FloatingBox />
      </S.MobileFloatingBox>
    </>
  )
}

export default QuestionList
