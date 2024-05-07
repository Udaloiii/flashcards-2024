import { ComponentPropsWithoutRef, ReactNode } from 'react'

import s from './modal-body.module.scss'

type ModalBodyProps = {
  children: ReactNode
} & ComponentPropsWithoutRef<'div'>

export const ModalBody = ({ children, className }: ModalBodyProps) => {
  return <div className={`${s.body} ${className}`}>{children}</div>
}
