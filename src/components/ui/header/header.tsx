import { Link } from 'react-router-dom'

import HeaderLogo from '@/assets/logo/header-logo'
import HorizontalLine from '@/assets/logo/horizontal-line'
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
  const logOutHandler = () => {
    logOut()
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
  }

  return (
    <header className={s.main}>
      <div className={s.container}>
        <Link to={'/'}>
          <HeaderLogo />
        </Link>
        {isLoggedIn ? (
          <div className={s.userInfo}>
            <div className={s.userName}>
              <Typography variant={'subtitle1'}>{userName}</Typography>
              <HorizontalLine />
            </div>
            <Dropdown
              trigger={
                icon ? (
                  <img alt={'user'} className={s.trigger} src={icon} />
                ) : (
                  <div className={`${s.trigger} ${s.defaultAvatar}`}>
                    <Typography variant={'body2'}>{userName?.slice(0, 1)}</Typography>
                  </div>
                )
              }
            >
              <DropdownItem>
                <UserInfo email={email} icon={icon} userName={userName} />
              </DropdownItem>
              <DropdownSeparator />
              <DropdownItem className={s.dropdownItem}>
                <Link to={'/profile'}>
                  <Button variant={'icon'}>
                    <Person />
                  </Button>
                  <Typography variant={'caption'}>My Profile</Typography>
                </Link>
              </DropdownItem>
              <DropdownSeparator />
              <DropdownItem className={s.dropdownItem}>
                <Button onClick={logOutHandler} variant={'icon'}>
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
