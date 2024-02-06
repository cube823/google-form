import { CSSProperties } from 'react'
import { styled } from 'styled-components'
import Icon, { IconSymbol } from '../../Icons'

interface IconButtonProps {
  iconName: IconSymbol
  onClick: () => void
  style?: CSSProperties
}

const IconButton = ({ iconName, onClick, style }: IconButtonProps) => {
  return <IContainer color='gray' style={style} iconName={iconName} onClick={onClick} />
}

const IContainer = styled(Icon)`
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover {
    &::before {
      content: '';
      position: absolute;
      top: -8px;
      left: -8px;
      width: calc(100% + 16px);
      height: calc(100% + 16px);

      background-color: rgba(0, 0, 0, 0.04);
      border-radius: 50%;
    }
  }
`

export default IconButton
