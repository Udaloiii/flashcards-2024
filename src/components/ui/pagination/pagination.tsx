import { DOTS, usePagination } from '@/components/ui/pagination/usePagination'

import s from './pagination.module.scss'

export type PaginationType = {
  currentPage: number // текущая страница
  onPageChange: (page: number) => void // функция обратного вызова, вызываемая с обновленным значением страницы при изменении страницы
  pageSize: number //  максимальный объем данных, видимых на одной странице
  siblingCount: number //представляет минимальное количество кнопок страницы, отображаемых с каждой стороны кнопки текущей страницы. По умолчанию 1
  totalCount: number // общее количество данных, доступных из источника
}

export const Pagination = ({
  currentPage,
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

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  const lastPage = paginationRange && paginationRange[paginationRange.length - 1]

  const disabledLeftCondition = currentPage === 1 && s.disabled

  const disabledRightCondition = currentPage === lastPage && s.disabled

  return (
    <ul className={s.container}>
      {/* Left navigation arrow */}
      <li className={`${disabledLeftCondition}`} onClick={onPrevious}>
        <div className={s.arrowLeft}></div>
      </li>
      {paginationRange?.map((pageNumber, index) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (`${pageNumber}` === DOTS) {
          return (
            <li className={s.styleDots} key={index}>
              &#8230;
            </li>
          )
        }

        // Render our Page Pills
        return (
          <li
            className={s.paginationItem}
            // condition={pageNumber === currentPage}
            key={index}
            onClick={() => onPageChange(Number(pageNumber))}
          >
            {pageNumber}
          </li>
        )
      })}
      {/*  Right Navigation arrow */}
      <li className={`${disabledRightCondition}`} onClick={onNext}>
        <div className={s.arrowRight}></div>
      </li>
    </ul>
  )
}
