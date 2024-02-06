import { useState } from 'react'
import { createPortal } from 'react-dom'
import Text from '../../Widget/Text'
import RemoveModal from './RemoveModal'
import * as S from './style'

const ViewFormFooter = () => {
  const [removeModalOpen, setRemoveModalOpen] = useState(false)

  const onSubmit = () => window.open('/formResponse', '_blank')

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
