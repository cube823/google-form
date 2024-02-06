import { styled } from 'styled-components'

const HederHighlight = styled.div`
  position: absolute;
  top: -1px;
  left: -1px;
  z-index: 1;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 10px;
  width: calc(100% + 2px);
  background-color: ${({ theme }) => theme.colors.purple_dark};
`

const CurrentHighlight = styled.div`
  top: 9px;
  left: -1px;
  border-bottom-left-radius: 8px;
  z-index: 1;
  width: 8px;
  height: calc(100% - 9px);
  display: flex;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.blue_lighter};
`

export { HederHighlight, CurrentHighlight }
