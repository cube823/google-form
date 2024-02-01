import { styled } from 'styled-components'

const Global = styled.div`
  display: flex;
  width: 100%;
  min-height: 100dvh;
  background-color: #f0ebf8;
  justify-content: center;
`

const Question = styled.div`
  background-color: #ffffff;
  max-width: 768px;
  border-radius: 8px;
`

export const Layout = { Global, Question }
