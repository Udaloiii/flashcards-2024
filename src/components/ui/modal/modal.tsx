import { ReactNode } from 'react'

import { Typography } from '@/components/ui/typography'
import * as RadixModal from '@radix-ui/react-dialog'

import s from './modal.module.scss'

type ModalProps = {
  content: ReactNode
  title?: string
  trigger?: ReactNode
}
export const Modal = ({ content, title, trigger }: ModalProps) => {
  return (
    <RadixModal.Root>
      <RadixModal.Trigger>{trigger}</RadixModal.Trigger>
      <RadixModal.Portal>
        <RadixModal.Overlay className={s.dialogOverlay} />
        <RadixModal.Content className={s.dialogContent}>
          {title && <ModalTitle title={title} />}
          {content}
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
