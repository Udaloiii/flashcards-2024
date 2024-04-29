import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Header } from '@/components/ui/header'

import s from './layout.module.scss'

type LayoutProps = ComponentPropsWithoutRef<'div'>

export const Layout = forwardRef<ElementRef<'div'>, LayoutProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div className={className} ref={ref} {...rest}>
        <Header />
        {children}
      </div>
    )
  }
)
