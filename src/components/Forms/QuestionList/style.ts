import { styled } from 'styled-components'
import Flex from '../../Widget/Flex'

const Main = styled.div`
  position: relative;
  width: 100%;
  justify-content: center;
`

const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  align-items: center;
  position: relative;
`

const DesktopFloatingBox = styled(Flex)`
  position: absolute;
  right: calc(50% - 384px - 16px - 48px);

  min-height: 100%;
  @media screen and (max-width: 950px) {
    display: none;
  }
`

const MobileFloatingBox = styled.div`
  display: none;
  @media screen and (max-width: 950px) {
    display: flex;
  }
`

export { Main, QuestionList, DesktopFloatingBox, MobileFloatingBox }
