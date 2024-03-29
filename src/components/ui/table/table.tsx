import img from '@/assets/img/user-avatar.webp'
import { ControlItems } from '@/components/ui/table/control-items/control-items'
import { Stars } from '@/components/ui/table/stars/stars'
import { TableItem } from '@/components/ui/table/table-item/table-item'

import s from './table.module.scss'

type TableProps = {
  items?: string[] // пока так, потом посмотреть что с бека приходит
  myCards?: boolean
}
export const Table = ({ items, myCards }: TableProps) => {
  return (
    <table className={s.container}>
      <thead>
        <tr>
          <TableItem as={'th'} title={'Name'} />
          <TableItem as={'th'} title={'Cards'} />
          <TableItem as={'th'} title={'Last update'} />
          <TableItem as={'th'} title={'Author'} />
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {items?.map((el, i: number) => (
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
