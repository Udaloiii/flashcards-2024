import { ReactNode, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Textfield } from '@/components/ui/textfield'

import s from './editable-span.module.scss'

type EditableSpanProps = {
  title: string
  trigger?: ReactNode
}
export const EditableSpan = ({ title, trigger }: EditableSpanProps) => {
  const [changeOn, setChangeOn] = useState<boolean>(false)
  const toggleModeHandler = () => setChangeOn(prevState => !prevState)

  return changeOn ? (
    <Textfield autoFocus onBlur={() => setChangeOn(false)} />
  ) : (
    <div className={s.changeSpan}>
      {trigger ? <span>{title}</span> : <span onClick={toggleModeHandler}>{title}</span>}

      {trigger && (
        <Button onClick={toggleModeHandler} variant={'icon'}>
          {trigger}
        </Button>
      )}
    </div>
  )
}
