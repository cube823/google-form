import { Layout } from '../../../../layout'
import { useAppDispatch, useAppSelector } from '../../../../store'
import QuestionOptionList from './OptionList'
import { updateCurrentSlice } from '../../../../feature/currentSlice'
import Flex from '../../../Widget/Flex'
import Text from '../../../Widget/Text'

interface QuestionItemProps {
  index: number
}

const QuestionItem = ({ index }: QuestionItemProps) => {
  const dispatch = useAppDispatch()
  const questionSlices = useAppSelector((state) => state.questionReducer)
  const currentQuestion = questionSlices[index]

  const setCurrent = () => dispatch(updateCurrentSlice(index))

  return (
    <Layout.Question onClick={setCurrent} style={{ padding: 24 }}>
      <Flex style={{ paddingBottom: 16 }}>
        <Text
          text={`${currentQuestion.title.text}`}
          fontSize={16}
          lineHeight={20}
          style={{ whiteSpace: 'normal', wordBreak: 'break-all' }}
        />

        {currentQuestion.isRequired && (
          <Text
            style={{ marginLeft: 4 }}
            text={'*'}
            color='red_light'
            fontSize={16}
            lineHeight={20}
          />
        )}
      </Flex>

      <QuestionOptionList index={index} />
    </Layout.Question>
  )
}

export default QuestionItem
