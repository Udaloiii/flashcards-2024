import { useState } from 'react'

import EmptyDeckLogo from '@/assets/logo/empty-deck-logo'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { AddNewCard } from '@/components/ui/modal/add-new-card/add-new-card'
import { Typography } from '@/components/ui/typography'

import s from './empty-deck.module.scss'

type EmptyDeckProps = {
  myDeck?: boolean
}
export const EmptyDeck = ({ myDeck }: EmptyDeckProps) => {
  const [open, setOpen] = useState(false)

  return (
    <div className={s.emptyDeck}>
      <EmptyDeckLogo />
      {myDeck ? (
        <div className={s.myDeck}>
          <Typography className={s.message} variant={'body1'}>
            This pack is empty. Click add new card to fill this pack
          </Typography>
          <Modal onOpenChange={setOpen} open={open} trigger={<Button>Add New Card</Button>}>
            <AddNewCard onOpenChange={setOpen} />
          </Modal>
        </div>
      ) : (
        <Typography className={s.message} variant={'body1'}>
          This deck is empty for now, but maybe someday...
        </Typography>
      )}
    </div>
  )
}
