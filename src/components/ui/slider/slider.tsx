import { ChangeEvent, KeyboardEvent, useState } from 'react'

import * as RadixSlider from '@radix-ui/react-slider'

import s from './slider.module.scss'

type SliderProps = {
  maxValue: number
  minValue?: number
  onChange: (value: number[]) => void
  step?: number
  value: number[]
}
export const Slider = ({
  maxValue,
  minValue = 0,
  onChange,
  step = 1,
  value,
  ...rest
}: SliderProps) => {
  const [inputValue, setInputValue] = useState(value)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.name === 'min' && Number(e.currentTarget.value)) {
      setInputValue([Number(e.currentTarget.value), inputValue[1]])
    } else if (e.currentTarget.name === 'max' && Number(e.currentTarget.value)) {
      setInputValue([inputValue[0], Number(e.currentTarget.value)])
    }
  }

  const onEnterPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
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
        style={{ textAlign: 'center' }}
        value={inputValue[0]}
      />
      <RadixSlider.Root
        className={s.root}
        max={maxValue}
        min={0}
        onValueChange={handler}
        step={step}
        value={value}
        {...rest}
      >
        <RadixSlider.Track className={s.sliderTrack}>
          <RadixSlider.Range className={s.sliderRange} />
        </RadixSlider.Track>
        {value?.map((_, index) => {
          return <RadixSlider.Thumb aria-label={'Volume'} className={s.sliderThumb} key={index} />
        })}
      </RadixSlider.Root>
      <input
        className={s.value}
        name={'max'}
        onChange={onChangeHandler}
        onKeyDown={onEnterPressHandler}
        style={{ textAlign: 'center' }}
        value={inputValue[1]}
      />
    </div>
  )
}
