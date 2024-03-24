import { Typography } from '@/components/ui/typography'

import s from './user-info.module.scss'
type UserInfoProps = {
  icon: string
}
export const UserInfo = ({ icon }: UserInfoProps) => {
  return (
    <div className={s.container}>
      <img alt={'user'} className={s.img} src={icon} />
      <div className={s.wrap}>
        <Typography variant={'subtitle2'}>Eugene</Typography>
        <Typography className={s.email} variant={'caption'}>
          j&johnson@gmail.com
        </Typography>
      </div>
    </div>
  )
}
