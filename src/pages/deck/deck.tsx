import { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import ArrowBack from '@/assets/logo/arrow-back'
import Delete from '@/assets/logo/delete'
import Edit from '@/assets/logo/edit'
import PlayCircle from '@/assets/logo/play-circle'
import VerticalDots from '@/assets/logo/vertical-dots'
import { Button } from '@/components/ui/button'
import { Dropdown, DropdownItem, DropdownSeparator } from '@/components/ui/dropdown'
import { Pagination } from '@/components/ui/pagination/pagination'
import { CardsTable } from '@/components/ui/table/cards-table/cards-table'
import { Textfield } from '@/components/ui/textfield'
import { Typography } from '@/components/ui/typography'
import { EmptyDeck } from '@/pages/deck/empty-deck/empty-deck'
import { useAuthMeQuery } from '@/services/auth.service'
import { useGetCardsInDeckQuery, useGetDeckByIdQuery } from '@/services/decks.service'

import s from './deck.module.scss'

export const Deck = forwardRef<ElementRef<'div'>, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...rest }, ref) => {
    // для пагинации
    const [currPage, setCurrPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)

    const navigate = useNavigate() // для навигации назад
    const { id } = useParams() // чтобы достать id из url
    const { data: deck, isLoading } = useGetDeckByIdQuery({ id: id ?? '' })
    const { data: user } = useAuthMeQuery()
    const { data } = useGetCardsInDeckQuery({
      body: {
        answer: '',
        currentPage: currPage,
        itemsPerPage: pageSize,
        orderBy: '',
        question: '',
      },
      id: id ?? '',
    })
    const userId = user?.id
    const myCards = userId === deck?.userId // для отображения dropdown

    if (isLoading) {
      return <div style={{ display: 'flex', justifyContent: 'center' }}>LOADING...</div>
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
              <Dropdown disabled={data?.items.length === 0} trigger={<VerticalDots />}>
                <Link to={`/${id}/learn`}>
                  <DropdownItem className={s.dropdownItem}>
                    <Button disabled={data?.items.length === 0} variant={'icon'}>
                      <PlayCircle />
                    </Button>
                    <Typography variant={'caption'}>Learn</Typography>
                  </DropdownItem>
                </Link>
                <DropdownSeparator />
                <DropdownItem className={s.dropdownItem}>
                  <Button variant={'icon'}>
                    <Edit />
                    <Typography variant={'caption'}>Edit</Typography>
                  </Button>
                </DropdownItem>
                <DropdownSeparator />
                <DropdownItem className={s.dropdownItem}>
                  <Button variant={'icon'}>
                    <Delete />
                    <Typography variant={'caption'}>Delete</Typography>
                  </Button>
                </DropdownItem>
              </Dropdown>
            )}
          </Typography>
          {myCards ? (
            data &&
            data?.items.length > 0 && (
              <Button>
                <Typography variant={'subtitle2'}>Add New Card</Typography>
              </Button>
            )
          ) : (
            <Button disabled={data?.items.length === 0}>
              <Link to={`/${id}/learn`}>
                <Typography variant={'subtitle2'}>Learn to Pack</Typography>
              </Link>
            </Button>
          )}
        </div>
        {deck?.cover && <img alt={'logo'} className={s.logo} src={deck?.cover} />}
        <Textfield disabled={data?.items.length === 0} variant={'search'} />
        {data?.items && data?.items.length > 0 ? (
          <>
            <CardsTable items={data?.items} myDeck={myCards} titleCard={deck?.name} />
            <div>
              <Pagination
                changePageSize={setPageSize}
                currentPage={currPage}
                onPageChange={setCurrPage}
                pageSize={pageSize}
                totalCount={data?.pagination.totalItems}
              />
            </div>
          </>
        ) : (
          <EmptyDeck myDeck={myCards} />
        )}
      </div>
    )
  }
)
