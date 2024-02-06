import * as Select from '@radix-ui/react-select'
import { styled } from 'styled-components'

const Trigger = styled(Select.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  border: 1px solid rgb(218, 220, 224);
  flex-shrink: 0;
  cursor: pointer;
  width: 210px;
  padding: 11px 16px 11px 16px;
  font-size: 14px;
`

const Value = styled(Select.Value)`
  font-size: 14px;
`

const Content = styled(Select.Content)`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 8px 16px 8px 16px;

  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);
`

const Item = styled(Select.Item)`
  display: flex;
  cursor: pointer;
  align-items: center;
  padding: 7px 0 7px 0;
  gap: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey_lighter};
  }
`

export { Trigger, Value, Content, Item }
