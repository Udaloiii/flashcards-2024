import ArrowDown from '@/assets/logo/arrow-down'
import { Typography } from '@/components/ui/typography'
import * as RadixSelect from '@radix-ui/react-select'

import s from './select.module.scss'

type SelectType = {
  items?: string[]
}
export const Select = ({ items }: SelectType) => (
  <RadixSelect.Root>
    <RadixSelect.Trigger aria-label={'Food'} className={s.SelectTrigger}>
      <RadixSelect.Value placeholder={'Select a fruit…'} />
      <RadixSelect.Icon className={s.SelectIcon}>
        <ArrowDown />
      </RadixSelect.Icon>
    </RadixSelect.Trigger>
    <RadixSelect.Portal>
      <RadixSelect.Content className={s.SelectContent} position={'popper'}>
        <RadixSelect.Viewport className={s.SelectViewport}>
          {items?.map((el, index) => <SelectItem key={index} value={el} />)}
        </RadixSelect.Viewport>
      </RadixSelect.Content>
    </RadixSelect.Portal>
  </RadixSelect.Root>
)

type ItemType = {
  className?: string
  value?: string
}
const SelectItem = ({ className, value = '' }: ItemType) => {
  return (
    <RadixSelect.Item className={`${s.SelectItem} ${className}`} value={value}>
      <Typography variant={'body2'}>
        <RadixSelect.ItemText>{value}</RadixSelect.ItemText>
      </Typography>
    </RadixSelect.Item>
  )
}
