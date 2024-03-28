import { Typography } from '@/components/ui/typography'
import * as RadixSelect from '@radix-ui/react-select'

import s from '@/components/ui/select/select.module.scss'

type ItemType = {
  className?: string
  value?: string // именно стринг в документации Radix
}
export const SelectItem = ({ className, value = '' }: ItemType) => {
  return (
    <RadixSelect.Item className={`${s.selectItem} ${className}`} value={value}>
      <Typography variant={'body1'}>
        <RadixSelect.ItemText>{value}</RadixSelect.ItemText>
      </Typography>
    </RadixSelect.Item>
  )
}
