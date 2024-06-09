import { ReactNode } from 'react'

import { Typography } from '@/components/ui/typography'
import * as RadixModal from '@radix-ui/react-dialog'

import s from './modal.module.scss'

type ModalProps = {
  children: ReactNode
  onOpenChange?: (open: boolean) => void
  open?: boolean
  title?: string
  trigger?: ReactNode
}
export const Modal = ({ children, onOpenChange, open, title, trigger }: ModalProps) => {
  return (
    <RadixModal.Root onOpenChange={onOpenChange} open={open}>
      <RadixModal.Trigger>{trigger}</RadixModal.Trigger>
      <RadixModal.Portal>
        <RadixModal.Overlay className={s.dialogOverlay} />
        <RadixModal.Content className={s.dialogContent}>
          {title && <ModalTitle title={title} />}
          {children}
        </RadixModal.Content>
      </RadixModal.Portal>
    </RadixModal.Root>
  )
}

type ModalTitleProps = {
  title: string
}
export const ModalTitle = ({ title }: ModalTitleProps) => {
  return (
    <RadixModal.Title>
      <Typography variant={'h3'}>{title}</Typography>
    </RadixModal.Title>
  )
}
