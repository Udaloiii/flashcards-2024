import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './card.module.scss'

type CardProps<T extends ElementType = 'div'> = {
  as?: T
  children?: ReactNode
} & ComponentPropsWithoutRef<T>
export const Card = <T extends ElementType = 'div'>(props: CardProps<T>) => {
  const { as: Component = 'div', children } = props

  return <Component className={`${s.container}`}>{children}</Component>
}
