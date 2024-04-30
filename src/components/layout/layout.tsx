import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Header } from '@/components/ui/header'

import s from './layout.module.scss'

type LayoutProps = ComponentPropsWithoutRef<'div'> & {
  isLoggedIn?: boolean
  userName?: string
}

export const Layout = forwardRef<ElementRef<'div'>, LayoutProps>(
  ({ children, className, isLoggedIn, userName, ...rest }, ref) => {
    return (
      <div className={className} ref={ref} {...rest}>
        <Header isLoggedIn={isLoggedIn} userName={userName} />
        <main className={s.main}>{children}</main>
      </div>
    )
  }
)
