import Close from '@/assets/logo/close'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import * as RadixModal from '@radix-ui/react-dialog'

import s from './modal.module.scss'

type ModalProps = {
  title?: string
}
export const Modal = ({ title }: ModalProps) => (
  <RadixModal.Root>
    <RadixModal.Trigger asChild>
      <Button variant={'primary'}>Edit profile</Button>
    </RadixModal.Trigger>
    <RadixModal.Portal>
      <RadixModal.Overlay className={s.dialogOverlay} />
      <RadixModal.Content className={s.dialogContent}>
        <RadixModal.Title className={s.DialogTitle}>{title}</RadixModal.Title>
        <RadixModal.Description className={'DialogDescription'}>
          <Typography variant={'body1'}>{title}</Typography>
        </RadixModal.Description>

        <RadixModal.Close asChild>
          <Button className={s.close} variant={'icon'}>
            <Close />
          </Button>
        </RadixModal.Close>
      </RadixModal.Content>
    </RadixModal.Portal>
  </RadixModal.Root>
)
