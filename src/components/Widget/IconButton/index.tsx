import { CSSProperties } from 'react'
import { styled } from 'styled-components'
import { Color } from '../../../style/theme'
import Icon, { IconSymbol } from '../../Icons'

interface IconButtonProps {
  iconName: IconSymbol
  onClick: () => void
  style?: CSSProperties
  color?: Color
}

const IconButton = ({ color, iconName, onClick, style }: IconButtonProps) => {
  return <IContainer color={color ?? 'gray'} style={style} iconName={iconName} onClick={onClick} />
}

const IContainer = styled(Icon)<{ color: Color }>`
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: transparent;
  opacity: 1;

  &:hover {
    &::before {
      content: '';
      position: absolute;
      top: -8px;
      left: -8px;
      width: calc(100% + 16px);
      height: calc(100% + 16px);
      border-radius: 50%;
      background-color: ${({ theme, color }) => theme.colors[color]};
      opacity: 0.1;
      transition: all 1s ease-in-out;
    }
  }
`

export default IconButton
