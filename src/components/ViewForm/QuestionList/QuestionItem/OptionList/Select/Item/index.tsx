import { ReactNode } from 'react'
import { Select } from '../../../../../../Widget/Select/style'

const SelectItem = ({ children, ...props }: { value: string; children: ReactNode }) => {
  return (
    <Select.Item {...props}>
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  )
}

export default SelectItem
