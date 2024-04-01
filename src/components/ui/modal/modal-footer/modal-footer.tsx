import { Button } from '@/components/ui/button'

import s from './modal-footer.module.scss'

type ModalHeaderProps = {
  titlePrimary?: string
  titleSecondary?: string
}
export const ModalFooter = ({ titlePrimary, titleSecondary }: ModalHeaderProps) => {
  return (
    <footer className={s.container}>
      {titleSecondary && <Button variant={'secondary'}>{titleSecondary}</Button>}
      <Button variant={'primary'}>{titlePrimary}</Button>
    </footer>
  )
}
