import Close from '@/assets/logo/close'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import * as RadixModal from '@radix-ui/react-dialog'

import s from './modal-header.module.scss'

type ModalHeaderProps = {
  showCloseBtn?: boolean
  title?: string
}
export const ModalHeader = ({ showCloseBtn, title }: ModalHeaderProps) => {
  return (
    <header className={s.container}>
      <Typography as={'h2'} variant={'h3'}>
        {title}
      </Typography>
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
