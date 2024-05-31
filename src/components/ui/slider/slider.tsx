import { ReactNode } from 'react'

import * as RadixSlider from '@radix-ui/react-slider'

import s from './slider.module.scss'

type SliderProps = {
  children?: ReactNode
  className?: string
  maxValue: number
  minValue?: number
  onChange: (value: number[]) => void
  step?: number
  value: number[]
}
export const Slider = ({
  children,
  className,
  maxValue,
  minValue = 0,
  onChange,
  step = 1,
  value,
  ...rest
}: SliderProps) => {
  return (
    <RadixSlider.Root
      className={`${s.root} ${className}`}
      max={maxValue}
      min={minValue}
      onValueChange={onChange}
      step={step}
      value={value}
      {...rest}
    >
      <RadixSlider.Track className={s.sliderTrack}>
        <RadixSlider.Range className={s.sliderRange} />
      </RadixSlider.Track>
      {children}
    </RadixSlider.Root>
  )
}

export const SliderValue = () => {
  return <RadixSlider.Thumb aria-label={'Volume'} className={s.sliderThumb} />
}
