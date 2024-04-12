import { CardsTableBody } from '@/components/ui/table/cards-table/cards-table-body/cards-table-body'
import { CardsTableHead } from '@/components/ui/table/cards-table/cards-table-head/cards-table-head'
import { Table, TableBody, TableHeader } from '@/components/ui/table/table'

import s from './cards-table.module.scss'

type CardsTableProps = {
  items: string[]
}
export const CardsTable = ({ items }: CardsTableProps) => {
  return (
    <Table className={s.container}>
      <TableHeader>
        <CardsTableHead />
      </TableHeader>
      <TableBody>
        <CardsTableBody items={items} />
      </TableBody>
    </Table>
  )
}
