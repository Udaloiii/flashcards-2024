import { TableHead, TableRow } from '@/components/ui/table/table'
import { Typography } from '@/components/ui/typography'

import s from './cards-table-head.module.scss'

export const CardsTableHead = () => {
  return (
    <TableRow className={s.container}>
      <TableHead className={s.question}>
        <Typography variant={'subtitle2'}>Question</Typography>
      </TableHead>
      <TableHead>
        <Typography variant={'subtitle2'}>Answer</Typography>
      </TableHead>
      <TableHead>
        <Typography variant={'subtitle2'}>Last updated</Typography>
      </TableHead>
      <TableHead>
        <Typography variant={'subtitle2'}>Grade</Typography>
      </TableHead>
      <TableHead />
      <TableHead />
    </TableRow>
  )
}
