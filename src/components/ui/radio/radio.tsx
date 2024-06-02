import { ReactNode, useId } from 'react'

import { Typography } from '@/components/ui/typography'
import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radio.module.scss'

type RadioType = {
  children?: ReactNode
  defaultValue?: string
  disabled?: boolean
  onChange?: (value: string) => void
}
export const Radio = ({ children, defaultValue, disabled, onChange }: RadioType) => {
  return (
    <RadioGroup.Root
      className={s.container}
      defaultValue={String(defaultValue)}
      disabled={disabled}
      onValueChange={onChange}
    >
      {children}
    </RadioGroup.Root>
  )
}

type RadioItemProps = {
  disabled?: boolean
  label?: string
  value: string
}
export const RadioItem = ({ disabled, label, value }: RadioItemProps) => {
  const disableCondition = disabled && s.disable

  const id = useId()

  return (
    <div className={s.wrap}>
      <div className={`${s.itemWrap} ${disableCondition}`} tabIndex={0}>
        <RadioGroup.Item className={s.item} id={id} value={value}>
          <RadioGroup.Indicator className={s.indicator} />
        </RadioGroup.Item>
      </div>
      {label && (
        <Typography
          as={'label'}
          className={`${s.label} ${disableCondition}`}
          htmlFor={id}
          variant={'body2'}
        >
          {label}
        </Typography>
      )}
    </div>
  )
}
