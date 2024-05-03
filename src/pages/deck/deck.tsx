import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import ArrowBack from '@/assets/logo/arrow-back'
import Delete from '@/assets/logo/delete'
import Edit from '@/assets/logo/edit'
import PlayCircle from '@/assets/logo/play-circle'
import { Button } from '@/components/ui/button'
import { Dropdown } from '@/components/ui/dropdown'
import { Pagination } from '@/components/ui/pagination/pagination'
import { CardsTable } from '@/components/ui/table/cards-table/cards-table'
import { Textfield } from '@/components/ui/textfield'
import { Typography } from '@/components/ui/typography'

import s from './deck.module.scss'

type DeckProps = ComponentPropsWithoutRef<'div'> & {
  currentPage: number
  deckTitle: string
  myDeck?: boolean
  onPageChange: (page: number) => void
  pageSize: number
  siblingCount: number
  totalCount: number
}
export const Deck = forwardRef<ElementRef<'div'>, DeckProps>(
  (
    {
      className,
      currentPage,
      deckTitle,
      myDeck,
      onPageChange,
      pageSize,
      siblingCount,
      totalCount,
      ...rest
    },
    ref
  ) => {
    const items = [
      { icon: <PlayCircle />, title: 'Learn' },
      { icon: <Edit />, title: 'Edit' },
      { icon: <Delete />, title: 'Delete' },
    ]

    return (
      <div className={`${s.myDeckContainer} ${className}`} ref={ref} {...rest}>
        <Typography as={'a'} className={s.backWrap} variant={'body2'}>
          <ArrowBack />
          Back to Decks List
        </Typography>
        <div className={s.addCardBlock}>
          <Typography as={'h1'} className={s.title} variant={'h1'}>
            {deckTitle}
            {myDeck && <Dropdown dotsTrigger items={items} />}
          </Typography>
          <Button>
            {myDeck ? (
              <Typography variant={'subtitle2'}>Add New Card</Typography>
            ) : (
              <Typography variant={'subtitle2'}>Learn to Pack</Typography>
            )}
          </Button>
        </div>
        <Textfield variant={'search'} />
        <CardsTable items={['asd', 'asd', 'asdasdas', 'asdasd']} myDeck={myDeck} ratingValue={3} />
        <Pagination
          currentPage={currentPage}
          onPageChange={onPageChange}
          pageSize={pageSize}
          siblingCount={siblingCount}
          totalCount={totalCount}
        />
      </div>
    )
  }
)
