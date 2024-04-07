import { useState } from 'react'

import img from '@/assets/img/user-avatar.webp'
import { ControlItems } from '@/components/ui/table/control-items/control-items'
import { Stars } from '@/components/ui/table/stars/stars'
import { TableItem } from '@/components/ui/table/table-item/table-item'

import s from './table.module.scss'

type TableProps = {
  items?: string[] // пока так, потом посмотреть что с бека приходит
  myCards?: boolean
}
export const Table = ({ items = [], myCards }: TableProps) => {
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
    } else if (sortByColumn === 'Last update') {
      return sortDirection === 'asc' ? a.localeCompare(b) : b.localeCompare(a)
    }

    return 0
  })

  return (
    <table className={s.container}>
      <thead>
        <tr>
          <TableItem
            as={'th'}
            onClick={() => handleSort('Name')}
            sortByColumn={sortByColumn}
            sortDirection={sortDirection}
            title={'Name'}
          />
          <TableItem as={'th'} title={'Cards'} />
          <TableItem
            as={'th'}
            onClick={() => handleSort('Last update')}
            sortByColumn={sortByColumn}
            sortDirection={sortDirection}
            title={'Last update'}
          />
          <TableItem as={'th'} title={'Author'} />
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {sortedItems?.map((el, i: number) => (
          <tr key={i}>
            <TableItem as={'td'} className={s.big} image={img} title={el} />
            <TableItem as={'td'} title={el} />
            <TableItem as={'td'} title={el} />
            <TableItem as={'td'} title={el} />
            <Stars />
            <ControlItems myCards={myCards} />
          </tr>
        ))}
      </tbody>
    </table>
  )
}
