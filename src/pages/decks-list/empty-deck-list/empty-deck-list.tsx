import EmptyDeckListLogo from '@/assets/logo/empty-deck-list-logo'
import { Typography } from '@/components/ui/typography'

import s from './empty-deck-list.module.scss'

type EmptyDeckListProps = {
  cards?: boolean
}
export const EmptyDeckList = ({ cards }: EmptyDeckListProps) => {
  const condition = cards ? 'cards' : 'decks'

  return (
    <div className={s.container}>
      <Typography className={s.title} variant={'body1'}>
        Sorry, no {condition} match the filter
      </Typography>
      <EmptyDeckListLogo />
    </div>
  )
}
