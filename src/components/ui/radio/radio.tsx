import { Typography } from '@/components/ui/typography'
import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radio.module.scss'

type RadioType = {
  disabled?: boolean
  items?: string[]
  onChange?: (value: string) => void
}
export const Radio = ({ disabled, items }: RadioType) => {
  // const onChangeHandler = () => onChange('radio-handler called')
  const disableCondition = disabled && s.disable

  return (
    <form>
      <RadioGroup.Root className={s.container} disabled={disabled}>
        {items?.map((el, index) => (
          <div className={s.wrap} key={index}>
            <div className={`${s.itemWrap} ${disableCondition}`} tabIndex={0}>
              <RadioGroup.Item className={s.item} id={`r${index}`} value={el}>
                <RadioGroup.Indicator className={s.indicator} />
              </RadioGroup.Item>
            </div>
            <Typography
              as={'label'}
              className={`${s.label} ${disableCondition}`}
              htmlFor={`r${index}`}
              variant={'body2'}
            >
              {el}
            </Typography>
          </div>
        ))}
      </RadioGroup.Root>
    </form>
  )
}
