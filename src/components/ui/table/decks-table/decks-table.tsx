import { useDispatch, useSelector } from 'react-redux'

import { DecksTableBody } from '@/components/ui/table/decks-table/decks-table-body/decks-table-body'
import { ItemTableHead } from '@/components/ui/table/item-table-head/item-table-head'
import { Table, TableBody, TableHeader } from '@/components/ui/table/table'
import { DeckType, OrderByDecksSort } from '@/services/flashcards-type'
import { RootState } from '@/services/store'
import { setOrderByDecks } from '@/store/decks-list-reducer'

import s from './decks-table.module.scss'

type DecksTableProps = {
  className?: string
  items?: DeckType[]
  myDecks?: boolean
}
export const DecksTable = ({ className, items = [], myDecks }: DecksTableProps) => {
  const sortedBy = useSelector<RootState, OrderByDecksSort>(state => state.decksList.sortBy)
  const dispatch = useDispatch()

  const handleSortDecks = (columnName: OrderByDecksSort) => {
    if (sortedBy === columnName) {
      const columnNameWithoutDirection = columnName?.split('-')[0] // question || answer и т.д.
      const direction = columnName?.split('-')[1] // desc или asc
      const condition = direction === 'asc' ? 'desc' : 'asc'

      dispatch(
        setOrderByDecks({
          orderBy: `${columnNameWithoutDirection}-${condition}` as OrderByDecksSort,
        })
      )
    } else {
      dispatch(setOrderByDecks({ orderBy: columnName }))
    }
  }

  return (
    <Table className={`${s.container} ${className}`}>
      <TableHeader>
        <ItemTableHead
          className={s.itemTable}
          firstTitle={'name-desc'}
          fourthTitle={'created-desc'}
          myDeck
          secondTitle={'cardsCount-desc'}
          sortBy={sortedBy}
          sortDecks={handleSortDecks}
          thirdTitle={'updated-desc'}
        />
      </TableHeader>
      <TableBody>
        <DecksTableBody items={items} myDecks={myDecks} />
      </TableBody>
    </Table>
  )
}
