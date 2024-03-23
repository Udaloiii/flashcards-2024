import { ReactNode } from 'react'

import VerticalDots from '@/assets/logo/vertical-dots'
import { DropdownItem } from '@/components/ui/dropdown/dropdown-item/dropdown-item'
import { UserInfo } from '@/components/ui/dropdown/user-info/user-info'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { AnimatePresence } from 'framer-motion'

import s from './dropdown.module.scss'

export type DropdownItemsType = {
  icon: ReactNode
  title: string
}

type DropdownType = {
  dotsTrigger?: ReactNode
  iconTrigger?: string
  items?: DropdownItemsType[]
}
export const Dropdown = ({ dotsTrigger, iconTrigger, items }: DropdownType) => (
  <DropdownMenu.Root>
    <div className={s.container}>
      <DropdownMenu.Trigger className={s.trigger}>
        {iconTrigger && <img alt={'user'} src={iconTrigger} />}
        {dotsTrigger && <VerticalDots />}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.content}>
          <div className={s.triangle}></div>
          <DropdownMenu.Group>
            <AnimatePresence>
              {iconTrigger && (
                <>
                  <UserInfo icon={iconTrigger} />
                  <DropdownMenu.Separator className={s.separator} />
                </>
              )}
              {items?.map((el, index) => (
                <div key={index}>
                  <DropdownItem items={el} />
                  {index < items.length - 1 && <DropdownMenu.Separator className={s.separator} />}
                </div>
              ))}
            </AnimatePresence>
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </div>
  </DropdownMenu.Root>
)
