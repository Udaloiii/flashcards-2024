import { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'

import ArrowBack from '@/assets/logo/arrow-back'
import Delete from '@/assets/logo/delete'
import Edit from '@/assets/logo/edit'
import PlayCircle from '@/assets/logo/play-circle'
import VerticalDots from '@/assets/logo/vertical-dots'
import { Button } from '@/components/ui/button'
import { Dropdown, DropdownItem, DropdownSeparator } from '@/components/ui/dropdown'
import { Loader } from '@/components/ui/loader/loader'
import { Modal } from '@/components/ui/modal'
import { AddNewCard } from '@/components/ui/modal/add-new-card/add-new-card'
import { ChangeDeck } from '@/components/ui/modal/change-deck/change-deck'
import { DeleteDeck } from '@/components/ui/modal/delete-deck/delete-deck'
import { Pagination } from '@/components/ui/pagination/pagination'
import { CardsTable } from '@/components/ui/table/cards-table/cards-table'
import { Textfield } from '@/components/ui/textfield'
import { Typography } from '@/components/ui/typography'
import { useDebounce } from '@/hooks/useDebounce'
import { EmptyDeck } from '@/pages/deck/empty-deck/empty-deck'
import { EmptyDeckList } from '@/pages/decks-list/empty-deck-list/empty-deck-list'
import { useAuthMeQuery } from '@/services/auth.service'
import { useGetCardsInDeckQuery, useGetDeckByIdQuery } from '@/services/decks.service'
import { OrderBySort } from '@/services/flashcards-type'
import { RootState } from '@/services/store'
import { setIsLoading } from '@/store/app-reducer'

import s from './deck.module.scss'

export const Deck = forwardRef<ElementRef<'div'>, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...rest }, ref) => {
    const currPage = useSelector<RootState, number>(state => state.cardsList.currPage)
    const pageSize = useSelector<RootState, number>(state => state.cardsList.pageSize)
    const dispatch = useDispatch()

    // для поиска по вопросу
    const [question, setQuestion] = useState<null | string>(null) // добавил null для отображения EmptyDeck
    // добавил костыль typeof question(null) === 'object' для первичного отображения EmptyDeck
    // для orderBy
    // @ts-ignore
    const [orderBy, setOrderBy] = useState<OrderBySort>(null)

    const [openDropdown, setOpenDropdown] = useState(false)
    //для модалки на add new card
    const [open, setOpen] = useState(false)
    //для модалки на change-deck
    const [openChange, setOpenChange] = useState(false)
    //для модалки на delete-deck
    const [openDelete, setOpenDelete] = useState(false)

    const navigate = useNavigate() // для навигации назад
    const { id } = useParams() // чтобы достать id из url
    const { data: deck, isLoading } = useGetDeckByIdQuery({ id: id ?? '' })
    const { data: user } = useAuthMeQuery()
    const {
      data,
      isFetching,
      isLoading: isCardsLoading,
    } = useGetCardsInDeckQuery({
      body: {
        answer: '',
        currentPage: currPage,
        itemsPerPage: pageSize,
        orderBy: orderBy,
        question: String(useDebounce(question ?? '', 600)),
      },
      id: id ?? '',
    })

    const userId = user?.id
    const myCards = userId === deck?.userId // для отображения dropdown

    if (isCardsLoading || isLoading) {
      dispatch(setIsLoading({ isLoading: true }))

      return <Loader />
    } else if (isFetching) {
      dispatch(setIsLoading({ isLoading: true }))
    } else {
      dispatch(setIsLoading({ isLoading: false }))
    }

    return (
      <div className={`${s.myDeckContainer} ${className}`} ref={ref} {...rest}>
        <Typography as={'a'} className={s.backWrap} onClick={() => navigate(-1)} variant={'body2'}>
          <ArrowBack />
          Back to Decks List
        </Typography>
        <div className={s.addCardBlock}>
          <Typography as={'h1'} className={s.title} variant={'h1'}>
            {deck?.name}
            {myCards && (
              <Dropdown
                disabled={data?.items.length === 0}
                onOpenChange={setOpenDropdown}
                open={openDropdown}
                trigger={<VerticalDots />}
              >
                <DropdownItem>
                  <Link className={s.dropdownItem} to={`/${id}/learn`}>
                    <Button disabled={data?.items.length === 0} variant={'icon'}>
                      <PlayCircle />
                    </Button>
                    <Typography variant={'caption'}>Learn</Typography>
                  </Link>
                </DropdownItem>

                <DropdownSeparator />
                <DropdownItem onSelect={() => setOpenChange(true)}>
                  <Modal
                    onOpenChange={setOpenChange}
                    open={openChange}
                    trigger={
                      <Button className={s.dropdownItem} variant={'icon'}>
                        <Edit />
                        <Typography variant={'caption'}>Edit</Typography>
                      </Button>
                    }
                  >
                    <ChangeDeck
                      closeDropdown={setOpenDropdown}
                      deckId={id ?? ''}
                      image={deck?.cover}
                      isPrivate={deck?.isPrivate}
                      onOpenChange={setOpenChange}
                      title={deck?.name}
                    />
                  </Modal>
                </DropdownItem>
                <DropdownSeparator />
                <DropdownItem onSelect={() => setOpenDelete(true)}>
                  <Modal
                    onOpenChange={setOpenDelete}
                    open={openDelete}
                    trigger={
                      <Button className={s.dropdownItem} variant={'icon'}>
                        <Delete />
                        <Typography variant={'caption'}>Delete</Typography>
                      </Button>
                    }
                  >
                    <DeleteDeck
                      deckId={id ?? ''}
                      deckTitle={deck?.name}
                      onOpenChange={setOpenDelete}
                    />
                  </Modal>
                </DropdownItem>
              </Dropdown>
            )}
          </Typography>
          {myCards ? (
            <Modal
              onOpenChange={setOpen}
              open={open}
              trigger={
                <Button>
                  <Typography variant={'subtitle2'}>Add New Card</Typography>
                </Button>
              }
            >
              <AddNewCard onOpenChange={setOpen} />
            </Modal>
          ) : (
            <Button disabled={data?.items.length === 0}>
              <Link to={`/${id}/learn`}>
                <Typography variant={'subtitle2'}>Learn to Pack</Typography>
              </Link>
            </Button>
          )}
        </div>
        {deck?.cover && <img alt={'logo'} className={s.logo} src={deck?.cover} />}
        <Textfield
          disabled={typeof question === 'object' && data?.items.length === 0}
          onChangeValue={setQuestion}
          placeholder={'search by question '}
          value={question ?? ''}
          variant={'search'}
        />
        {/* eslint-disable-next-line no-nested-ternary */}
        {data?.items && data?.items.length > 0 ? (
          <>
            <CardsTable items={data?.items} myDeck={myCards} />
            <div>
              <Pagination
                cardsList
                currentPage={currPage}
                pageSize={pageSize}
                totalCount={data?.pagination.totalItems}
              />
            </div>
          </>
        ) : question && data?.items && data?.items.length < 1 ? (
          <div className={s.emptyDeckListBox}>
            <EmptyDeckList cards />
          </div>
        ) : (
          typeof question === 'object' && <EmptyDeck myDeck={myCards} />
        )}
      </div>
    )
  }
)
