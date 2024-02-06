import { styled } from 'styled-components'

const Global = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-height: 100dvh;
  background-color: ${({ theme }) => theme.colors.purple_light};
  align-items: center;
  gap: 12px;
  padding: 12px 0 64px 0;
`

const QuestionList = styled.div`
  display: grid;
  justify-content: 'center';
  max-width: 768px;
  width: 100%;
`

const Question = styled.div<{ isCurrent?: boolean }>`
  width: 100%;
  max-width: 768px;
  display: grid;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 0 24px 0 24px;
  border: 1px solid ${({ theme }) => theme.colors.gray_lighter};
  box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.07);
`

export const Layout = { Global, QuestionList, Question }
