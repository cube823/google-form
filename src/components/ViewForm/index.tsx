import { Layout } from '../../layout'
import ViewQuestionList from './QuestionList'
import ViewFormHeader from './Header'

const ViewForm = () => {
  return (
    <Layout.Global>
      <ViewFormHeader />

      <ViewQuestionList />
    </Layout.Global>
  )
}

export default ViewForm
