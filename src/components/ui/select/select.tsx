import ArrowDown from '@/assets/logo/arrow-down'
import { SelectItem } from '@/components/ui/select/select-item/select-item'
import { Typography } from '@/components/ui/typography'
import * as RadixSelect from '@radix-ui/react-select'

import s from './select.module.scss'

type SelectType = {
  className?: string
  disabled?: boolean
  items?: string[]
  label?: string
  onChange?: () => void
  placeholder?: string
  value?: string
}
export const Select = ({
  className,
  disabled,
  items,
  label,
  onChange,
  placeholder,
  value,
}: SelectType) => {
  const onChangeHandler = () => onChange?.()
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
      <RadixSelect.Root disabled={disabled} onValueChange={onChangeHandler} value={value}>
        <RadixSelect.Trigger aria-label={'Food'} className={`${s.selectTrigger} ${className}`}>
          <RadixSelect.Value placeholder={placeholder} />
          <RadixSelect.Icon className={s.selectIcon}>
            <ArrowDown />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>
        <RadixSelect.Portal>
          <RadixSelect.Content className={s.selectContent} position={'popper'} side={'bottom'}>
            <RadixSelect.Viewport className={s.selectViewport}>
              {items?.map((el, index) => <SelectItem key={index} value={el} />)}
            </RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    </>
  )
}
