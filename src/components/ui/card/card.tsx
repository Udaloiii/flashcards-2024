import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import s from './card.module.scss'

type CardProps = {
  children?: ReactNode
  className?: string
} & ComponentPropsWithoutRef<'div'>

export const Card: FC<CardProps> = ({ children, className, ...rest }: CardProps) => {
  return (
    <div className={`${s.container} ${className}`} {...rest}>
      {children}
    </div>
  )
}
