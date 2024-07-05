import EmptyDeckLogo from '@/assets/logo/empty-deck-logo'
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
        </div>
      ) : (
        <Typography className={s.message} variant={'body1'}>
          This deck is empty for now, but maybe someday...
        </Typography>
      )}
    </div>
  )
}
