import { ComponentProps } from 'react'

import { Button } from '@/components/ui/button'
import { ModalFooter } from '@/components/ui/modal/modal-footer/modal-footer'
import { ModalHeader } from '@/components/ui/modal/modal-header/modal-header'
import { Typography } from '@/components/ui/typography'
import * as RadixModal from '@radix-ui/react-dialog'

import s from './modal.module.scss'

type ModalProps = {
  showCloseBtn?: boolean
  title?: string
  titlePrimary?: string
  titleSecondary?: string
} & ComponentProps<'div'>
export const Modal = ({
  children,
  showCloseBtn,
  title,
  titlePrimary,
  titleSecondary,
}: ModalProps) => (
  <RadixModal.Root>
    <RadixModal.Trigger asChild>
      <Button variant={'primary'}>Edit profile</Button>
    </RadixModal.Trigger>
    <RadixModal.Portal>
      <RadixModal.Overlay className={s.dialogOverlay} />
      <RadixModal.Content className={s.dialogContent}>
        <RadixModal.Title className={s.DialogTitle}>
          <ModalHeader showCloseBtn={showCloseBtn} title={title} />
        </RadixModal.Title>
        <div className={s.mainContent}>
          <Typography className={s.content} variant={'body1'}>
            {children}
          </Typography>
        </div>
        <ModalFooter titlePrimary={titlePrimary} titleSecondary={titleSecondary} />
      </RadixModal.Content>
    </RadixModal.Portal>
  </RadixModal.Root>
)
