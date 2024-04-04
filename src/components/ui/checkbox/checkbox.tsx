import { useId, useState } from 'react'

import Check from '@/assets/logo/check'
import Uncheck from '@/assets/logo/uncheck'
import * as CheckBox from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'

import s from './checkbox.module.scss'

type CheckboxProps = {
  checked?: boolean
  disabled?: boolean
  label?: string
}
export const Checkbox = ({ checked, disabled, label }: CheckboxProps) => {
  const id = useId()
  const [check, setCheck] = useState(checked)
  const checkHandler = () => setCheck(prevState => !prevState)
  const disableCondition = disabled && s.disabled

  return (
    <div className={`${s.wrap} ${disableCondition}`}>
      <LabelRadix.Root className={s.wrap} htmlFor={id}>
        <CheckBox.Root
          checked={check}
          className={s.checkbox}
          disabled={disabled}
          id={id}
          onCheckedChange={checkHandler}
        >
          <Uncheck />
          <CheckBox.Indicator className={s.indicator}>
            <Check />
          </CheckBox.Indicator>
        </CheckBox.Root>
        <div>{label}</div>
      </LabelRadix.Root>
    </div>
  )
}
