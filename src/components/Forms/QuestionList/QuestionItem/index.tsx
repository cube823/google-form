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
import { styled } from 'styled-components'

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
            style={{
              ...provided.draggableProps.style,
              opacity: snapshot.isDragging ? 0.6 : 1,
            }}
          >
            {currentIndex === index && <S.CurrentHighlight />}

            <S.DragHandler {...provided.dragHandleProps}>
              {isHover || isCurrent ? (
                <Icon color='gray_lighter' iconName='drag-indicator-rotate' />
              ) : (
                <Flex style={{ height: '24px', width: '100%' }} />
              )}
            </S.DragHandler>

            <Header>
              <Input
                value={currentQuestion.title.text}
                setValue={setValue}
                hoverDisabled={!isCurrent}
                hasBorderBottom={isCurrent}
                style={{
                  fontSize: '16px',
                  height: isCurrent ? '56px' : undefined,
                  backgroundColor: isCurrent ? 'rgba(0,0,0,.05)' : undefined,
                  padding: isCurrent ? '0 16px 0 16px' : undefined,
                }}
              />

              {isCurrent && <QuestionSelect index={index} />}
            </Header>

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

const Header = styled.div`
  display: flex;
  row-gap: 8px;
  column-gap: 16px;
  margin-bottom: 8px;

  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`

export default memo(QuestionItem)
