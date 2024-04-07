import ArrowDown from '@/assets/logo/arrow-down'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import s from './table-item.module.scss'

type TableItemProps = {
  as?: 'td' | 'th'
  className?: string
  image?: string
  onClick?: (value: string) => void
  sortByColumn?: string
  sortDirection?: 'asc' | 'desc'
  title: string
}
export const TableItem = ({
  as = 'th',
  className,
  image,
  onClick,
  sortByColumn,
  sortDirection,
  title,
}: TableItemProps) => {
  const onClickHandler = () => onClick?.(title)

  const sortIconCondition = sortDirection === 'desc' && s.sortUp

  return (
    <Typography as={as} className={className} variant={'body2'}>
      <div className={s.container} onClick={onClickHandler}>
        {image && <img alt={'image'} className={s.image} src={image} />}
        {title}
        {as === 'th' && sortByColumn === title && (
          <Button
            className={`${s.sort} ${sortIconCondition}`}
            onSort={onClickHandler}
            variant={'icon'}
          >
            <ArrowDown />
          </Button>
        )}
      </div>
    </Typography>
  )
}
