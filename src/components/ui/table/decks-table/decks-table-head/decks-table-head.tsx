import ArrowDown from '@/assets/logo/arrow-down'
import { Button } from '@/components/ui/button'
import { TableHead, TableRow } from '@/components/ui/table/table'
import { Typography } from '@/components/ui/typography'

import s from './decks-table-head.module.scss'

type DecksTableHeadProps = {
  onclick?: (value: string) => void
  sortByColumn?: string
  sortDirection?: 'asc' | 'desc'
}
export const DecksTableHead = ({ onclick, sortByColumn, sortDirection }: DecksTableHeadProps) => {
  const sortIconCondition = sortDirection === 'desc' && s.sortUp

  return (
    <TableRow className={s.container}>
      <TableHead className={s.tableHead} onClick={() => onclick?.('Name')}>
        <Typography variant={'subtitle2'}>Name</Typography>
        {sortByColumn === 'Name' && (
          <Button
            className={`${s.sort} ${sortIconCondition}`}
            onSort={() => onclick?.('Name')}
            variant={'icon'}
          >
            <ArrowDown />
          </Button>
        )}
      </TableHead>
      <TableHead className={s.tableHead} onClick={() => onclick?.('Cards')}>
        <Typography variant={'subtitle2'}>
          Cards
          {sortByColumn === 'Cards' && (
            <Button className={`${s.sort} ${sortIconCondition}`} variant={'icon'}>
              <ArrowDown />
            </Button>
          )}
        </Typography>
      </TableHead>
      <TableHead className={s.tableHead} onClick={() => onclick?.('Last updated')}>
        <Typography variant={'subtitle2'}>
          Last updated
          {sortByColumn === 'Last updated' && (
            <Button className={`${s.sort} ${sortIconCondition}`} variant={'icon'}>
              <ArrowDown />
            </Button>
          )}
        </Typography>
      </TableHead>
      <TableHead className={s.tableHead}>
        <Typography variant={'subtitle2'}>Created by</Typography>
      </TableHead>
      <TableHead className={s.tableHead} />
    </TableRow>
  )
}
