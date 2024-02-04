import { ReactNode } from 'react'
import * as S from '../style'
import * as Select from '@radix-ui/react-select'
import Icon, { IconSymbol } from '../../../Icons'

const SelectItem = ({
  children,
  iconName,
  ...props
}: {
  value: string
  iconName: IconSymbol
  children: ReactNode
}) => {
  return (
    <S.Item {...props}>
      <Icon iconName={iconName} color='#5f6368' />
      <Select.ItemText>{children}</Select.ItemText>
    </S.Item>
  )
}

export default SelectItem
