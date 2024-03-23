import { DropdownItemsType } from '@/components/ui/dropdown'
import { Typography } from '@/components/ui/typography'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { motion } from 'framer-motion'

import s from './dropdown-item.module.scss'

type DropdownItemProps = {
  items: DropdownItemsType
}
export const DropdownItem = ({ items }: DropdownItemProps) => {
  return (
    <DropdownMenu.Item className={s.item}>
      <motion.div
        animate={{ opacity: 1, scaleX: 1, y: 0 }}
        className={s.wrap}
        exit={{ opacity: 0, scaleX: 0.5, y: -20 }}
        initial={{
          opacity: 0,
          scaleX: 0.5,
          y: -30,
        }}
        layout
        transition={{
          delay: 0.1,
          duration: 0.3,
        }}
      >
        {items.icon}
        <Typography variant={'caption'}>{items.title}</Typography>
      </motion.div>
    </DropdownMenu.Item>
  )
}
