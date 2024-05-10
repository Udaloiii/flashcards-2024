import Delete from '@/assets/logo/delete'
import Edit from '@/assets/logo/edit'
import PlayCircle from '@/assets/logo/play-circle'
import { Button } from '@/components/ui/button'

import s from './control-items.module.scss'

type ControlItemsProps = {
  cardPage?: boolean
  className?: string
  disabled?: boolean
  myDecks?: boolean
}
export const ControlItems = ({ cardPage, className, disabled, myDecks }: ControlItemsProps) => {
  return (
    <div className={`${s.container} ${className}`}>
      {!cardPage && (
        <Button className={`${disabled && s.disabled}`} variant={'icon'}>
          <PlayCircle />
        </Button>
      )}
      {myDecks && (
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
