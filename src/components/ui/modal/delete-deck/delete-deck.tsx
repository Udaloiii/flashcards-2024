import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ModalBody } from '@/components/ui/modal/modal-body/modal-body'
import { ModalFooter } from '@/components/ui/modal/modal-footer/modal-footer'
import { ModalHeader } from '@/components/ui/modal/modal-header/modal-header'
import { Typography } from '@/components/ui/typography'
import { useDeleteDeckMutation } from '@/services/decks.service'
import { setInfoMessage } from '@/store/app-reducer'

type DeleteDeckProps = {
  deckId?: string
  deckTitle?: string
  onOpenChange?: (open: boolean) => void
}
export const DeleteDeck = ({ deckId = '', deckTitle, onOpenChange }: DeleteDeckProps) => {
  const dispatch = useDispatch()
  const [deleteDeck] = useDeleteDeckMutation()
  const navigate = useNavigate()
  const deleteDeckHandler = () => {
    deleteDeck({ id: deckId })
    onOpenChange?.(false)
    dispatch(setInfoMessage({ message: 'Deck deleted' }))

    navigate('/')
  }

  return (
    <div>
      <ModalHeader showCloseBtn title={'Delete'} />
      <ModalBody>
        <Typography style={{ fontFamily: 'Helvetica, Sans Serif' }} variant={'subtitle1'}>
          Do you really want to remove{' '}
          <Typography style={{ textDecoration: 'underline  darkgrey' }} variant={'h3'}>
            {deckTitle}
          </Typography>
          ?
          <br />
          All cards will be deleted.
        </Typography>
      </ModalBody>
      <ModalFooter onClick={deleteDeckHandler} titlePrimary={'Delete'} titleSecondary={'Cancel'} />
    </div>
  )
}
