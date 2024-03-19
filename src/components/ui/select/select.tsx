import ArrowDown from '@/assets/logo/arrow-down'
import { Typography } from '@/components/ui/typography'
import * as RadixSelect from '@radix-ui/react-select'

import s from './select.module.scss'

type SelectType = {
  className?: string
  disabled?: boolean
  items?: string[]
  onChange?: () => void
  placeholder?: string
  value?: string
}
export const Select = ({
  className,
  disabled,
  items,
  onChange,
  placeholder,
  value,
}: SelectType) => {
  const onChangeHandler = () => onChange?.()

  return (
    <RadixSelect.Root disabled={disabled} onValueChange={onChangeHandler} value={value}>
      <RadixSelect.Trigger aria-label={'Food'} className={`${s.SelectTrigger} ${className}`}>
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon className={s.SelectIcon}>
          <ArrowDown />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content className={s.SelectContent} position={'popper'} side={'bottom'}>
          <RadixSelect.Viewport className={s.SelectViewport}>
            {items?.map((el, index) => <SelectItem key={index} value={el} />)}
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
}

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
