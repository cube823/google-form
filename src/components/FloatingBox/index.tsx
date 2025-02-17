import { styled } from 'styled-components'
import { addQuestion, initialQuestionState } from '../../feature/questionSlice'
import { useAppDispatch, useAppSelector } from '../../store'
import { v4 as uuidv4 } from 'uuid'
import { updateCurrentSlice } from '../../feature/currentSlice'
import IconButton from '../Widget/IconButton'

const FloatingBox = () => {
  const dispatch = useAppDispatch()
  const questions = useAppSelector((state) => state.questionReducer)
  const navigateToViewForm = () => window.open('/viewForm', '_blank')

  const onAddQuestion = () => {
    dispatch(addQuestion({ ...initialQuestionState, id: uuidv4() }))
    dispatch(updateCurrentSlice(questions.length))
  }

  return (
    <>
      <Container>
        <IconButton
          side='right'
          iconName='add-circle'
          onClick={onAddQuestion}
          tooltipText='질문 추가'
        />

        <IconButton
          side='right'
          iconName='visibility'
          onClick={navigateToViewForm}
          tooltipText='미리보기'
        />
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  position: sticky;
  justify-content: center;
  align-items: center;
  gap: 20px;

  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid rgb(218, 220, 224);
  border-radius: 8px;

  @media screen and (min-width: 951px) {
    flex-direction: column;
    padding: 12px 0;
    width: 48px;
    top: 16px;

    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
      0 1px 3px 0 rgba(0, 0, 0, 0.12);

    -webkit-transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media screen and (max-width: 950px) {
    position: fixed;
    left: 16px;
    bottom: 0;
    height: 60px;
    width: calc(100% - 32px);
    border-radius: 8px 8px 0 0;
    border-width: 1px 1px 0 1px;
    justify-content: space-around;

    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
      0 1px 3px 0 rgba(0, 0, 0, 0.12);
  }
`

export default FloatingBox
