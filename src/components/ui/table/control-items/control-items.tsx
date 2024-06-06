import Delete from '@/assets/logo/delete'
import Edit from '@/assets/logo/edit'
import PlayCircle from '@/assets/logo/play-circle'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { DeleteCard } from '@/components/ui/modal/delete-card/delete-card'
import { DeleteDeck } from '@/components/ui/modal/delete-deck/delete-deck'

import s from './control-items.module.scss'

type ControlItemsProps = {
  cardPage?: boolean
  className?: string
  deck?: boolean // для отображения удаления колоды или карточки
  deckTitle?: string
  disabled?: boolean
  myDecks?: boolean
}
export const ControlItems = ({
  cardPage,
  className,
  deck,
  deckTitle,
  disabled,
  myDecks,
}: ControlItemsProps) => {
  return (
    <div className={`${s.container} ${className}`}>
      {!cardPage && (
        <Button className={`${disabled && s.disabled}`} variant={'icon'}>
          <PlayCircle />
        </Button>
      )}
      {myDecks && (
        <>
          <Modal
            content={'asd'}
            trigger={
              <Button variant={'icon'}>
                <Edit />
              </Button>
            }
          ></Modal>
          <Modal
            content={deck ? <DeleteDeck deckTitle={deckTitle} /> : <DeleteCard />}
            trigger={
              <Button variant={'icon'}>
                <Delete />
              </Button>
            }
          ></Modal>
        </>
      )}
    </div>
  )
}
