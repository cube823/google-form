import { styled } from 'styled-components'

const Footer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  justify-self: flex-end;
  justify-items: flex-end;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.gray_lighter};
  height: 64px;
`
export { Footer }
