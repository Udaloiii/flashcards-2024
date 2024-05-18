import { Typography } from '@/components/ui/typography'

import s from './user-info.module.scss'
type UserInfoProps = {
  email?: string
  icon?: string
  userName?: string
}
export const UserInfo = ({ email, icon, userName }: UserInfoProps) => {
  return (
    <div className={s.container}>
      <img alt={'user'} className={s.img} src={icon} />
      <div className={s.wrap}>
        <Typography variant={'subtitle2'}>{userName}</Typography>
        <Typography className={s.email} variant={'caption'}>
          {email}
        </Typography>
      </div>
    </div>
  )
}
