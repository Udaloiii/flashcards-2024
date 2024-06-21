import { useState } from 'react'

import { CardsTableBody } from '@/components/ui/table/cards-table/cards-table-body/cards-table-body'
import { ItemTableHead } from '@/components/ui/table/item-table-head/item-table-head'
import { Table, TableBody, TableHeader } from '@/components/ui/table/table'
import { GetCardResponse } from '@/services/flashcards-type'

import s from './cards-table.module.scss'

type CardsTableProps = {
  items?: GetCardResponse[]
  myDeck?: boolean
}
export const CardsTable = ({ items, myDeck }: CardsTableProps) => {
  const [sortByColumn, setSortByColumn] = useState<string>('')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

  const handleSort = (columnName: string) => {
    if (sortByColumn === columnName) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortByColumn(columnName)
      setSortDirection('asc')
    }
  }
  // const sortedItems = [...items].sort((a, b) => {
  //   if (sortByColumn === 'Question') {
  //     return sortDirection === 'asc' ? a.localeCompare(b) : b.localeCompare(a)
  //   } else if (sortByColumn === 'Last Updated') {
  //     return sortDirection === 'asc' ? a.localeCompare(b) : b.localeCompare(a)
  //   } else if (sortByColumn === 'Answer') {
  //     return sortDirection === 'asc' ? a.localeCompare(b) : b.localeCompare(a)
  //   }
  //
  //   return 0
  // })

  return (
    <Table className={s.container}>
      <TableHeader>
        <ItemTableHead
          firstTitle={'Question'}
          fourthTitle={'Grade'}
          myDeck={myDeck}
          onclick={handleSort}
          secondTitle={'Answer'}
          sortByColumn={sortByColumn}
          sortDirection={sortDirection}
        />
      </TableHeader>
      <TableBody>
        <CardsTableBody items={items} myDeck={myDeck} />
      </TableBody>
    </Table>
  )
}
