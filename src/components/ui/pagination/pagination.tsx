import { useDispatch } from 'react-redux'

import ArrowBack from '@/assets/logo/arrow-back'
import ArrowForward from '@/assets/logo/arrow-forward'
import { Button } from '@/components/ui/button'
import { DOTS, usePagination } from '@/components/ui/pagination/usePagination'
import { Select } from '@/components/ui/select'
import { Typography } from '@/components/ui/typography'
import { setCurrPageCards, setPageSizeCards } from '@/store/cards-list-reducer'
import { setCurrPage, setPageSize } from '@/store/decks-list-reducer'

import s from './pagination.module.scss'

export type PaginationType = {
  cardsList?: boolean // для отображения пагинации в deck (по умолчанию пагинация в decks-list)
  currentPage: number // текущая страница
  pageSize: number //  максимальный объем данных, видимых на одной странице
  siblingCount?: number //представляет минимальное количество кнопок страницы, отображаемых с каждой стороны кнопки текущей страницы. По умолчанию 1
  totalCount: number // общее количество данных, доступных из источника
}

export const Pagination = ({
  cardsList,
  currentPage = 1,
  pageSize,
  siblingCount = 1,
  totalCount,
}: PaginationType) => {
  const dispatch = useDispatch()
  const paginationRange = usePagination({
    currentPage,
    pageSize,
    siblingCount,
    totalCount,
  })

  if (totalCount && totalCount <= 5) {
    return null
  } // поменял на если всех items меньше или = 5 то не показывать

  const onNext = () => {
    cardsList
      ? dispatch(setCurrPageCards({ currPage: currentPage + 1 }))
      : dispatch(setCurrPage({ currPage: currentPage + 1 }))
  }

  const onPrevious = () => {
    cardsList
      ? dispatch(setCurrPageCards({ currPage: currentPage - 1 }))
      : dispatch(setCurrPage({ currPage: currentPage - 1 }))
  }

  const lastPage = paginationRange && paginationRange[paginationRange.length - 1]

  const disabledLeftCondition = currentPage === 1 && s.disabled

  const disabledRightCondition = currentPage === lastPage && s.disabled

  const onChangePageHandler = (pageNumber: number | string) => {
    cardsList
      ? dispatch(setCurrPageCards({ currPage: Number(pageNumber) }))
      : dispatch(setCurrPage({ currPage: Number(pageNumber) }))
  }

  const onChangeSizeHandler = (value: string) => {
    if (cardsList) {
      dispatch(setCurrPageCards({ currPage: 1 }))
      dispatch(setPageSizeCards({ pageSize: Number(value) }))
    } else {
      dispatch(setCurrPage({ currPage: 1 }))
      dispatch(setPageSize({ pageSize: Number(value) }))
    }
  }

  return (
    <div className={s.container}>
      <ul className={s.numbersWrap}>
        <li className={`${disabledLeftCondition}`} onClick={onPrevious}>
          <Button className={s.arrow} variant={'icon'}>
            <ArrowBack />
          </Button>
        </li>
        {paginationRange?.map((pageNumber, index) => {
          if (`${pageNumber}` === DOTS) {
            return (
              <li className={s.styleDots} key={index}>
                &#8230;
              </li>
            )
          }

          const activeCondition = currentPage === pageNumber && s.active

          return (
            <Typography
              as={'li'}
              className={`${s.paginationItem} ${activeCondition}`}
              key={index}
              onClick={() => onChangePageHandler(pageNumber)}
              tabIndex={0}
              variant={'body2'}
            >
              {pageNumber}
            </Typography>
          )
        })}
        <li className={`${disabledRightCondition}`} onClick={onNext}>
          <Button className={s.arrow} variant={'icon'}>
            <ArrowForward />
          </Button>
        </li>
      </ul>
      <Typography as={'p'} className={s.selectWrap} variant={'body2'}>
        Показать
        <Select
          className={s.select}
          defaultValue={'10'}
          items={['5', '10', '20']}
          onChange={onChangeSizeHandler}
          // placeholder={'10'}
          value={String(pageSize)}
        />
        на странице
      </Typography>
    </div>
  )
}
