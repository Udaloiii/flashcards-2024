import Star from '@/assets/logo/star'

import s from './stars.module.scss'

export const Stars = () => {
  const item = [1, 2, 3, 4, 5]

  return (
    <td className={s.container}>
      {item.map(el => (
        <Star key={el} />
      ))}
    </td>
  )
}
