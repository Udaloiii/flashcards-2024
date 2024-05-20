import { Link } from 'react-router-dom'

import { ControlItems } from '@/components/ui/table/control-items/control-items'
import { TableCell, TableRow } from '@/components/ui/table/table'
import { Typography } from '@/components/ui/typography'
import { DeckType } from '@/services/flashcards-type'

import s from './decks-table-body.module.scss'

import icon from '../../../../../assets/img/deck-icon.jpg'

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
            <TableCell className={s.deckNameWrap}>
              <Link className={s.link} to={`/${el.id}`}>
                <div className={s.iconWrap}>
                  <img
                    alt={'image'}
                    className={`${s.img} ${el.cover && s.cover}`}
                    src={el.cover || icon}
                  />
                </div>
                <Typography className={s.name} variant={'body2'}>
                  {el.name}
                </Typography>
              </Link>
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
                titleCard={el.name}
              />
            </TableCell>
          </TableRow>
        )
      })}
    </>
  )
}
