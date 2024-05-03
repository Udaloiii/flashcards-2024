import { ControlItems } from '@/components/ui/table/control-items/control-items'
import { Rating } from '@/components/ui/table/rating/rating'
import { TableCell, TableRow } from '@/components/ui/table/table'
import { Typography } from '@/components/ui/typography'

import s from './cards-table-body.module.scss'

type DecksTableBodyProps = {
  items: string[]
  myDeck?: boolean
  ratingValue: number
}
export const CardsTableBody = ({ items, myDeck, ratingValue }: DecksTableBodyProps) => {
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
            <Rating value={ratingValue} />
          </TableCell>
          {myDeck && (
            <TableCell className={s.container}>
              <ControlItems cardPage myDecks={myDeck} />
            </TableCell>
          )}
        </TableRow>
      ))}
    </>
  )
}
