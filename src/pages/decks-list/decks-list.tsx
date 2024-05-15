import { useEffect, useState } from 'react'

import Delete from '@/assets/logo/delete'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { AddNewCard } from '@/components/ui/modal/add-new-card/add-new-card'
import { Pagination } from '@/components/ui/pagination/pagination'
import { Slider } from '@/components/ui/slider'
import { TabSwitcher } from '@/components/ui/tab-switcher'
import { DecksTable } from '@/components/ui/table/decks-table/decks-table'
import { Textfield } from '@/components/ui/textfield'
import { Typography } from '@/components/ui/typography'
import { useDebounce } from '@/hooks/useDebounce'
import { useGetDecksQuery, useGetMinMaxCardsQuery } from '@/services/decks.service'

import s from './decks-list.module.scss'

// type DecksListProps = {
//   currentPage?: number // текущая страница
//   items?: string[]
//   myDecks?: boolean
//   onPageChange?: (page: number) => void // функция обратного вызова, вызываемая с обновленным значением страницы при изменении страницы
//   pageSize?: number //  максимальный объем данных, видимых на одной странице
//   siblingCount?: number //представляет минимальное количество кнопок страницы, отображаемых с каждой стороны кнопки текущей страницы. По умолчанию 1
//   totalCount?: number // общее количество данных, доступных из источника
// }
export const DecksList = () => {
  const [currPage, setCurrPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  const { data: minMaxCards } = useGetMinMaxCardsQuery()
  const [minValue, setMinValue] = useState(minMaxCards?.min)
  const [maxValue, setMaxValue] = useState(minMaxCards?.max)
  const [author, setAuthor] = useState('')

  const { data, error, isLoading } = useGetDecksQuery({
    authorId: author,
    currentPage: currPage,
    itemsPerPage: pageSize,
    maxCardsCount: Number(useDebounce(maxValue || 100, 500)),
    minCardsCount: Number(useDebounce(minValue || 0, 500)),
  })

  const handleSliderChange = (value: number[]) => {
    setMinValue(value[0])
    setMaxValue(value[1])
    setCurrPage(1)
  }

  useEffect(() => {
    setMinValue(minMaxCards?.min)
    setMaxValue(minMaxCards?.max)
  }, [minMaxCards])

  console.log(data?.items)

  if (isLoading) {
    return <div style={{ display: 'flex', justifyContent: 'center' }}>LOADING...</div>
  }

  if (error) {
    return (
      <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
        Error!!!
      </div>
    )
  }

  return (
    <div className={s.container}>
      <div className={s.titleBlock}>
        <Typography as={'h1'} variant={'h1'}>
          Decks list
        </Typography>

        <Modal
          content={<AddNewCard />}
          trigger={
            <Button>
              <Typography variant={'subtitle2'}>Add New Deck</Typography>
            </Button>
          }
        />
      </div>
      <div className={s.changeCardBlock}>
        <Textfield className={s.textfield} variant={'search'} />
        <TabSwitcher
          defaultValue={''}
          onValueChange={setAuthor}
          trigger={[
            { title: 'All Cards', value: '' },
            { title: 'My Cards', value: `81b2da35-9d0a-42c9-837b-954e9ea9d605` }, // id пока хардкод
          ]}
        />
        <Slider
          maxValue={maxValue}
          minValue={minValue}
          onChange={handleSliderChange}
          value={[minMaxCards?.min ?? 0, minMaxCards?.max ?? 100]}
        />
        <Button className={s.clearButton} variant={'secondary'}>
          <Delete />
          <Typography variant={'subtitle2'}>Clear Filter</Typography>
        </Button>
      </div>
      <div>
        {author !== '' ? (
          <DecksTable className={s.tabContent} items={data?.items} myCards />
        ) : (
          <DecksTable className={s.tabContent} items={data?.items} />
        )}
      </div>
      <div className={s.paginationBlock}>
        <Pagination
          changePageSize={setPageSize}
          currentPage={data?.pagination.currentPage}
          onPageChange={setCurrPage}
          pageSize={pageSize}
          // siblingCount={siblingCount}
          totalCount={data?.pagination.totalItems}
        ></Pagination>
      </div>
    </div>
  )
}
