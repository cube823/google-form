import styled from 'styled-components'

const SheetHeader = () => {
  return (
    <SheetHeaderContainer>
      <TopDeco />
    </SheetHeaderContainer>
  )
}

const SheetHeaderContainer = styled.div`
  display: grid;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  max-width: 768px;
`

const TopDeco = styled.div`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 10px;
  left: -1px;
  position: absolute;
  top: -1px;
  width: calc(100% + 2px);
  background-color: rgb(103, 58, 183);
`

export default SheetHeader
