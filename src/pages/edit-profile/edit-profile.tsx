import { ChangeEvent, useEffect, useRef, useState } from 'react'

import Close from '@/assets/logo/close'
import Edit from '@/assets/logo/edit'
import LogOut from '@/assets/logo/log-out'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { EditableText } from '@/components/ui/editable-span/editable-text'
import { useEditableSpan } from '@/components/ui/editable-span/hook/useEditableSpan'
import { Loader } from '@/components/ui/loader/loader'
import { Typography } from '@/components/ui/typography'
import { useAuthMeQuery, useLogOutMutation, useUpdateUserMutation } from '@/services/auth.service'

import s from './edit-profile.module.scss'

export const EditProfile = () => {
  const [cover, setCover] = useState<File | null>(null)

  const { data, isError, isLoading } = useAuthMeQuery()
  const [logOut] = useLogOutMutation()
  const [updateUser, otherData] = useUpdateUserMutation()

  const { changeOn, setChangeOn, toggleMode } = useEditableSpan()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const logOutHandler = () => {
    logOut()
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
  }
  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files?.[0]) {
      setCover(event.currentTarget.files[0])
    }
  }

  const removeAvatar = () => {
    setCover(null)
    updateUser({ avatar: cover })
  }

  useEffect(() => {
    if (cover) {
      updateUser({ avatar: cover })
    }
  }, [cover, updateUser])

  if (isLoading || otherData.isLoading) {
    return <Loader />
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
      <Typography as={'h1'} variant={'h1'}>
        Personal Information
      </Typography>
      <div className={s.avatarBlock}>
        {data?.avatar ? (
          <div>
            <img alt={'user'} className={s.avatar} src={data?.avatar} />
            <Button
              className={s.removeAvatar}
              onClick={removeAvatar}
              type={'button'}
              variant={'icon'}
            >
              <Close />
            </Button>
          </div>
        ) : (
          <div className={s.defaultAvatar}>
            <Typography variant={'h2'}>{data?.name.slice(0, 1)}</Typography>
          </div>
        )}
        <Button
          className={s.changeAvatar}
          onClick={handleButtonClick}
          type={'button'}
          variant={'icon'}
        >
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
          <Button onClick={logOutHandler} type={'button'} variant={'secondary'}>
            <LogOut />
            <Typography variant={'subtitle2'}>Logout</Typography>
          </Button>
        </>
      )}
    </Card>
  )
}
