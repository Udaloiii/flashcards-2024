import { ControlItems } from '@/components/ui/table/control-items/control-items'
import { Stars } from '@/components/ui/table/stars/stars'
import { TableCell, TableRow } from '@/components/ui/table/table'
import { Typography } from '@/components/ui/typography'

import s from './cards-table-body.module.scss'

type DecksTableBodyProps = {
  items: string[]
}
export const CardsTableBody = ({ items }: DecksTableBodyProps) => {
  return (
    <>
      {items?.map((el, ind) => (
        <TableRow key={ind}>
          <TableCell>
            <Typography variant={'body2'}>{el}</Typography>
          </TableCell>
          <TableCell>
            <Typography variant={'body2'}>{el}</Typography>
          </TableCell>
          <TableCell>
            <Typography variant={'body2'}>{el}</Typography>
          </TableCell>
          <TableCell>
            <Stars />
          </TableCell>
          <TableCell className={s.container}>
            <ControlItems />
          </TableCell>
        </TableRow>
      ))}
    </>
  )
}
