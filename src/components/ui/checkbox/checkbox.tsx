import { useState } from 'react'

import Check from '@/assets/logo/check'
import { Typography } from '@/components/ui/typography'
import * as CheckBox from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

type CheckboxProps = {
  disabled?: boolean
  label?: string
}
export const Checkbox = ({ disabled, label }: CheckboxProps) => {
  const [checked, setChecked] = useState(false)
  const checkHandler = () => setChecked(prevState => !prevState)
  const disableCondition = disabled && s.disabled

  return (
    <form>
      <div className={`${s.wrap} ${disableCondition}`}>
        <div className={s.wrapForCheckbox} tabIndex={0}>
          <CheckBox.Root
            className={s.checkbox}
            disabled={disabled}
            id={'c1'}
            onCheckedChange={checkHandler}
          >
            {checked && (
              <CheckBox.Indicator className={s.indicator}>
                <Check />
              </CheckBox.Indicator>
            )}
          </CheckBox.Root>
        </div>
        {label && (
          <Typography as={'label'} className={s.label} htmlFor={'c1'} variant={'body2'}>
            {label}
          </Typography>
        )}
      </div>
    </form>
  )
}
