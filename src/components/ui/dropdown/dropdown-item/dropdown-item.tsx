import { ReactNode } from 'react'

import { Typography } from '@/components/ui/typography'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { motion } from 'framer-motion'

import s from './dropdown-item.module.scss'

type DropdownItemProps = {
  children?: ReactNode
}
export const DropdownItem = ({ children }: DropdownItemProps) => {
  return (
    <DropdownMenu.Item className={s.item}>
      <motion.div
        animate={{ opacity: 1, scaleY: 1, y: 0 }}
        exit={{ opacity: 0, scaleY: 0.5, y: -20 }}
        initial={{
          opacity: 0,
          scaleY: 0.5,
          y: -20,
        }}
        layout
        transition={{
          delay: 0.1,
          duration: 0.3,
        }}
      >
        <Typography variant={'caption'}>{children}</Typography>
      </motion.div>
    </DropdownMenu.Item>
  )
}
