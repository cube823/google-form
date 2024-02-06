import { ReactNode } from 'react'
import * as S from '../style'
import * as Select from '@radix-ui/react-select'

const SelectItem = ({ children, ...props }: { value: string; children: ReactNode }) => {
  return (
    <S.Item {...props}>
      <Select.ItemText>{children}</Select.ItemText>
    </S.Item>
  )
}

export default SelectItem
