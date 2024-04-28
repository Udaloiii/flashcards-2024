import { ReactNode } from 'react'

import { Button } from '@/components/ui/button'
import { Textfield } from '@/components/ui/textfield'
import { Typography } from '@/components/ui/typography'

import s from './editable-text.module.scss'

type EditableSpanProps = {
  changeOn?: boolean
  label?: string
  setChangeOn: (value: boolean) => void
  title: string
  toggleMode?: () => void
  trigger?: ReactNode
}
export const EditableText = ({
  changeOn,
  label,
  setChangeOn,
  title,
  toggleMode,
  trigger,
}: EditableSpanProps) => {
  return changeOn ? (
    <div className={s.changeEmail}>
      <Textfield autoFocus className={s.textfield} label={label} />
      <Button fullWidth onClick={() => setChangeOn?.(false)}>
        <Typography variant={'subtitle2'}>Save Changes</Typography>
      </Button>
    </div>
  ) : (
    <div className={s.changeSpan}>
      {trigger ? <span>{title}</span> : <span onClick={toggleMode}>{title}</span>}

      {trigger && (
        <Button onClick={toggleMode} variant={'icon'}>
          {trigger}
        </Button>
      )}
    </div>
  )
}
