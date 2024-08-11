import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Delete from '@/assets/logo/delete'
import { Button } from '@/components/ui/button'
import { Loader } from '@/components/ui/loader/loader'
import { Modal } from '@/components/ui/modal'
import { AddNewDeck } from '@/components/ui/modal/add-new-deck/add-new-deck'
import { Pagination } from '@/components/ui/pagination/pagination'
import { TabSwitcher } from '@/components/ui/tab-switcher'
import { DecksTable } from '@/components/ui/table/decks-table/decks-table'
import { Textfield } from '@/components/ui/textfield'
import { Typography } from '@/components/ui/typography'
import { useDebounce } from '@/hooks/useDebounce'
import { EmptyDeckList } from '@/pages/decks-list/empty-deck-list/empty-deck-list'
import { FilterCountSlider } from '@/pages/decks-list/filter-count-slider/filter-count-slider'
import { useAuthMeQuery } from '@/services/auth.service'
import { useGetDecksQuery, useGetMinMaxCardsQuery } from '@/services/decks.service'
import { OrderByDecksSort } from '@/services/flashcards-type'
import { RootState } from '@/services/store'
import { setIsLoading } from '@/store/app-reducer'
import { setCardsCount, setCurrPage } from '@/store/decks-list-reducer'

import s from './decks-list.module.scss'

export const DecksList = () => {
  const sortedBy = useSelector<RootState, OrderByDecksSort>(state => state.decksList.sortBy)

  const dispatch = useDispatch()
  const cardsCount = useSelector<RootState, null | number[]>(state => state.decksList.cardsCount)
  const currPage = useSelector<RootState, number>(state => state.decksList.currPage)
  const pageSize = useSelector<RootState, number>(state => state.decksList.pageSize)

  const { data: user } = useAuthMeQuery()
  const { data: minMaxCards, isLoading: cardsCountLoading } = useGetMinMaxCardsQuery()

  const [author, setAuthor] = useState('')
  const [searchValue, setSearchValue] = useState('') // value для поиска в инпуте

  // для открытия модалки
  const [openModal, setOpenModal] = useState(false)

  const { data, error, isFetching, isLoading } = useGetDecksQuery(
    {
      authorId: author,
      currentPage: currPage,
      itemsPerPage: pageSize,
      maxCardsCount: Number(useDebounce(cardsCount?.[1] ?? 100, 700)),
      minCardsCount: Number(useDebounce(cardsCount?.[0] ?? 0, 700)),
      name: String(useDebounce(searchValue ?? '', 800)),
      orderBy: sortedBy,
    },
    {
      skip: !minMaxCards,
    }
  )

  const handleSliderChange = (value: number[]) => {
    dispatch(setCardsCount({ cardsCount: value }))
    dispatch(setCurrPage({ currPage: 1 }))
  }

  const clearFilterHandler = () => {
    setSearchValue('')
    minMaxCards && dispatch(setCardsCount({ cardsCount: [minMaxCards?.min, minMaxCards?.max] }))
    dispatch(setCurrPage({ currPage: 1 }))
  }

  useEffect(() => {
    if (minMaxCards && !cardsCount) {
      dispatch(setCardsCount({ cardsCount: [minMaxCards?.min, minMaxCards?.max] }))
    }
  }, [])

  if (error) {
    return (
      <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
        Error!!!
      </div>
    )
  }
  if (isLoading || cardsCountLoading) {
    dispatch(setIsLoading({ isLoading: true }))

    return <Loader />
  } else if (isFetching) {
    dispatch(setIsLoading({ isLoading: true }))
  } else {
    dispatch(setIsLoading({ isLoading: false }))
  }

  return (
    <div className={s.container}>
      <div className={s.titleBlock}>
        <Typography as={'h1'} variant={'h1'}>
          Decks list
        </Typography>

        <Modal
          onOpenChange={setOpenModal}
          open={openModal}
          trigger={
            <Button>
              <Typography variant={'subtitle2'}>Add New Deck</Typography>
            </Button>
          }
        >
          <AddNewDeck onOpenChange={setOpenModal} />
        </Modal>
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
      {data && data?.items.length > 0 ? (
        <>
          <div>
            {author ? (
              <DecksTable items={data?.items} myDecks />
            ) : (
              <DecksTable items={data?.items} />
            )}
          </div>
          <div className={s.paginationBlock}>
            <Pagination
              currentPage={data?.pagination.currentPage}
              pageSize={pageSize}
              totalCount={data?.pagination.totalItems}
            />
          </div>
        </>
      ) : (
        <EmptyDeckList />
      )}
    </div>
  )
}
