import { Layout } from '../../layout'
import ViewQuestionList from './QuestionList'
import ViewFormHeader from './Header'
import ViewFormFooter from './Footer'

const ViewForm = () => {
  return (
    <Layout.Global>
      <ViewFormHeader />

      <ViewQuestionList />

      <ViewFormFooter />
    </Layout.Global>
  )
}

export default ViewForm
