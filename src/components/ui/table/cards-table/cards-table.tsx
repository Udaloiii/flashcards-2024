import { useDispatch, useSelector } from 'react-redux'

import { CardsTableBody } from '@/components/ui/table/cards-table/cards-table-body/cards-table-body'
import { ItemTableHead } from '@/components/ui/table/item-table-head/item-table-head'
import { Table, TableBody, TableHeader } from '@/components/ui/table/table'
import { GetCardResponse, OrderByCardsSort } from '@/services/flashcards-type'
import { RootState } from '@/services/store'
import { setOrderByCards } from '@/store/cards-list-reducer'

import s from './cards-table.module.scss'

type CardsTableProps = {
  items: GetCardResponse[]
  myDeck?: boolean
}
export const CardsTable = ({ items, myDeck }: CardsTableProps) => {
  const sortedBy = useSelector<RootState, OrderByCardsSort>(state => state.cardsList.sortBy)

  const dispatch = useDispatch()

  const handleSortCards = (columnName: OrderByCardsSort) => {
    if (sortedBy === columnName) {
      const columnNameWithoutDirection = columnName?.split('-')[0] // question || answer и т.д.
      const direction = columnName?.split('-')[1] // desc или asc
      const condition = direction === 'asc' ? 'desc' : 'asc'

      dispatch(
        setOrderByCards({
          orderBy: `${columnNameWithoutDirection}-${condition}` as OrderByCardsSort,
        })
      )
    } else {
      dispatch(setOrderByCards({ orderBy: columnName }))
    }
  }

  return (
    <Table className={s.container}>
      <TableHeader>
        <ItemTableHead
          firstTitle={'question-desc'}
          fourthTitle={'grade-desc'}
          myDeck={myDeck}
          secondTitle={'answer-desc'}
          sortBy={sortedBy}
          sortCards={handleSortCards}
          thirdTitle={'updated-desc'}
        />
      </TableHeader>
      <TableBody>
        <CardsTableBody items={items} myDeck={myDeck} />
      </TableBody>
    </Table>
  )
}
