import Edit from '@/assets/logo/edit'
import LogOut from '@/assets/logo/log-out'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { EditableSpan } from '@/components/ui/editable-span/editable-span'
import { Typography } from '@/components/ui/typography'

import s from './edit-profile.module.scss'

type EditProfileProps = {
  email?: string
  icon?: string
  name: string
}
export const EditProfile = ({ email, icon, name }: EditProfileProps) => {
  return (
    <Card className={s.container}>
      <Typography as={'h1'} variant={'h1'}>
        Personal Information
      </Typography>
      <div className={s.avatarBlock}>
        <img alt={'user'} className={s.avatar} src={icon} />
        <Button variant={'icon'}>
          <Edit />
        </Button>
      </div>
      <Typography as={'h2'} className={s.name} variant={'h2'}>
        <EditableSpan title={name} trigger={<Edit />} />
      </Typography>
      <Typography className={s.email} variant={'body2'}>
        {email}
      </Typography>
      <Button variant={'secondary'}>
        <LogOut />
        <Typography variant={'subtitle2'}>Logout</Typography>
      </Button>
    </Card>
  )
}
