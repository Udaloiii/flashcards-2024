import { ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropdown.module.scss'

type DropdownProps = {
  children: ReactNode
  className?: string
  onOpenChange?: (open: boolean) => void // для контроля
  open?: boolean // для контроля
  trigger?: ReactNode
}
export const Dropdown = ({ children, className, onOpenChange, open, trigger }: DropdownProps) => {
  return (
    <DropdownMenu.Root onOpenChange={onOpenChange} open={open}>
      <DropdownMenu.Trigger className={`${s.trigger} ${className}`}>{trigger}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.content}>
          <div className={s.triangle}></div>
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

type DropdownItemProps = {
  children?: ReactNode
  className?: string
}

export const DropdownItem = ({ children, className }: DropdownItemProps) => {
  return <DropdownMenu.Item className={`${s.item} ${className}`}>{children}</DropdownMenu.Item>
}

export const DropdownSeparator = () => {
  return <DropdownMenu.Separator className={s.separator} />
}
