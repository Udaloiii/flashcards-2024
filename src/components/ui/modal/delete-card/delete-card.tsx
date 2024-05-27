import { ModalBody } from '@/components/ui/modal/modal-body/modal-body'
import { ModalFooter } from '@/components/ui/modal/modal-footer/modal-footer'
import { ModalHeader } from '@/components/ui/modal/modal-header/modal-header'
import { Typography } from '@/components/ui/typography'

type DeleteCardProps = {
  cardTitle?: string
}
export const DeleteCard = ({ cardTitle }: DeleteCardProps) => {
  return (
    <div>
      <ModalHeader showCloseBtn title={'Delete Card'} />
      <ModalBody>
        <Typography style={{ fontFamily: 'Helvetica, Sans Serif' }} variant={'subtitle1'}>
          Do you really want to remove {cardTitle}?
          <br />
          All cards will be deleted.
        </Typography>
      </ModalBody>
      <ModalFooter titlePrimary={'Delete Card'} titleSecondary={'Cancel'} />
    </div>
  )
}
