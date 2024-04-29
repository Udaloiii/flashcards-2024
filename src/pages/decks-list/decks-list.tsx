import Delete from '@/assets/logo/delete'
import { Button } from '@/components/ui/button'
import { Pagination } from '@/components/ui/pagination/pagination'
import { Slider } from '@/components/ui/slider'
import { TabSwitcher } from '@/components/ui/tab-switcher'
import { DecksTable } from '@/components/ui/table/decks-table/decks-table'
import { Textfield } from '@/components/ui/textfield'
import { Typography } from '@/components/ui/typography'

import s from './decks-list.module.scss'

type DecksListProps = {
  currentPage: number // текущая страница
  items: string[]
  onPageChange: (page: number) => void // функция обратного вызова, вызываемая с обновленным значением страницы при изменении страницы
  pageSize: number //  максимальный объем данных, видимых на одной странице
  siblingCount: number //представляет минимальное количество кнопок страницы, отображаемых с каждой стороны кнопки текущей страницы. По умолчанию 1
  totalCount: number // общее количество данных, доступных из источника
}
export const DecksList = ({
  currentPage,
  items,
  onPageChange,
  pageSize,
  siblingCount,
  totalCount,
}: DecksListProps) => {
  return (
    <div className={s.container}>
      <div className={s.titleBlock}>
        <Typography as={'h1'} variant={'h1'}>
          Decks list
        </Typography>
        <Button>
          <Typography variant={'subtitle2'}>Add New Deck</Typography>
        </Button>
      </div>
      <div className={s.changeCardBlock}>
        <Textfield className={s.textfield} variant={'search'} />
        <TabSwitcher
          defaultValue={'all card'}
          trigger={[
            { title: 'All Cards', value: 'all card' },
            { title: 'My Cards', value: 'my card' },
          ]}
        />
        <Slider value={[0, 20]} />
        <Button className={s.clearButton} variant={'secondary'}>
          <Delete />
          <Typography variant={'subtitle2'}>Clear Filter</Typography>
        </Button>
      </div>
      <div>
        <DecksTable className={s.tabContent} items={items} />
        {/*<DecksTable className={s.tabContent} items={items} myCards />*/}
      </div>
      <div className={s.paginationBlock}>
        <Pagination
          currentPage={currentPage}
          onPageChange={onPageChange}
          pageSize={pageSize}
          siblingCount={siblingCount}
          totalCount={totalCount}
        ></Pagination>
      </div>
    </div>
  )
}
