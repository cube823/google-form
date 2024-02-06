import { styled } from 'styled-components'
import { Layout } from '../../layout'
import { useAppSelector } from '../../store'
import Flex from '../Widget/Flex'
import Grid from '../Widget/Grid'
import Text from '../Widget/Text'

const FormResponse = () => {
  const { title, description } = useAppSelector((state) => state.headerReducer)
  const questions = useAppSelector((state) => state.questionReducer)

  return (
    <Layout.Global>
      <Main>
        <Flex style={{ flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <Text fontSize={24} fontWeight={600} text={title.text} />
          <Text fontSize={16} fontWeight={500} text={description.text} />
        </Flex>

        {questions.map((question, index) => (
          <Layout.Question key={index} style={{ padding: 24, gap: 24 }}>
            <Grid style={{ gap: 8 }}>
              <Text text={question.title.text} fontSize={16} fontWeight={500} />
              <Flex style={{ gap: 12, alignItems: 'center' }}>
                <Text text='질문타입:' />
                <Text text={question.questionType} fontSize={16} fontWeight={500} />
              </Flex>
            </Grid>

            {question.questionType === 'short' ||
              (question.questionType === 'long' && (
                <Text text={question.answerText} lineHeight={20} />
              ))}

            <Grid style={{ gap: 8 }}>
              {question.questionType !== 'short' && question.questionType !== 'long' && (
                <Text text='선택한 옵션' fontWeight={500} />
              )}
              {question.options.map((option, index) =>
                option.answerChecked ? (
                  <Flex key={index} style={{ gap: 8 }}>
                    <Text text={option.text} fontSize={16} fontWeight={500} />
                  </Flex>
                ) : null
              )}

              {question.etcOption.checked && <Text text={question.etcOption.text} />}
            </Grid>
          </Layout.Question>
        ))}
      </Main>
    </Layout.Global>
  )
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px 0;
  max-width: 768px;
  gap: 20px;
  position: relative;
  align-items: center;
  justify-content: space-between;
`

export default FormResponse
