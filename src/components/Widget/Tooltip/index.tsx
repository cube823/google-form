import { ReactNode } from 'react'
import * as RadixTooltip from '@radix-ui/react-tooltip'
import { keyframes, styled } from 'styled-components'

export type Side = 'bottom' | 'left' | 'right' | 'top'

interface TooltipProps {
  children: ReactNode
  content?: string
  side?: Side
}

const Tooltip = ({ children, content, side }: TooltipProps) => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root delayDuration={0}>
        <Trigger>{children}</Trigger>
        <RadixTooltip.Portal>
          <Content sideOffset={10} align='center' side={side}>
            {content}
          </Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}

const Trigger = styled(RadixTooltip.Trigger)`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`

const slideUpAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const slideRightAndFade = keyframes`
    from {
    opacity: 0;
    transform: translateX(-2px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const slideDownAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const slideLeftAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(2px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const Content = styled(RadixTooltip.Content)`
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 12px;
  line-height: 1;
  color: white;
  background-color: black;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  user-select: none;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  &[data-state='delayed-open'][data-side='top'] {
    animation-name: ${slideDownAndFade};
  }
  &[data-state='delayed-open'][data-side='right'] {
    animation-name: ${slideLeftAndFade};
  }
  &[data-state='delayed-open'][data-side='bottom'] {
    animation-name: ${slideUpAndFade};
  }
  &[data-state='delayed-open'][data-side='left'] {
    animation-name: ${slideRightAndFade};
  }
`

export default Tooltip
