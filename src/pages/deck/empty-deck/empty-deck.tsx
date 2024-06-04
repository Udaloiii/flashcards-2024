import EmptyDeckLogo from '@/assets/logo/empty-deck-logo'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import s from './empty-deck.module.scss'

type EmptyDeckProps = {
  myDeck?: boolean
}
export const EmptyDeck = ({ myDeck }: EmptyDeckProps) => {
  return (
    <div className={s.emptyDeck}>
      <EmptyDeckLogo />
      {myDeck ? (
        <div className={s.myDeck}>
          <Typography className={s.message} variant={'body1'}>
            This pack is empty. Click add new card to fill this pack
          </Typography>
          <Button>Add New Card</Button>
        </div>
      ) : (
        <Typography className={s.message} variant={'body1'}>
          This deck is empty, please include a deck that contains cards
        </Typography>
      )}
    </div>
  )
}
