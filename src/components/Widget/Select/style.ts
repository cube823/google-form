import * as RadixSelect from '@radix-ui/react-select'
import { styled } from 'styled-components'

const Root = styled(RadixSelect.Root)``

const Portal = styled(RadixSelect.Portal)``
const ScrollUpButton = styled(RadixSelect.ScrollUpButton)`
  display: flex;
  padding: 0 16px;
  justify-content: center;
`

const Group = styled(RadixSelect.Group)``

const Separator = styled(RadixSelect.Separator)`
  width: 100%;
  height: 1px;
  background-color: #e5e5e5;
  margin: 8px 0;
`

const Viewport = styled(RadixSelect.Viewport)``

const Trigger = styled(RadixSelect.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  border: 1px solid rgb(218, 220, 224);
  flex-shrink: 0;

  width: 210px;
  padding: 11px 16px 11px 16px;
  font-size: 14px;
  outline: none;
  cursor: pointer;
`

const Value = styled(RadixSelect.Value)`
  font-size: 14px;
`

const Content = styled(RadixSelect.Content)`
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 8px 0 8px 0;

  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);
`

const Item = styled(RadixSelect.Item)<{ isCurrent?: boolean }>`
  display: flex;
  cursor: pointer;
  align-items: center;
  position: relative;
  padding: 7px 16px 7px 16px;
  height: 48px;
  gap: 8px;
  outline: none;

  background-color: ${({ isCurrent }) => (isCurrent ? 'rgba(26,115,232,.04)' : 'transparent')};

  &:hover {
    background-color: ${({ isCurrent }) => (isCurrent ? 'rgba(26,115,232,.02)' : '#eee')};
  }
`

const ItemText = styled(RadixSelect.ItemText)`
  z-index: 1;
`

export const Select = {
  Root,
  Trigger,
  Value,
  Content,
  Item,
  ItemText,
  Portal,
  ScrollUpButton,
  Group,
  Separator,
  Viewport,
}
