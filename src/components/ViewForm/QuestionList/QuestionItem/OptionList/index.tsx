import { updateQuestionAnswer } from '../../../../../feature/questionSlice'
import { useAppDispatch, useAppSelector } from '../../../../../store'
import Grid from '../../../../Widget/Grid'
import Input from '../../../../Widget/Input'
import EtcItem from './EtcItem'
import OptionItem from './Item'
import DropdownSelect from './Select'

const QuestionOptionList = ({ index }: { index: number }) => {
  const dispatch = useAppDispatch()
  const questions = useAppSelector((state) => state.questionReducer)
  const question = questions[index]

  const onUpdateQuestionAnswer = (text: string) => {
    dispatch(updateQuestionAnswer({ index, text }))
  }

  // useEffect(() => {
  //   textarea.addEventListener("input", () => {
  //     textarea.style.height = "auto";
  //     textarea.style.height = textarea.scrollHeight + "px";
  //   });
  // }, [])

  if (question.questionType === 'short')
    return <Input hasBorderBottom value={question.answerText} setValue={onUpdateQuestionAnswer} />

  if (question.questionType === 'long')
    return (
      <Input
        as='textarea'
        color='gray_light'
        hasBorderBottom
        value={question.answerText}
        setValue={onUpdateQuestionAnswer}
      />
    )

  if (question.questionType === 'dropdown') return <DropdownSelect index={index} />

  return (
    <Grid>
      {question.options.map((option, optionIndex) => (
        <OptionItem
          key={optionIndex}
          index={index}
          optionIndex={optionIndex}
          option={option}
          question={question}
        />
      ))}

      <EtcItem index={index} question={question} />
    </Grid>
  )
}

export default QuestionOptionList
