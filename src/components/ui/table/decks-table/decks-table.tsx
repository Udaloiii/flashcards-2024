import { useState } from 'react'

import { DecksTableBody } from '@/components/ui/table/decks-table/decks-table-body/decks-table-body'
import { DecksTableHead } from '@/components/ui/table/decks-table/decks-table-head/decks-table-head'
import { Table, TableBody, TableHeader } from '@/components/ui/table/table'

import s from './decks-table.module.scss'

type DecksTableProps = {
  items: string[]
  myCards?: boolean
}
export const DecksTable = ({ items, myCards }: DecksTableProps) => {
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
  const sortedItems = [...items].sort((a, b) => {
    if (sortByColumn === 'Name') {
      return sortDirection === 'asc' ? a.localeCompare(b) : b.localeCompare(a)
    } else if (sortByColumn === 'Last updated') {
      return sortDirection === 'asc' ? a.localeCompare(b) : b.localeCompare(a)
    } else if (sortByColumn === 'Cards') {
      return sortDirection === 'asc' ? a.localeCompare(b) : b.localeCompare(a)
    }

    return 0
  })

  return (
    <Table className={s.container}>
      <TableHeader>
        <DecksTableHead
          onclick={handleSort}
          sortByColumn={sortByColumn}
          sortDirection={sortDirection}
        />
      </TableHeader>
      <TableBody>
        <DecksTableBody items={sortedItems} myCards={myCards} />
      </TableBody>
    </Table>
  )
}
