import { useEffect, useState } from 'react'

import Delete from '@/assets/logo/delete'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { AddNewPack } from '@/components/ui/modal/add-new-pack/add-new-pack'
import { Pagination } from '@/components/ui/pagination/pagination'
import { TabSwitcher } from '@/components/ui/tab-switcher'
import { DecksTable } from '@/components/ui/table/decks-table/decks-table'
import { Textfield } from '@/components/ui/textfield'
import { Typography } from '@/components/ui/typography'
import { useDebounce } from '@/hooks/useDebounce'
import { FilterCountSlider } from '@/pages/decks-list/filter-count-slider/filter-count-slider'
import { useAuthMeQuery } from '@/services/auth.service'
import { useGetDecksQuery, useGetMinMaxCardsQuery } from '@/services/decks.service'

import s from './decks-list.module.scss'

export const DecksList = () => {
  const { data: user } = useAuthMeQuery()
  const { data: minMaxCards, isLoading: cardsCountLoading } = useGetMinMaxCardsQuery()

  const [cardsCount, setCardsCount] = useState<number[]>()

  const [currPage, setCurrPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  const [author, setAuthor] = useState('')
  const [searchValue, setSearchValue] = useState('') // value для поиска в инпуте

  const { data, error, isLoading } = useGetDecksQuery(
    {
      authorId: author,
      currentPage: currPage,
      itemsPerPage: pageSize,
      maxCardsCount: Number(useDebounce(cardsCount?.[1] ?? 0, 1000)),
      minCardsCount: Number(useDebounce(cardsCount?.[0] ?? 100, 1000)),
      name: String(useDebounce(searchValue ?? '', 800)),
    },
    {
      skip: !minMaxCards,
    }
  )

  const handleSliderChange = (value: number[]) => {
    setCardsCount(value)
    setCurrPage(1)
  }

  const clearFilterHandler = () => {
    setSearchValue('')
    minMaxCards && setCardsCount([minMaxCards?.min, minMaxCards?.max])
  }

  useEffect(() => {
    if (minMaxCards) {
      setCardsCount([minMaxCards?.min, minMaxCards?.max])
    }
  }, [minMaxCards])

  if (isLoading || cardsCountLoading) {
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
          content={<AddNewPack />}
          trigger={
            <Button>
              <Typography variant={'subtitle2'}>Add New Deck</Typography>
            </Button>
          }
        />
      </div>
      <div className={s.changeCardBlock}>
        <Textfield
          className={s.textfield}
          onChangeValue={setSearchValue}
          value={searchValue}
          variant={'search'}
        />
        <TabSwitcher
          defaultValue={''}
          onValueChange={setAuthor}
          trigger={[
            { title: 'All Cards', value: '' },
            { title: 'My Cards', value: user?.id ?? '' },
          ]}
        />
        <FilterCountSlider
          maxValue={minMaxCards?.max ?? 100}
          onChange={handleSliderChange}
          value={cardsCount ?? [0, minMaxCards?.max ?? 100]}
        />
        <Button className={s.clearButton} onClick={clearFilterHandler} variant={'secondary'}>
          <Delete />
          <Typography variant={'subtitle2'}>Clear Filter</Typography>
        </Button>
      </div>
      <div>
        {author ? <DecksTable items={data?.items} myCards /> : <DecksTable items={data?.items} />}
      </div>
      <div className={s.paginationBlock}>
        <Pagination
          changePageSize={setPageSize}
          currentPage={data?.pagination.currentPage}
          onPageChange={setCurrPage}
          pageSize={pageSize}
          totalCount={data?.pagination.totalItems}
        ></Pagination>
      </div>
    </div>
  )
}
