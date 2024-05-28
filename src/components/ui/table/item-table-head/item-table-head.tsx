import ArrowDown from '@/assets/logo/arrow-down'
import { Button } from '@/components/ui/button'
import { TableHead, TableRow } from '@/components/ui/table/table'
import { Typography } from '@/components/ui/typography'

import s from './item-table-head.module.scss'

type ItemTableHeadProps = {
  className?: string
  firstTitle?: string
  fourthTitle?: string
  myDeck?: boolean
  onclick?: (value: string) => void
  secondTitle?: string
  sortByColumn?: string
  sortDirection?: 'asc' | 'desc'
  thirdTitle?: string
}
export const ItemTableHead = ({
  className,
  firstTitle = '',
  fourthTitle = '',
  myDeck,
  onclick,
  secondTitle = '',
  sortByColumn,
  sortDirection,
  thirdTitle = 'Last Updated',
}: ItemTableHeadProps) => {
  const sortIconCondition = sortDirection === 'desc' && s.sortUp

  return (
    <TableRow className={`${s.container} ${className}`}>
      <TableHead className={s.tableHead} onClick={() => onclick?.(firstTitle)}>
        <Typography variant={'subtitle2'}>{firstTitle}</Typography>
        {sortByColumn === firstTitle && (
          <Button
            className={`${s.sort} ${sortIconCondition}`}
            onSort={() => onclick?.('Name')}
            variant={'icon'}
          >
            <ArrowDown />
          </Button>
        )}
      </TableHead>
      <TableHead className={s.tableHead} onClick={() => onclick?.(secondTitle)}>
        <Typography variant={'subtitle2'}>
          {secondTitle}
          {sortByColumn === secondTitle && (
            <Button className={`${s.sort} ${sortIconCondition}`} variant={'icon'}>
              <ArrowDown />
            </Button>
          )}
        </Typography>
      </TableHead>
      <TableHead className={s.tableHead} onClick={() => onclick?.(thirdTitle)}>
        <Typography variant={'subtitle2'}>
          {thirdTitle}
          {sortByColumn === thirdTitle && (
            <Button className={`${s.sort} ${sortIconCondition}`} variant={'icon'}>
              <ArrowDown />
            </Button>
          )}
        </Typography>
      </TableHead>
      <TableHead className={s.tableHead}>
        <Typography variant={'subtitle2'}>{fourthTitle}</Typography>
      </TableHead>
      {myDeck && <TableHead className={s.tableHead} />}
    </TableRow>
  )
}
