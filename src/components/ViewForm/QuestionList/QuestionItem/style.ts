import { styled } from 'styled-components'

const DragHandler = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

const CurrentHighlight = styled.div`
  top: 0;
  left: 0;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  z-index: 1;
  width: 8px;
  height: 100%;
  display: flex;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.blue_lighter};
`

export { DragHandler, CurrentHighlight }
