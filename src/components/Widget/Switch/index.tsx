import * as Switch from '@radix-ui/react-switch'
import { styled } from 'styled-components'

interface QuestionSwitchPros {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}

const QuestionSwitch = ({ checked, onCheckedChange }: QuestionSwitchPros) => {
  return (
    <StyledSwitchRoot checked={checked} onCheckedChange={onCheckedChange}>
      <StyledSwitchThumb />
    </StyledSwitchRoot>
  )
}

const StyledSwitchRoot = styled(Switch.Root)`
  width: 42px;
  height: 25px;
  background-color: rgb(185, 185, 185);
  border-radius: 9999px;
  position: relative;
  padding: 0;
  box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.07);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &[date-state='checked'] {
    background-color: ${(props) => props.theme.colors.purple_dark};
  }
`

const StyledSwitchThumb = styled(Switch.Thumb)`
  display: block;
  width: 21px;
  height: 21px;
  transform: translateX(2px);
  background-color: white;
  border-radius: 9999px;
  transition: transform 100ms;
  will-change: transform;
  box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.07);

  &[data-state='checked'] {
    transform: translateX(19px);
  }
`

export default QuestionSwitch
