import { CSSProperties } from 'react'
import styled from 'styled-components'
import { Color } from '../../../style/theme'

interface TextCssProps {
  fontSize?: number
  lineHeight?: number
  color?: Color
  fontWeight?: number

  style?: CSSProperties
}

export interface TextBaseProps extends TextCssProps {
  text: string
}

const Text = ({
  text,
  fontSize = 14,
  color = 'black',
  fontWeight = 400,
  lineHeight,
  style,
}: TextBaseProps) => {
  return (
    <TextBaseContainer
      fontSize={fontSize}
      lineHeight={lineHeight}
      color={color}
      fontWeight={fontWeight}
      style={style}
    >
      {text}
    </TextBaseContainer>
  )
}

const TextBaseContainer = styled.div<TextCssProps>`
  line-height: 100%;
  font-family: inherit;
  width: fit-content;

  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight}px;
  color: ${({ theme, color }) => theme.colors[color ?? 'black']};
`

export default Text
