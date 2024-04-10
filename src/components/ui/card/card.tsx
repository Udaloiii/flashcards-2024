import { FC, ReactNode } from 'react'

import s from './card.module.scss'

type CardProps = {
  children?: ReactNode
  className?: string
}

export const Card: FC<CardProps> = ({ children, className }: CardProps) => {
  return <div className={`${s.container} ${className}`}>{children}</div>
}
