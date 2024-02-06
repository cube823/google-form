import { styled } from 'styled-components'

const HederHighlight = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 10px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.purple_dark};
`

export { HederHighlight }
