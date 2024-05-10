import ArrowDown from '@/assets/logo/arrow-down'
import { SelectItem } from '@/components/ui/select/select-item/select-item'
import { Typography } from '@/components/ui/typography'
import * as RadixSelect from '@radix-ui/react-select'

import s from './select.module.scss'

type SelectType = {
  className?: string
  defaultValue: string
  disabled?: boolean
  items: string[]
  label?: string
  onChange?: (size: string) => void
  placeholder?: string
  value: string
}
export const Select = ({
  className,
  defaultValue,
  disabled,
  items,
  label,
  onChange,
  placeholder,
  value,
}: SelectType) => {
  const disableCondition = disabled && s.labelDisabled

  return (
    <>
      {label && (
        <Typography
          as={'label'}
          className={`${s.selectLabel} ${disableCondition}`}
          variant={'body2'}
        >
          {label}
        </Typography>
      )}
      <RadixSelect.Root disabled={disabled} onValueChange={onChange} value={value}>
        <RadixSelect.Trigger className={`${s.selectTrigger} ${className}`}>
          <RadixSelect.Value defaultValue={defaultValue} placeholder={placeholder} />
          <RadixSelect.Icon className={s.selectIcon}>
            <ArrowDown />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>
        <RadixSelect.Portal>
          <RadixSelect.Content className={s.selectContent} position={'popper'}>
            <RadixSelect.Viewport className={s.selectViewport}>
              {items?.map((el, index) => <SelectItem key={index} value={el} />)}
            </RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    </>
  )
}
