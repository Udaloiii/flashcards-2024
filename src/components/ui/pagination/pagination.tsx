import ArrowBack from '@/assets/logo/arrow-back'
import ArrowForward from '@/assets/logo/arrow-forward'
import { Button } from '@/components/ui/button'
import { DOTS, usePagination } from '@/components/ui/pagination/usePagination'
import { Select } from '@/components/ui/select'
import { Typography } from '@/components/ui/typography'

import s from './pagination.module.scss'

export type PaginationType = {
  changePageSize?: (size: number) => void
  currentPage: number // текущая страница
  onPageChange?: (page: number) => void // функция обратного вызова, вызываемая с обновленным значением страницы при изменении страницы
  pageSize: number //  максимальный объем данных, видимых на одной странице
  siblingCount?: number //представляет минимальное количество кнопок страницы, отображаемых с каждой стороны кнопки текущей страницы. По умолчанию 1
  totalCount: number // общее количество данных, доступных из источника
}

export const Pagination = ({
  changePageSize,
  currentPage = 1,
  onPageChange,
  pageSize,
  siblingCount = 1,
  totalCount,
}: PaginationType) => {
  const paginationRange = usePagination({
    currentPage,
    pageSize,
    siblingCount,
    totalCount,
  })

  // if (currentPage === 0 || (paginationRange && paginationRange?.length < 2 && pageSize <= 5))
  if (totalCount && totalCount <= 5) {
    return null
  } // поменял на если всех items меньше или = 5 то не показывать

  const onNext = () => {
    onPageChange?.(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange?.(currentPage - 1)
  }

  const lastPage = paginationRange && paginationRange[paginationRange.length - 1]

  const disabledLeftCondition = currentPage === 1 && s.disabled

  const disabledRightCondition = currentPage === lastPage && s.disabled

  const onChangeSizeHandler = (value: string) => {
    onPageChange?.(1)
    changePageSize?.(Number(value))
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
              onClick={() => onPageChange?.(Number(pageNumber))}
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
