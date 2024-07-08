import { useDispatch } from 'react-redux'

import { ModalBody } from '@/components/ui/modal/modal-body/modal-body'
import { ModalFooter } from '@/components/ui/modal/modal-footer/modal-footer'
import { ModalHeader } from '@/components/ui/modal/modal-header/modal-header'
import { Typography } from '@/components/ui/typography'
import { useDeleteCardMutation } from '@/services/cards.service'
import { setInfoMessage, setIsLoading } from '@/store/app-reducer'

type DeleteCardProps = {
  cardId?: string
  onOpenChange?: (open: boolean) => void
}
export const DeleteCard = ({ cardId, onOpenChange }: DeleteCardProps) => {
  const dispatch = useDispatch()
  const [deleteCard, otherData] = useDeleteCardMutation()
  const deleteCardHandler = () => {
    deleteCard({ id: cardId ?? '' })
    onOpenChange?.(false)
    dispatch(setInfoMessage({ message: 'Card deleted' }))
  }

  if (otherData.isLoading) {
    dispatch(setIsLoading({ isLoading: true }))
  } else {
    dispatch(setIsLoading({ isLoading: false }))
  }

  return (
    <div>
      <ModalHeader showCloseBtn title={'Delete Card'} />
      <ModalBody>
        <Typography style={{ fontFamily: 'Helvetica, Sans Serif' }} variant={'subtitle1'}>
          Do you really want to remove this card?
        </Typography>
      </ModalBody>
      <ModalFooter
        onClick={deleteCardHandler}
        titlePrimary={'Delete Card'}
        titleSecondary={'Cancel'}
      />
    </div>
  )
}
