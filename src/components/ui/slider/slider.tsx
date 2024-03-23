import { useState } from 'react'

import * as RadixSlider from '@radix-ui/react-slider'

import s from './slider.module.scss'

type SliderProps = {
  onChange?: (value: number[]) => void
  value: number[]
}
export const Slider = ({ value }: SliderProps) => {
  const [arrValue, setArrValue] = useState(value)
  const onChangeHandler = (e: number[]) => {
    setArrValue(e)
  }

  return (
    <div className={s.container}>
      <div className={s.value}>{arrValue[0]}</div>
      {/*<SliderInput maxValue={100} onChange={setArrValue} value={arrValue[0]} />*/}
      {/* потом сделать чтобы через инпут тоже можно было менять слайдер*/}
      <RadixSlider.Root
        className={s.root}
        defaultValue={value}
        max={100}
        min={0}
        onValueChange={onChangeHandler}
        step={1}
      >
        <RadixSlider.Track className={s.sliderTrack}>
          <RadixSlider.Range className={s.sliderRange} />
        </RadixSlider.Track>
        <RadixSlider.Thumb aria-label={'Volume'} className={s.sliderThumb} />
        <RadixSlider.Thumb aria-label={'Volume'} className={s.sliderThumb} />
      </RadixSlider.Root>
      <div className={s.value}>{arrValue[1]}</div>
      {/*<SliderInput value={arrValue[1]} />*/}
    </div>
  )
}
