import { ControlItems } from '@/components/ui/table/control-items/control-items'
import { Rating } from '@/components/ui/table/rating/rating'
import { TableCell, TableRow } from '@/components/ui/table/table'
import { Typography } from '@/components/ui/typography'
import { GetCardResponse } from '@/services/flashcards-type'

import s from './cards-table-body.module.scss'

type DecksTableBodyProps = {
  items?: GetCardResponse[]
  myDeck?: boolean
}
export const CardsTableBody = ({ items, myDeck }: DecksTableBodyProps) => {
  return (
    <>
      {items?.map((el, ind) => {
        const date = new Date(el.updated)

        const sliceAnswer = el.answer
          .split(' ')
          .filter((_, ind) => ind <= 5)
          .join(' ')

        const sliceQuestion = el.question
          .split(' ')
          .filter((_, ind) => ind <= 5)
          .join(' ')

        return (
          <TableRow key={ind}>
            <TableCell>
              <Typography className={s.question} variant={'body2'}>
                {el.questionImg && <img alt={'questionImg'} src={el.questionImg} />}
                {sliceQuestion}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography className={s.answer} variant={'body2'}>
                {el.answerImg && <img alt={'answerImg'} src={el.answerImg} />}
                {sliceAnswer}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant={'body2'}>{date.toLocaleDateString()}</Typography>
            </TableCell>
            <TableCell>
              <Rating value={el.grade} />
            </TableCell>
            {myDeck && (
              <TableCell className={s.container}>
                <ControlItems
                  answerImg={el.answerImg}
                  cardAnswer={el.answer}
                  cardId={el.id}
                  cardPage
                  cardQuestion={el.question}
                  myDecks={myDeck}
                  questionImg={el.questionImg}
                />
              </TableCell>
            )}
          </TableRow>
        )
      })}
    </>
  )
}
