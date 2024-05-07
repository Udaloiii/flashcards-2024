import Image from '@/assets/logo/image'
import { Button } from '@/components/ui/button'
import { ModalBody } from '@/components/ui/modal/modal-body/modal-body'
import { ModalFooter } from '@/components/ui/modal/modal-footer/modal-footer'
import { ModalHeader } from '@/components/ui/modal/modal-header/modal-header'
import { Textfield } from '@/components/ui/textfield'
import { Typography } from '@/components/ui/typography'

import s from './add-new-card.module.scss'

export const AddNewCard = () => {
  return (
    <div className={s.container}>
      <ModalHeader showCloseBtn title={'Add New Card'} />
      <ModalBody>
        <Typography variant={'subtitle2'}>Question:</Typography>
        <Textfield label={'Question?'} />
        <Button fullWidth variant={'secondary'}>
          <Image />
          Change Image
        </Button>
        <Typography variant={'subtitle2'}>Answer:</Typography>
        <Textfield label={'Answer?'} />
        <Button fullWidth variant={'secondary'}>
          <Image />
          Change Image
        </Button>
      </ModalBody>
      <ModalFooter titlePrimary={'Add New Card'} titleSecondary={'Cancel'} />
    </div>
  )
}
