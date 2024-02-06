import { styled } from 'styled-components'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(1px);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`

const Dialog = styled.dialog`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 0;
  gap: 20px;
  z-index: 100;

  transform: translate(0%, -50%);

  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  border: 0;

  &::backdrop {
    background-color: ${({ theme }) => theme.colors.black};
  }
`

const Header = styled.div`
  width: 100%;
  display: flex;
  font-family: 'Open Sans', sans serif;
  justify-content: space-between;
  align-items: center;
`

const Content = styled.div`
  display: grid;
  gap: 10px;
`

const Footer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`

const Button = styled.button`
  padding: 10px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  &:hover {
    background-color: rgba(218, 220, 224, 0.3);
  }
`

export const Modal = {
  Overlay,
  Dialog,
  Header,

  Button,
  Content,
  Footer,
}
