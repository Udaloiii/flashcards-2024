import Delete from '@/assets/logo/delete'
import Edit from '@/assets/logo/edit'
import PlayCircle from '@/assets/logo/play-circle'
import { Button } from '@/components/ui/button'

import s from './control-items.module.scss'

type ControlItemsProps = {
  className?: string
  myCards?: boolean
}
export const ControlItems = ({ className, myCards }: ControlItemsProps) => {
  return (
    <div className={`${s.container} ${className}`}>
      <Button variant={'icon'}>
        <PlayCircle />
      </Button>
      {myCards && (
        <>
          <Button variant={'icon'}>
            <Edit />
          </Button>
          <Button variant={'icon'}>
            <Delete />
          </Button>
        </>
      )}
    </div>
  )
}
