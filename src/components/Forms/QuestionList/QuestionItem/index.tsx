import { memo, useCallback, useMemo, useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { updateQuestion } from '../../../../feature/questionSlice'
import { Layout } from '../../../../layout'
import { useAppDispatch, useAppSelector } from '../../../../store'
import Input from '../../../Widget/Input'
import QuestionSelect from './Select'
import Icon from '../../../Icons'
import QuestionOptionList from './OptionList'
import { updateCurrentSlice } from '../../../../feature/currentSlice'
import Footer from './Footer'
import Flex from '../../../Widget/Flex'
import Grid from '../../../Widget/Grid'
import * as S from './style'

const QuestionItem = ({ id, index }: { id: string; index: number }) => {
  const dispatch = useAppDispatch()
  const { currentIndex } = useAppSelector((state) => state.currentReducer)
  const currentQuestion = useAppSelector((state) => state.questionReducer)[index]

  const [isHover, setIsHover] = useState(false)

  const isCurrent = useMemo(() => currentIndex === index, [currentIndex, index])

  const setValue = useCallback(
    (val: string) => {
      dispatch(
        updateQuestion({
          index,
          question: { ...currentQuestion, title: { ...currentQuestion.title, text: val } },
        })
      )
    },
    [currentQuestion, index]
  )

  const setCurrent = () => dispatch(updateCurrentSlice(index))

  return (
    <Draggable index={index} key={id} draggableId={id}>
      {(provided, snapshot) => {
        return (
          <Layout.Question
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={setCurrent}
            ref={provided.innerRef}
            {...provided.draggableProps}
          >
            {currentIndex === index && <S.CurrentHighlight />}

            <S.DragHandler {...provided.dragHandleProps}>
              {isHover || isCurrent ? (
                <Icon color='#b2b2b2' iconName='drag-indicator' />
              ) : (
                <Flex style={{ height: '24px', width: '100%' }} />
              )}
            </S.DragHandler>

            <Flex style={{ gap: '16px', marginBottom: 8 }}>
              <Input
                value={currentQuestion.title.text}
                setValue={setValue}
                style={{
                  fontSize: '16px',
                  height: isCurrent ? '56px' : undefined,
                  borderBottom: isCurrent ? '1px solid rgba(0,0,0,.38)' : undefined,
                  backgroundColor: isCurrent ? 'rgba(0,0,0,.05)' : undefined,
                  padding: isCurrent ? '0 16px 0 16px' : undefined,
                }}
              />

              {isCurrent && <QuestionSelect index={index} />}
            </Flex>

            <Grid style={{ width: '100%', paddingBottom: 24 }}>
              <QuestionOptionList index={index} />
            </Grid>

            {isCurrent && <Footer index={index} question={currentQuestion} />}
          </Layout.Question>
        )
      }}
    </Draggable>
  )
}

export default memo(QuestionItem)
