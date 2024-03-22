import { DropdownItem } from '@/components/ui/dropdown/dropdown-item/dropdown-item'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { AnimatePresence } from 'framer-motion'

import s from './dropdown.module.scss'

// type DropdownItemsType = {
//   icon: string
//   title: string
// } // потом использовать в items

type DropdownType = {
  iconTrigger: string
  items?: string[]
}
export const Dropdown = ({ iconTrigger, items }: DropdownType) => (
  <DropdownMenu.Root>
    <div className={s.container}>
      <DropdownMenu.Trigger className={s.trigger}>
        <img alt={'user'} src={iconTrigger} />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.content}>
          <div className={s.triangle}></div>
          <DropdownMenu.Group>
            <AnimatePresence>
              {items?.map((el, index) => (
                <div key={index}>
                  <DropdownItem>{el}</DropdownItem>
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
