import { DropdownItem } from '@/components/ui/dropdown/dropdown-item/dropdown-item'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropdown.module.scss'

// type DropdownItemsType = {
//   icon: string
//   title: string
// } // потом использовать в items

type DropdownType = {
  items?: string[]
}
export const Dropdown = ({ items }: DropdownType) => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger className={s.trigger}></DropdownMenu.Trigger>

    <DropdownMenu.Portal>
      <DropdownMenu.Content className={s.content}>
        <DropdownMenu.Label />
        <DropdownMenu.Group>
          {items?.map((el, index) => (
            <>
              <DropdownItem key={index}>{el}</DropdownItem>
              {index < items.length - 1 && <DropdownMenu.Separator className={s.separator} />}
            </>
          ))}
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
)
