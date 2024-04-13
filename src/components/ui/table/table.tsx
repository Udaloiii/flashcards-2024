import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import s from './table.module.scss'

type TableProps = {
  children: ReactNode
  className?: string
} & ComponentPropsWithoutRef<'table'>
export const Table = forwardRef<ElementRef<'table'>, TableProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <table className={`${s.table} ${className}`} ref={ref} {...rest}>
        {children}
      </table>
    )
  }
)
export const TableHeader = forwardRef<ElementRef<'thead'>, ComponentPropsWithoutRef<'thead'>>(
  ({ ...rest }, ref) => {
    return <thead ref={ref} {...rest}></thead>
  }
)
export const TableRow = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ ...rest }, ref) => {
    return <tr ref={ref} {...rest} />
  }
)

export const TableHead = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ ...rest }, ref) => {
    return <th ref={ref} {...rest} />
  }
)

export const TableBody = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  ({ ...rest }, ref) => {
    return <tbody ref={ref} {...rest} />
  }
)

export const TableCell = forwardRef<ElementRef<'td'>, ComponentPropsWithoutRef<'td'>>(
  ({ ...rest }, ref) => {
    return <td ref={ref} {...rest} />
  }
)
