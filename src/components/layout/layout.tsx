import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Header } from '@/components/ui/header'

import s from './layout.module.scss'

type LayoutProps = ComponentPropsWithoutRef<'div'> & {
  email?: string
  icon?: string
  isLoggedIn?: boolean
  userName?: string
}

export const Layout = forwardRef<ElementRef<'div'>, LayoutProps>(
  ({ children, className, email, icon, isLoggedIn, userName, ...rest }, ref) => {
    return (
      <div className={className} ref={ref} {...rest}>
        <Header email={email} icon={icon} isLoggedIn={isLoggedIn} userName={userName} />
        <main className={s.main}>{children}</main>
      </div>
    )
  }
)
