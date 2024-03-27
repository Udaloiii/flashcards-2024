import { Typography } from '@/components/ui/typography'

import s from './table-item.module.scss'

type TableItemProps = {
  as?: 'td' | 'th'
  className?: string
  image?: string
  title: string
}
export const TableItem = ({ as = 'th', className, image, title }: TableItemProps) => {
  return (
    <Typography as={as} className={className} variant={'body2'}>
      <div className={s.container}>
        {image && <img alt={'image'} className={s.image} src={image} />}
        {title}
      </div>
    </Typography>
  )
}
