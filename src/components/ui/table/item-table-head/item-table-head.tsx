import ArrowDown from '@/assets/logo/arrow-down'
import { Button } from '@/components/ui/button'
import { TableHead, TableRow } from '@/components/ui/table/table'
import { Typography } from '@/components/ui/typography'
import { OrderByCardsSort, OrderByDecksSort } from '@/services/flashcards-type'

import s from './item-table-head.module.scss'

type ItemTableHeadProps = {
  className?: string
  firstTitle: OrderByCardsSort | OrderByDecksSort
  fourthTitle?: OrderByCardsSort | OrderByDecksSort
  myDeck?: boolean
  secondTitle: OrderByCardsSort | OrderByDecksSort
  sortBy?: OrderByCardsSort | OrderByDecksSort
  sortCards?: (value: OrderByCardsSort) => void
  sortDecks?: (value: OrderByDecksSort) => void
  thirdTitle: OrderByCardsSort | OrderByDecksSort
}

export const ItemTableHead = ({
  className,
  firstTitle,
  fourthTitle = null,
  myDeck,
  secondTitle,
  sortBy,
  sortCards,
  sortDecks,
  thirdTitle,
}: ItemTableHeadProps) => {
  const sortIconCondition = sortBy?.split('-')[1] === 'asc' && s.sortUp

  const sortLastCell = fourthTitle && s.sortLastCell // для курсора последнего столбца

  const onClick = (value: OrderByCardsSort | OrderByDecksSort) => {
    if (sortCards) {
      sortCards(value as OrderByCardsSort) // Утверждение типа для sortCards
    } else if (sortDecks) {
      sortDecks(value as OrderByDecksSort) // Утверждение типа для sortDecks
    }
  }

  const visionArrow = sortBy?.split('-')[0]
  const checkSort = (title: OrderByCardsSort | OrderByDecksSort) => title?.split('-')[0] // для сравнения с visionArrow и показывания галочки ортировки
  const getTitle = (title: null | string) => {
    switch (title) {
      case 'cardsCount-desc':
        title = 'cards'
        break
      case 'updated-desc':
        title = 'last updated'
        break
      case 'created-desc':
        title = 'created by'
        break
      default:
        break
    }
    let newTitle = title?.split('-')[0] ?? ''
    const firstChar = newTitle.slice(0, 1)[0].toUpperCase()

    newTitle = firstChar + newTitle.slice(1)

    return newTitle
  } // для отображения title без asc | desc

  return (
    <TableRow className={`${s.container} ${className}`}>
      <TableHead className={s.tableHead} onClick={() => onClick(firstTitle)}>
        <Typography variant={'subtitle2'}>{getTitle(firstTitle)}</Typography>
        {visionArrow === checkSort(firstTitle) && (
          <Button className={`${s.sort} ${sortIconCondition}`} variant={'icon'}>
            <ArrowDown />
          </Button>
        )}
      </TableHead>
      <TableHead className={s.tableHead} onClick={() => onClick(secondTitle)}>
        <Typography variant={'subtitle2'}>
          {getTitle(secondTitle)}
          {visionArrow === checkSort(secondTitle) && (
            <Button className={`${s.sort} ${sortIconCondition}`} variant={'icon'}>
              <ArrowDown />
            </Button>
          )}
        </Typography>
      </TableHead>
      <TableHead className={s.tableHead} onClick={() => onClick(thirdTitle)}>
        <Typography variant={'subtitle2'}>
          {getTitle(thirdTitle)}
          {visionArrow === checkSort(thirdTitle) && (
            <Button className={`${s.sort} ${sortIconCondition}`} variant={'icon'}>
              <ArrowDown />
            </Button>
          )}
        </Typography>
      </TableHead>
      <TableHead
        className={`${s.tableHead} ${s.sortLastCell}`}
        onClick={() => onClick(fourthTitle)}
      >
        {fourthTitle && (
          <Typography variant={'subtitle2'}>
            {getTitle(fourthTitle)}
            {visionArrow === checkSort(fourthTitle) && (
              <Button className={`${s.sort} ${sortIconCondition} ${sortLastCell}`} variant={'icon'}>
                <ArrowDown />
              </Button>
            )}
          </Typography>
        )}
      </TableHead>
      {myDeck && <TableHead className={s.tableHead} />}
    </TableRow>
  )
}
