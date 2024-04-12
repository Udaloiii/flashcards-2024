import { ControlItems } from '@/components/ui/table/control-items/control-items'
import { TableCell, TableRow } from '@/components/ui/table/table'
import { Typography } from '@/components/ui/typography'

type DecksTableBodyProps = {
  items: string[]
  myCards?: boolean
}
export const DecksTableBody = ({ items, myCards }: DecksTableBodyProps) => {
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
            <Typography variant={'body2'}>{el}</Typography>
          </TableCell>
          <TableCell>
            <ControlItems myCards={myCards} />
          </TableCell>
        </TableRow>
      ))}
    </>
  )
}
