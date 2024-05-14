import { Button } from '@/components/ui/button'
import * as RadixModal from '@radix-ui/react-dialog'

import s from './modal-footer.module.scss'

type ModalHeaderProps = {
  titlePrimary?: string
  titleSecondary?: string
}
export const ModalFooter = ({ titlePrimary, titleSecondary }: ModalHeaderProps) => {
  return (
    <footer className={s.container}>
      <RadixModal.Close>
        {titleSecondary && <Button variant={'secondary'}>{titleSecondary}</Button>}
      </RadixModal.Close>
      <RadixModal.Close>
        <Button className={s.primaryButton} variant={'primary'}>
          {titlePrimary}
        </Button>
      </RadixModal.Close>
    </footer>
  )
}
