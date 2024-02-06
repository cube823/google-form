import { Layout } from '../../layout'
import QuestionList from './QuestionList'
import FormHeader from './Header'
import Flex from '../Widget/Flex'
import FloatingBox from '../FloatingBox'
import { DesktopFloatingBox } from './QuestionList/style'

function Forms() {
  return (
    <Layout.Global>
      <Flex
        style={{
          flexDirection: 'column',
          gap: '12px',
          position: 'relative',
          width: '100%',

          alignItems: 'center',
        }}
      >
        <FormHeader />

        <QuestionList />

        <DesktopFloatingBox>
          <FloatingBox />
        </DesktopFloatingBox>
      </Flex>
    </Layout.Global>
  )
}

export default Forms
