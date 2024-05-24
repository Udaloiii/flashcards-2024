import { ChangeEvent, useRef } from 'react'

import Edit from '@/assets/logo/edit'
import LogOut from '@/assets/logo/log-out'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { EditableText } from '@/components/ui/editable-span/editable-text'
import { useEditableSpan } from '@/components/ui/editable-span/hook/useEditableSpan'
import { Typography } from '@/components/ui/typography'
import { useAuthMeQuery, useLogOutMutation } from '@/services/auth.service'

import s from './edit-profile.module.scss'

export const EditProfile = () => {
  const { data, isError, isLoading } = useAuthMeQuery()
  const [logOut] = useLogOutMutation()

  const { changeOn, setChangeOn, toggleMode } = useEditableSpan()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0]

    if (file) {
      // Обработка выбранного файла, пока заглушка
      console.log('Выбран файл:', file)
    }
  }

  if (isLoading) {
    return <div style={{ display: 'flex', justifyContent: 'center' }}>LOADING...</div>
  }

  if (isError) {
    return (
      <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
        Error!!!
      </div>
    )
  }

  return (
    <Card as={'form'} className={s.container} onSubmit={() => {}}>
      <Typography variant={'body2'} />
      <Typography as={'h1'} variant={'h1'}>
        Personal Information
      </Typography>
      <div className={s.avatarBlock}>
        <img alt={'user'} className={s.avatar} src={data?.avatar} />
        <Button onClick={handleButtonClick} type={'button'} variant={'icon'}>
          <Edit />
        </Button>
        <input
          accept={'image/*'}
          onChange={handleFileChange}
          ref={fileInputRef}
          style={{ display: 'none' }}
          type={'file'}
        />
      </div>

      <Typography as={'h2'} className={s.name} variant={'h2'}>
        <EditableText
          changeOn={changeOn}
          label={'Nickname'}
          setChangeOn={setChangeOn}
          title={data?.name || ''}
          toggleMode={toggleMode}
          trigger={<Edit />}
        />
      </Typography>
      {!changeOn && (
        <>
          <Typography className={s.email} variant={'body2'}>
            {data?.email}
          </Typography>
          <Button onClick={() => logOut()} type={'button'} variant={'secondary'}>
            <LogOut />
            <Typography variant={'subtitle2'}>Logout</Typography>
          </Button>
        </>
      )}
    </Card>
  )
}
