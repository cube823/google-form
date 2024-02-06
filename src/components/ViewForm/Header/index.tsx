import { Layout } from '../../../layout'
import { useAppSelector } from '../../../store'
import Divider from '../../Widget/Divider'
import Grid from '../../Widget/Grid'
import Text from '../../Widget/Text'
import * as S from './style'

const EMAIL = 'cube823@gmail.com'
const REQUIRED_NOTICE = '* 표시는 필수 질문임'

const ViewFormHeader = () => {
  const { title, description } = useAppSelector((state) => state.headerReducer)

  const hasRequired = useAppSelector((state) => state.questionReducer).some(
    (question) => question.isRequired
  )

  return (
    <Layout.Question style={{ padding: 0 }}>
      <S.HederHighlight />

      <Grid style={{ padding: '24px', paddingTop: '34px' }}>
        <Text text={title.text} fontSize={32} />
        <Text text={description.text} fontSize={14.667} style={{ paddingTop: 16 }} />
      </Grid>

      <Grid>
        <Divider direction='horizontal' />
        <Text fontWeight={700} color='grey_darker' text={EMAIL} style={{ padding: 24 }} />
      </Grid>

      {hasRequired && (
        <Grid>
          <Divider direction='horizontal' />
          <Text fontWeight={400} color='red_light' text={REQUIRED_NOTICE} style={{ padding: 24 }} />
        </Grid>
      )}
    </Layout.Question>
  )
}

export default ViewFormHeader
