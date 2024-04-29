import { ComponentPropsWithoutRef } from 'react'

import s from './page.module.scss'

type PageProps = ComponentPropsWithoutRef<'div'>
export const Page = ({ className, ...rest }: PageProps) => {
  return <div className={`${s.page} ${className}`} {...rest}></div>
}
