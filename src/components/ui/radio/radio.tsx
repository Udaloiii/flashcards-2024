import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radio.module.scss'

type RadioType = {
  disabled?: boolean
  items?: string[]
  onChange: (value: string) => void
}
export const Radio = ({ disabled, items }: RadioType) => {
  // const onChangeHandler = () => onChange('radio-handler called')

  return (
    <form>
      <RadioGroup.Root className={s.wrap} disabled={disabled}>
        {items?.map((el, index) => (
          <div className={s.itemWrap} key={index}>
            <RadioGroup.Item className={s.item} id={`r${index}`} value={el}>
              <RadioGroup.Indicator className={s.indicator} />
            </RadioGroup.Item>
            <label htmlFor={`r${index}`}>{el}</label>
          </div>
        ))}
      </RadioGroup.Root>
    </form>
  )
}
