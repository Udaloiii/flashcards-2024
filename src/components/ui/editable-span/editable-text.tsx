import { ChangeEvent, ReactNode } from 'react'

import { Button } from '@/components/ui/button'
import { useEditableSpan } from '@/components/ui/editable-span/hook/useEditableSpan'
import { Textfield } from '@/components/ui/textfield'
import { Typography } from '@/components/ui/typography'
import { useUpdateUserMutation } from '@/services/auth.service'

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
  const [updateUser] = useUpdateUserMutation()
  const { error, setError, setValue, value } = useEditableSpan()
  const updateUserHandler = () => {
    if (value.trim() !== '' && value.length <= 30) {
      updateUser({ name: value })
      setValue('')
      setChangeOn(false)
    } else {
      setError('Value equals the empty string or name is longer 30 characters')
    }
  }

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    if (error) {
      setError(null)
    }
    setValue(event.currentTarget.value)
  }

  return changeOn ? (
    <div className={s.changeEmail}>
      <Textfield
        autoFocus
        className={s.textfield}
        error={error}
        label={label}
        onChange={onChangeValue}
        value={value}
      />
      <Button fullWidth onClick={updateUserHandler} type={'button'}>
        <Typography variant={'subtitle2'}>Save Changes</Typography>
      </Button>
    </div>
  ) : (
    <div className={s.changeSpan}>
      {trigger ? <span>{title}</span> : <span onClick={toggleMode}>{title}</span>}

      {trigger && (
        <Button onClick={toggleMode} type={'button'} variant={'icon'}>
          {trigger}
        </Button>
      )}
    </div>
  )
}
