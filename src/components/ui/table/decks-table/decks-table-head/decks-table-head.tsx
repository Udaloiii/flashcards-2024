import { TableHead, TableRow } from '@/components/ui/table/table'
import { Typography } from '@/components/ui/typography'

export const DecksTableHead = () => {
  return (
    <TableRow>
      <TableHead>
        <Typography variant={'subtitle2'}>Name</Typography>
      </TableHead>
      <TableHead>
        <Typography variant={'subtitle2'}>Cards</Typography>
      </TableHead>
      <TableHead>
        <Typography variant={'subtitle2'}>Last updated</Typography>
      </TableHead>
      <TableHead>
        <Typography variant={'subtitle2'}>Created by</Typography>
      </TableHead>
      <TableHead />
    </TableRow>
  )
}
