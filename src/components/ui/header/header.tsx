import HeaderLogo from '@/assets/logo/header-logo'
import LogOut from '@/assets/logo/log-out'
import Person from '@/assets/logo/person'
import { Button } from '@/components/ui/button'
import { Dropdown } from '@/components/ui/dropdown'
import { Typography } from '@/components/ui/typography'

import s from './header.module.scss'

import icon from '../../../assets/img/user-avatar.webp'

type HeaderProps = {
  isLoggedIn?: boolean
  userName?: string
}
export const Header = ({ isLoggedIn, userName }: HeaderProps) => {
  const items = [
    { icon: <Person />, title: 'My Profile' },
    { icon: <LogOut />, title: 'Sign Out' },
  ]

  return (
    <header className={s.main}>
      <div className={s.container}>
        <HeaderLogo />
        {isLoggedIn ? (
          <div className={s.userInfo}>
            <Typography variant={'subtitle1'}>{userName}</Typography>
            <Dropdown iconTrigger={icon} items={items} />
          </div>
        ) : (
          <Button variant={'secondary'}>
            <Typography variant={'subtitle2'}>Sign In</Typography>
          </Button>
        )}
      </div>
    </header>
  )
}
