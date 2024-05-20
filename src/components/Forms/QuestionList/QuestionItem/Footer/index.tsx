import { memo, MouseEvent } from 'react'
import {
  copyQuestion,
  QuestionSlice,
  removeQuestion,
  updateQuestion,
} from '../../../../../feature/questionSlice'
import { useAppDispatch } from '../../../../../store'
import Divider from '../../../../Widget/Divider'
import Flex from '../../../../Widget/Flex'
import QuestionSwitch from '../../../../Widget/Switch'
import Text from '../../../../Widget/Text'
import * as S from './style'
import IconButton from '../../../../Widget/IconButton'

const Footer = ({ question, index }: { index: number; question: QuestionSlice }) => {
  const dispatch = useAppDispatch()

  const onCopyQuestion = (e?: MouseEvent<HTMLDivElement>) => {
    e?.preventDefault()
    e?.stopPropagation()

    dispatch(copyQuestion({ index }))
  }

  const onRemoveQuestion = (e?: MouseEvent<HTMLDivElement>) => {
    e?.preventDefault()
    e?.stopPropagation()

    dispatch(removeQuestion({ index }))
  }

  const onCheckedChange = (checked: boolean) => {
    dispatch(updateQuestion({ index, question: { ...question, isRequired: checked } }))
  }

  return (
    <S.Footer>
      <Flex style={{ gap: 24, paddingRight: 12 }}>
        <IconButton tooltipText='복사' iconName='content-copy' onClick={onCopyQuestion} />
        <IconButton tooltipText='삭제' iconName='delete' onClick={onRemoveQuestion} />
      </Flex>

      <Divider direction='vertical' length={32} style={{ margin: '0 16px' }} />

      <Flex style={{ alignItems: 'center', gap: 12, paddingRight: 12 }}>
        <Text text='필수' color='black' fontSize={14} fontWeight={400} />
        <QuestionSwitch checked={question.isRequired} onCheckedChange={onCheckedChange} />
      </Flex>

      <IconButton iconName='more-vert' onClick={() => {}} />
    </S.Footer>
  )
}

export default memo(Footer)
