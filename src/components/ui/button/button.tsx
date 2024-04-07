import { ComponentPropsWithoutRef, ReactNode } from 'react'

import s from './button.module.scss'

type ButtonProps = {
  children?: ReactNode
  fullWidth?: boolean
  onSort?: (value: string) => void
  variant?: 'icon' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<'button'>
export const Button = ({
  children,
  className,
  fullWidth,
  onSort,
  variant = 'primary',
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
