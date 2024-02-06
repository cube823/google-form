import { removeAllForm } from '../../../../feature/questionSlice'
import { useAppDispatch } from '../../../../store'
import Text from '../../../Widget/Text'
import { Modal } from './style'

interface RemoveModalProps {
  onClose: () => void
}

const RemoveModal = ({ onClose }: RemoveModalProps) => {
  const dispatch = useAppDispatch()

  const onRemove = () => {
    dispatch(removeAllForm())
    onClose()
  }

  return (
    <Modal.Overlay onClick={onClose}>
      <Modal.Dialog>
        <Modal.Header>
          <Text text={'양식을 지우시겠습니까?'} fontWeight={500} fontSize={24} />
        </Modal.Header>

        <Modal.Content>
          <Text
            text='모든 질문에서 답변이 삭제되며 되돌릴 수 없습니다.'
            fontSize={16}
            fontWeight={500}
          />
        </Modal.Content>

        <Modal.Footer>
          <Modal.Button onClick={onClose}>
            <Text text='취소' color='gray' />
          </Modal.Button>
          <Modal.Button onClick={onRemove}>
            <Text text='양식 지우기' color='gray' />
          </Modal.Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal.Overlay>
  )
}

export default RemoveModal
