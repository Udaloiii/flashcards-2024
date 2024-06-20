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
      {icon ? (
        <img alt={'user'} className={s.img} src={icon} />
      ) : (
        <div className={`${s.img} ${s.defaultAvatar}`}>
          <Typography variant={'body2'}>{userName?.slice(0, 1)}</Typography>
        </div>
      )}

      <div className={s.wrap}>
        <Typography variant={'subtitle2'}>{userName}</Typography>
        <Typography className={s.email} variant={'caption'}>
          {email}
        </Typography>
      </div>
    </div>
  )
}
