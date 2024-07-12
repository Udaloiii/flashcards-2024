import { DecksTableBody } from '@/components/ui/table/decks-table/decks-table-body/decks-table-body'
import { ItemTableHead } from '@/components/ui/table/item-table-head/item-table-head'
import { Table, TableBody, TableHeader } from '@/components/ui/table/table'
import { DeckType } from '@/services/flashcards-type'

import s from './decks-table.module.scss'

type DecksTableProps = {
  className?: string
  items?: DeckType[]
  myDecks?: boolean
}
export const DecksTable = ({ className, items = [], myDecks }: DecksTableProps) => {
  // const [sortByColumn, setSortByColumn] = useState<string>('')
  // const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')
  //
  // const handleSort = (columnName: string) => {
  //   if (sortByColumn === columnName) {
  //     setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
  //   } else {
  //     setSortByColumn(columnName)
  //     setSortDirection('asc')
  //   }
  // }
  // const sortedItems = [...items].sort((a, b) => {
  //   if (sortByColumn === 'Name') {
  //     return sortDirection === 'asc'
  //       ? a.author.name.localeCompare(b.author.name)
  //       : b.author.name.localeCompare(a.author.name)
  //   } else if (sortByColumn === 'Last updated') {
  //     return sortDirection === 'asc' ? a.localeCompare(b) : b.localeCompare(a)
  //   } else if (sortByColumn === 'Cards') {
  //     return sortDirection === 'asc' ? a.localeCompare(b) : b.localeCompare(a)
  //   }
  //
  //   return 0
  // })

  return (
    <Table className={`${s.container} ${className}`}>
      <TableHeader>
        <ItemTableHead
          className={s.itemTable}
          firstTitle={'Name'}
          fourthTitle={'Created By'}
          myDeck
          secondTitle={'Cards'}
          thirdTitle={'Last Updated'}
        />
      </TableHeader>
      <TableBody>
        <DecksTableBody items={items} myDecks={myDecks} />
      </TableBody>
    </Table>
  )
}
