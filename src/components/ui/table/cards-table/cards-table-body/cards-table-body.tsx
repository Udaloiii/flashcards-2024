import { ControlItems } from '@/components/ui/table/control-items/control-items'
import { Rating } from '@/components/ui/table/rating/rating'
import { TableCell, TableRow } from '@/components/ui/table/table'
import { Typography } from '@/components/ui/typography'
import { GetCardResponse } from '@/services/flashcards-type'

import s from './cards-table-body.module.scss'

type DecksTableBodyProps = {
  items?: GetCardResponse[]
  myDeck?: boolean
  titleCard?: string
}
export const CardsTableBody = ({ items, myDeck, titleCard }: DecksTableBodyProps) => {
  return (
    <>
      {items?.map((el, ind) => {
        const date = new Date(el.updated)

        return (
          <TableRow key={ind}>
            <TableCell>
              <Typography variant={'body2'}>{el.question}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant={'body2'}>{el.answer}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant={'body2'}>{date.toLocaleDateString()}</Typography>
            </TableCell>
            <TableCell>
              <Rating value={el.grade} />
            </TableCell>
            {myDeck && (
              <TableCell className={s.container}>
                <ControlItems cardPage myDecks={myDeck} titleCard={titleCard} />
              </TableCell>
            )}
          </TableRow>
        )
      })}
    </>
  )
}
