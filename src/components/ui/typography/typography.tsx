import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './typography.module.scss'

type TypographyProps<T extends ElementType = 'span'> = {
  as?: T
  children?: ReactNode
  variant:
    | 'body1'
    | 'body2'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'link1'
    | 'link2'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'span'>(props: TypographyProps<T>) => {
  const { as: Component = 'span', children, className, variant, ...rest } = props

  return (
    <Component className={`${s.typography} ${s[variant]} ${className}`} {...rest}>
      {children}
    </Component>
  )
}
