import styled from 'styled-components'
import Sheet from './components/Sheet'

function App() {
  return (
    <Body>
      <Sheet />
    </Body>
  )
}

const Body = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100dvh;
  background-color: #f0ebf8;
  justify-content: center;
  /* align-items: center; */
`

export default App
