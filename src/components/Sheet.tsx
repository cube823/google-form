import { useState } from 'react'
import styled from 'styled-components'
import SheetHeader from './SheetHeader'

const Sheet = () => {
  const [text, setText] = useState('')

  return (
    <SheetContainer>
      <SheetHeader />
    </SheetContainer>
  )
}

const SheetContainer = styled.div`
  display: grid;
  word-wrap: break-word;
`

export default Sheet
