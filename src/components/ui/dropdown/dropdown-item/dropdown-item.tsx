import { ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropdown-item.module.scss'

type DropdownItemProps = {
  children?: ReactNode
}
export const DropdownItem = ({ children }: DropdownItemProps) => {
  return <DropdownMenu.Item className={s.item}>{children}</DropdownMenu.Item>
}
