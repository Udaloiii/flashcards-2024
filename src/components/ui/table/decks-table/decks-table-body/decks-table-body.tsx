import { ControlItems } from '@/components/ui/table/control-items/control-items'
import { TableCell, TableRow } from '@/components/ui/table/table'
import { Typography } from '@/components/ui/typography'
import { DeckType } from '@/services/flashcards-type'

import s from './decks-table-body.module.scss'

type DecksTableBodyProps = {
  items?: DeckType[]
  myCards?: boolean
}
export const DecksTableBody = ({ items, myCards }: DecksTableBodyProps) => {
  return (
    <>
      {items?.map((el, ind) => {
        const date = new Date(el.updated)

        return (
          <TableRow key={ind}>
            <TableCell>
              <Typography variant={'body2'}>{el.name}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant={'body2'}>{el.cardsCount}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant={'body2'}>{date.toLocaleDateString()}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant={'body2'}>{el.author.name}</Typography>
            </TableCell>
            <TableCell>
              <ControlItems
                className={s.controlItems}
                disabled={el.cardsCount < 1}
                myDecks={myCards}
              />
            </TableCell>
          </TableRow>
        )
      })}
    </>
  )
}
