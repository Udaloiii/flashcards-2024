import { Link } from 'react-router-dom'

import HeaderLogo from '@/assets/logo/header-logo'
import LogOut from '@/assets/logo/log-out'
import Person from '@/assets/logo/person'
import { Button } from '@/components/ui/button'
import { Dropdown, DropdownItem, DropdownSeparator } from '@/components/ui/dropdown/dropdown'
import { UserInfo } from '@/components/ui/dropdown/user-info/user-info'
import { Typography } from '@/components/ui/typography'
import { useLogOutMutation } from '@/services/auth.service'

import s from './header.module.scss'

type HeaderProps = {
  email?: string
  icon?: string
  isLoggedIn?: boolean
  userName?: string
}
export const Header = ({ email, icon, isLoggedIn, userName }: HeaderProps) => {
  const [logOut] = useLogOutMutation()

  return (
    <header className={s.main}>
      <div className={s.container}>
        <Link to={'/'}>
          <HeaderLogo />
        </Link>
        {isLoggedIn ? (
          <div className={s.userInfo}>
            <Typography variant={'subtitle1'}>{userName}</Typography>
            <Dropdown trigger={<img alt={'user'} className={s.trigger} src={icon} />}>
              <UserInfo email={email} icon={icon} userName={userName} />
              <DropdownSeparator />
              <Link to={'/profile'}>
                <DropdownItem className={s.dropdownItem}>
                  <Button variant={'icon'}>
                    <Person />
                  </Button>
                  <Typography variant={'caption'}>My Profile</Typography>
                </DropdownItem>
              </Link>
              <DropdownSeparator />
              <DropdownItem className={s.dropdownItem}>
                <Button onClick={() => logOut()} variant={'icon'}>
                  <LogOut />
                  <Typography variant={'caption'}>Sign Out</Typography>
                </Button>
              </DropdownItem>
            </Dropdown>
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
