import { Button } from '@/components/ui/button'
import * as RadixModal from '@radix-ui/react-dialog'

import s from './modal-footer.module.scss'

type ModalHeaderProps = {
  onClick?: () => void
  titlePrimary?: string
  titleSecondary?: string
}
export const ModalFooter = ({ onClick, titlePrimary, titleSecondary }: ModalHeaderProps) => {
  return (
    <footer className={s.container}>
      <RadixModal.Close>
        {titleSecondary && (
          <Button type={'button'} variant={'secondary'}>
            {titleSecondary}
          </Button>
        )}
      </RadixModal.Close>
      <Button className={s.primaryButton} onClick={onClick} variant={'primary'}>
        {titlePrimary}
      </Button>
    </footer>
  )
}
