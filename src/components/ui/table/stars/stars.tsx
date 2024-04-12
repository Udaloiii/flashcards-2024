import Star from '@/assets/logo/star'

import s from './stars.module.scss'

export const Stars = () => {
  const item = [1, 2, 3, 4, 5]

  return (
    <span className={s.container}>
      {item.map(el => (
        <Star key={el} />
      ))}
    </span>
  )
}
