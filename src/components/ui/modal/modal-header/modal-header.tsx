import Close from '@/assets/logo/close'
import { Button } from '@/components/ui/button'
import { ModalTitle } from '@/components/ui/modal'
import * as RadixModal from '@radix-ui/react-dialog'

import s from './modal-header.module.scss'

type ModalHeaderProps = {
  showCloseBtn?: boolean
  title?: string
}
export const ModalHeader = ({ showCloseBtn, title = '' }: ModalHeaderProps) => {
  return (
    <header className={s.container}>
      <ModalTitle title={title} />
      {showCloseBtn && (
        <RadixModal.Close asChild>
          <Button className={s.close} variant={'icon'}>
            <Close />
          </Button>
        </RadixModal.Close>
      )}
    </header>
  )
}
