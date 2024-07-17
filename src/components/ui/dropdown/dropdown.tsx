import { ComponentPropsWithoutRef, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropdown.module.scss'

type DropdownProps = {
  children: ReactNode
  className?: string
  disabled?: boolean
  trigger?: ReactNode
} & ComponentPropsWithoutRef<typeof DropdownMenu.Root>
export const Dropdown = ({
  children,
  className,
  defaultOpen,
  disabled,
  modal,
  onOpenChange,
  open,
  trigger,
}: DropdownProps) => {
  const disable = disabled && s.disabled

  return (
    <DropdownMenu.Root
      defaultOpen={defaultOpen}
      modal={modal}
      onOpenChange={onOpenChange}
      open={open}
    >
      <DropdownMenu.Trigger asChild className={`${s.trigger} ${className} ${disable}`}>
        {trigger}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={s.content}
          // forceMount
          // onClick={event => event.stopPropagation()}
        >
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
} & ComponentPropsWithoutRef<typeof DropdownMenu.Item>

export const DropdownItem = ({ children, className, onSelect, ...rest }: DropdownItemProps) => {
  return (
    <DropdownMenu.Item
      asChild
      className={`${s.item} ${className}`}
      onClick={event => event.stopPropagation()}
      onSelect={onSelect}
      {...rest}
    >
      {children}
    </DropdownMenu.Item>
  )
}

export const DropdownSeparator = () => {
  return <DropdownMenu.Separator className={s.separator} />
}
