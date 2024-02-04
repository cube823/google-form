import { CSSProperties } from 'react'
import { styled } from 'styled-components'
import AddCircle from './AddCircle'
import ArrowDropDown from './ArrowDropDown'
import Checkbox from './Checkbox'
import Close from './Close'
import ContentCopy from './ContentCopy'
import Delete from './Delete'
import DragIndicator from './DragIndicator'
import ExpandCircleDown from './ExpandCircleDown'
import MoreVert from './MoreVert'
import RadioButtonChecked from './RadioButtonChecked'
import RadioButtonUnchecked from './RadioButtonUnchecked'
import ShortText from './ShortText'
import Subject from './Subject'
import Visibility from './Visibility'

export type IconSymbol =
  | 'add-circle'
  | 'arrow-drop-down'
  | 'checkbox'
  | 'close'
  | 'content-copy'
  | 'delete'
  | 'drag-indicator'
  | 'expand-circle-down'
  | 'more-vert'
  | 'radio-button-checked'
  | 'radio-button-unchecked'
  | 'short-text'
  | 'subject'
  | 'visibility'

const Icon = ({
  iconName,
  onClick,
  color = '#5f6368',
  style,
  ...props
}: {
  color?: string
  iconName: IconSymbol
  onClick?: () => void
  style?: CSSProperties
}) => {
  const icon = () => {
    switch (iconName) {
      case 'add-circle':
        return <AddCircle />
      case 'arrow-drop-down':
        return <ArrowDropDown />
      case 'close':
        return <Close />
      case 'content-copy':
        return <ContentCopy />
      case 'checkbox':
        return <Checkbox />
      case 'delete':
        return <Delete />
      case 'drag-indicator':
        return <DragIndicator />
      case 'expand-circle-down':
        return <ExpandCircleDown />
      case 'more-vert':
        return <MoreVert />
      case 'radio-button-checked':
        return <RadioButtonChecked />
      case 'radio-button-unchecked':
        return <RadioButtonUnchecked />
      case 'short-text':
        return <ShortText />
      case 'subject':
        return <Subject />
      case 'visibility':
        return <Visibility />
      default:
        return null
    }
  }

  return (
    <IContainer style={{ ...style, color }} {...props} onClick={onClick} isClickable={!!onClick}>
      {icon()}
    </IContainer>
  )
}

const IContainer = styled.div<{ isClickable?: boolean }>`
  height: 24px;
  cursor: ${(props) => (props.isClickable ? 'pointer' : 'default')};
  fill: currentColor;
`

export default Icon
