import { DecksTableBody } from '@/components/ui/table/decks-table/decks-table-body/decks-table-body'
import { DecksTableHead } from '@/components/ui/table/decks-table/decks-table-head/decks-table-head'
import { Table, TableBody, TableHeader } from '@/components/ui/table/table'

import s from './decks-table.module.scss'

type DecksTableProps = {
  items: string[]
  myCards?: boolean
}
export const DecksTable = ({ items, myCards }: DecksTableProps) => {
  return (
    <Table className={s.container}>
      <TableHeader>
        <DecksTableHead />
      </TableHeader>
      <TableBody>
        <DecksTableBody items={items} myCards={myCards} />
      </TableBody>
    </Table>
  )
}
