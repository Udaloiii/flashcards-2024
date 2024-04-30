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

import s from './my-deck.module.scss'

type MyDeckProps = ComponentPropsWithoutRef<'div'> & {
  currentPage: number // текущая страница
  onPageChange: (page: number) => void // функция обратного вызова, вызываемая с обновленным значением страницы при изменении страницы
  pageSize: number //  максимальный объем данных, видимых на одной странице
  siblingCount: number //представляет минимальное количество кнопок страницы, отображаемых с каждой стороны кнопки текущей страницы. По умолчанию 1
  totalCount: number // общее количество данных, доступных из источника
}
export const MyDeck = forwardRef<ElementRef<'div'>, MyDeckProps>(
  ({ className, currentPage, onPageChange, pageSize, siblingCount, totalCount, ...rest }, ref) => {
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
            My Deck
            <Dropdown dotsTrigger items={items} />
          </Typography>
          <Button>
            <Typography variant={'subtitle2'}>Add New Card</Typography>
          </Button>
        </div>
        <Textfield variant={'search'} />
        <CardsTable items={['asd', 'asd', 'asdasdas', 'asdasd']} />
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
