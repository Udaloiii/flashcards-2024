import { TableHead, TableRow } from '@/components/ui/table/table'
import { Typography } from '@/components/ui/typography'

export const CardsTableHead = () => {
  return (
    <TableRow>
      <TableHead>
        <Typography variant={'subtitle2'}>Question</Typography>
      </TableHead>
      <TableHead>
        <Typography variant={'subtitle2'}>Answer</Typography>
      </TableHead>
      <TableHead>
        <Typography variant={'subtitle2'}>Last updated</Typography>
      </TableHead>
      <TableHead>
        <Typography variant={'subtitle2'}>Grade</Typography>
      </TableHead>
      <TableHead />
    </TableRow>
  )
}
