import { QuestionSlice, updateQuestionHasEtcOption } from '../../../../../feature/questionSlice'
import { useAppDispatch } from '../../../../../store'
import Icon from '../../../../Icons'
import Flex from '../../../../Widget/Flex'
import IconButton from '../../../../Widget/IconButton'
import Text from '../../../../Widget/Text'

interface EtcItemProps {
  index: number
  isCurrent: boolean
  question: QuestionSlice
}

const EtcItem = ({ index, isCurrent, question }: EtcItemProps) => {
  const dispatch = useAppDispatch()

  const removeEtc = () => dispatch(updateQuestionHasEtcOption({ index, checked: false }))

  if (!question.etcOption?.hasEtcOption) return null

  if (question.questionType !== 'checkbox' && question.questionType !== 'multiple') return null

  return (
    <Flex
      style={{
        width: '100%',
        alignItems: 'center',
        height: '48px',
        gap: '6px',
      }}
    >
      <Icon
        color='gray_light'
        iconName={
          question.questionType === 'checkbox' ? 'checkbox-outline-blank' : 'radio-button-unchecked'
        }
      />
      <Flex style={{ width: '100%', alignItems: 'center' }}>
        <Text text='기타...' color={'gray_light'} style={{ width: '100%' }} />
        {isCurrent && <IconButton tooltipText='삭제' iconName='close' onClick={removeEtc} />}
      </Flex>
    </Flex>
  )
}

export default EtcItem
