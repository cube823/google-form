import { styled } from 'styled-components'

const Main = styled.div`
  display: flex;
  width: 100%;
  max-width: 768px;
  position: relative;
  align-items: center;
  justify-content: space-between;
`

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.purple_dark};
  color: ${({ theme }) => theme.colors.white};
  padding: 10px 24px;
  border-radius: 8px;
`

const TextButton = styled.div`
  padding: 8px;

  &:hover {
    cursor: pointer;
    background-color: rgba(26, 115, 232, 0.04);
    border-radius: 4px;
  }
`

export { Main, Button, TextButton }
