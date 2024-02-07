import { useCallback, useState } from 'react'
import { createPortal } from 'react-dom'
import { useAppSelector } from '../../../store'
import Text from '../../Widget/Text'
import RemoveModal from './RemoveModal'
import * as S from './style'

const ViewFormFooter = () => {
  const questions = useAppSelector((state) => state.questionReducer)
  const [removeModalOpen, setRemoveModalOpen] = useState(false)

  const validateRequired = useCallback(() => {
    const requiredList = questions.filter((question) => question.isRequired)
    let isAllAnswered = true

    if (requiredList.length === 0) return true

    requiredList.forEach((question) => {
      if (question.questionType === 'short' || question.questionType === 'long') {
        if (!question.answerText) {
          isAllAnswered = false
        }
      }

      if (
        question.questionType !== 'short' &&
        question.questionType !== 'long' &&
        !question.options.some((option) => option.answerChecked)
      ) {
        if (!question.etcOption.checked) {
          isAllAnswered = false
        }
      }
    })

    return isAllAnswered
  }, [questions])

  const onSubmit = () => {
    if (!validateRequired()) return alert('필수 질문을 모두 작성해주세요.')
    window.open('/formResponse', '_blank')
  }

  const onRemoveModalOpen = () => setRemoveModalOpen(true)
  const onRemoveModalClose = () => {
    setRemoveModalOpen(false)
  }

  return (
    <>
      <S.Main>
        <S.Button onClick={onSubmit}>제출</S.Button>

        <S.TextButton onClick={onRemoveModalOpen}>
          <Text text='양식 지우기' color='purple_dark' />
        </S.TextButton>
      </S.Main>
      {removeModalOpen && createPortal(<RemoveModal onClose={onRemoveModalClose} />, document.body)}
    </>
  )
}

export default ViewFormFooter
