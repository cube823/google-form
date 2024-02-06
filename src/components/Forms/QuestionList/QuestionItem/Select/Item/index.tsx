import { ReactNode } from 'react'
import Icon, { IconSymbol } from '../../../../../Icons'
import { Select } from '../../../../../Widget/Select/style'

const SelectItem = ({
  children,
  iconName,
  isCurrent,
  ...props
}: {
  value: string
  isCurrent?: boolean
  iconName: IconSymbol
  children: ReactNode
}) => {
  return (
    <Select.Item {...props} isCurrent={isCurrent}>
      <Icon iconName={iconName} color='gray' />
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  )
}

export default SelectItem
