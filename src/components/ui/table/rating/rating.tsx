import Star from '@/assets/logo/star'

import s from './rating.module.scss'

type RatingProps = {
  value: number
}
export const Rating = ({ value }: RatingProps) => {
  const item = [1, 2, 3, 4, 5]

  return (
    <span className={s.container}>
      {item.map(el => (
        <Star className={`${el <= value && s.selected}`} key={el} />
      ))}
    </span>
  )
}
