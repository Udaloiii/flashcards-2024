import { useId } from 'react'

import Check from '@/assets/logo/check'
import Uncheck from '@/assets/logo/uncheck'
import { Typography } from '@/components/ui/typography'
import * as CheckBox from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  checked?: boolean
  disabled?: boolean
  label?: string
  onValueChange?: (checked: boolean) => void
}
export const Checkbox = ({ checked, disabled, label, onValueChange }: CheckboxProps) => {
  const id = useId()

  const disableCondition = disabled && s.disabled

  return (
    <div className={`${s.wrap} ${disableCondition}`}>
      <LabelRadix.Root className={s.wrap} htmlFor={id}>
        <CheckBox.Root
          checked={checked}
          className={s.checkbox}
          disabled={disabled}
          id={id}
          onCheckedChange={onValueChange}
        >
          <Uncheck />
          <CheckBox.Indicator className={s.indicator}>
            <Check />
          </CheckBox.Indicator>
        </CheckBox.Root>
        <Typography as={'label'} htmlFor={id} variant={'body2'}>
          {label}
        </Typography>
      </LabelRadix.Root>
    </div>
  )
}
