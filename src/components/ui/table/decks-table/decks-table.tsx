import {
  MainTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table/mainTable/mainTable'
import { Typography } from '@/components/ui/typography'

import s from './decks-table.module.scss'

type DecksTableProps = {
  items?: string[]
}
export const DecksTable = ({ items }: DecksTableProps) => {
  return (
    <MainTable className={s.container}>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Typography variant={'subtitle2'}>Name</Typography>
          </TableHead>
          <TableHead>
            <Typography variant={'subtitle2'}>Cards</Typography>
          </TableHead>
          <TableHead>
            <Typography variant={'subtitle2'}>Last updated</Typography>
          </TableHead>
          <TableHead>
            <Typography variant={'subtitle2'}>Created by</Typography>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items?.map((el, ind) => (
          <TableRow key={ind}>
            <TableCell>
              <Typography variant={'body2'}>{el}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant={'body2'}>{el}</Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </MainTable>
  )
}
