import EmptyDeckListLogo from '@/assets/logo/empty-deck-list-logo'
import { Typography } from '@/components/ui/typography'

import s from './empty-deck-list.module.scss'

export const EmptyDeckList = () => {
  return (
    <div className={s.container}>
      <Typography className={s.title} variant={'body1'}>
        Sorry, no decks match the filter
      </Typography>
      <EmptyDeckListLogo />
    </div>
  )
}
