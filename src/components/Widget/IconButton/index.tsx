import { styled } from 'styled-components'
import Icon, { IconSymbol } from '../../Icons'

const IconButton = ({ iconName, onClick }: { iconName: IconSymbol; onClick: () => void }) => {
  return <IContainer color='#5f6368' iconName={iconName} onClick={onClick} />
}

const IContainer = styled(Icon)`
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
    border-radius: 50%;
  }
`

export default IconButton
