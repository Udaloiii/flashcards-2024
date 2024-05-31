import { ChangeEvent, KeyboardEvent, useState } from 'react'

import { Slider, SliderValue } from '@/components/ui/slider'

import s from './filter-count-slider.module.scss'

type FilterCountSlid = {
  maxValue: number
  minValue?: number
  onChange: (value: number[]) => void
  step?: number
  value: number[]
}
export const FilterCountSlider = ({
  maxValue,
  minValue = 0,
  onChange,
  step = 1,
  value,
}: FilterCountSlid) => {
  const [inputValue, setInputValue] = useState(value)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.name === 'min') {
      setInputValue([Number(e.currentTarget.value), inputValue[1]])
    } else if (e.currentTarget.name === 'max') {
      setInputValue([inputValue[0], Number(e.currentTarget.value)])
    }
  }

  const onEnterPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === 'Enter' &&
      Number(e.currentTarget.value) >= 0 &&
      Number(e.currentTarget.value) <= maxValue
    ) {
      if (e.currentTarget.name === 'min' && Number(e.currentTarget.value) > inputValue[1]) {
        onChange?.([inputValue[1], Number(e.currentTarget.value)] ?? [0, 0])
        setInputValue([inputValue[1], Number(e.currentTarget.value)])
      } else if (e.currentTarget.name === 'max' && Number(e.currentTarget.value) < inputValue[0]) {
        onChange?.([Number(e.currentTarget.value), inputValue[0]] ?? [0, 0])
        setInputValue([Number(e.currentTarget.value), inputValue[0]] ?? [0, 0])
      } else {
        onChange?.(inputValue ?? [0, 0])
      }
      e.currentTarget.blur()
    }
  }
  const handler = (value: number[]) => {
    onChange?.(value)
    setInputValue(value)
  }

  return (
    <div className={s.container}>
      <input
        className={s.value}
        name={'min'}
        onChange={onChangeHandler}
        onKeyDown={onEnterPressHandler}
        value={inputValue[0]}
      />
      <Slider maxValue={maxValue} minValue={minValue} onChange={handler} step={step} value={value}>
        {value?.map((_, index) => {
          return <SliderValue key={index} />
        })}
      </Slider>
      <input
        className={s.value}
        name={'max'}
        onChange={onChangeHandler}
        onKeyDown={onEnterPressHandler}
        value={inputValue[1]}
      />
    </div>
  )
}
