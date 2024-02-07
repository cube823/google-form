import { CSSProperties, MouseEvent } from 'react'
import { styled } from 'styled-components'
import { Color } from '../../style/theme'
import AddCircle from './AddCircle'
import ArrowDropDown from './ArrowDropDown'
import Checkbox from './Checkbox'
import CheckboxOutlineBlank from './CheckboxOutlineBlank'
import Close from './Close'
import ContentCopy from './ContentCopy'
import Delete from './Delete'
import DragIndicator from './DragIndicator'
import DragIndicatorRotate from './DragIndicatorRotate'
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
  | 'checkbox-outline-blank'
  | 'close'
  | 'content-copy'
  | 'delete'
  | 'drag-indicator'
  | 'drag-indicator-rotate'
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
  color = 'gray',
  style,
  ...props
}: {
  color?: Color
  iconName: IconSymbol
  onClick?: (e?: MouseEvent<HTMLDivElement>) => void
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
      case 'checkbox-outline-blank':
        return <CheckboxOutlineBlank />
      case 'delete':
        return <Delete />
      case 'drag-indicator':
        return <DragIndicator />
      case 'drag-indicator-rotate':
        return <DragIndicatorRotate />
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
    <IContainer
      color={color}
      style={{ ...style, cursor: Boolean(onClick) ? 'pointer' : 'default' }}
      {...props}
      onClick={onClick}
    >
      {icon()}
    </IContainer>
  )
}

const IContainer = styled.div<{ color?: Color }>`
  height: 24px;
  fill: currentColor;

  color: ${({ theme, color }) => theme.colors[color ?? 'black']};
`

export default Icon
