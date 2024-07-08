import { useState } from 'react'
import { Link } from 'react-router-dom'

import Delete from '@/assets/logo/delete'
import Edit from '@/assets/logo/edit'
import PlayCircle from '@/assets/logo/play-circle'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { ChangeCard } from '@/components/ui/modal/change-card/change-card'
import { ChangeDeck } from '@/components/ui/modal/change-deck/change-deck'
import { DeleteCard } from '@/components/ui/modal/delete-card/delete-card'
import { DeleteDeck } from '@/components/ui/modal/delete-deck/delete-deck'

import s from './control-items.module.scss'

type ControlItemsProps = {
  answerImg?: string
  cardAnswer?: string
  cardId?: string
  cardPage?: boolean
  cardQuestion?: string
  className?: string
  deck?: boolean // для отображения удаления колоды или карточки
  deckId?: string // для crud-операций через нажатие на ControlItems
  deckImage?: null | string
  deckTitle?: string
  disabled?: boolean
  isPrivate?: boolean
  myDecks?: boolean
  questionImg?: string
}
export const ControlItems = ({
  answerImg,
  cardAnswer,
  cardId,
  cardPage,
  cardQuestion,
  className,
  deck,
  deckId,
  deckImage,
  deckTitle,
  disabled,
  isPrivate,
  myDecks,
  questionImg,
}: ControlItemsProps) => {
  // для открытия модалки
  const [openEdit, setOpenEdit] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)

  return (
    <div className={`${s.container} ${className}`}>
      {!cardPage && deck && (
        <Link className={`${disabled && s.disabled}`} to={`/${deckId}/learn`}>
          <Button variant={'icon'}>
            <PlayCircle />
          </Button>
        </Link>
      )}
      {myDecks && (
        <>
          <Modal
            onOpenChange={setOpenEdit}
            open={openEdit}
            trigger={
              <Button variant={'icon'}>
                <Edit />
              </Button>
            }
          >
            {deck ? (
              <ChangeDeck
                deckId={deckId}
                image={deckImage}
                isPrivate={isPrivate}
                onOpenChange={setOpenEdit}
                title={deckTitle}
              />
            ) : (
              <ChangeCard
                answer={cardAnswer}
                answerImg={answerImg}
                cardId={cardId}
                onOpenChange={setOpenEdit}
                question={cardQuestion}
                questionImg={questionImg}
              />
            )}
          </Modal>
          <Modal
            onOpenChange={setOpenDelete}
            open={openDelete}
            trigger={
              <Button variant={'icon'}>
                <Delete />
              </Button>
            }
          >
            {deck ? (
              <DeleteDeck deckId={deckId} deckTitle={deckTitle} onOpenChange={setOpenDelete} />
            ) : (
              <DeleteCard cardId={cardId} onOpenChange={setOpenDelete} />
            )}
          </Modal>
        </>
      )}
    </div>
  )
}
