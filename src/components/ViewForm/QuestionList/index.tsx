import { useAppSelector } from '../../../store'
import QuestionItem from './QuestionItem'
import * as S from './style'

const ViewQuestionList = () => {
  const questionList = useAppSelector((state) => state.questionReducer)

  return (
    <S.Main>
      <S.QuestionList>
        {questionList.map((question, index) => (
          <QuestionItem key={question.id} index={index} {...question} />
        ))}
      </S.QuestionList>
    </S.Main>
  )
}

export default ViewQuestionList
