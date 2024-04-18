import CheckEmailLogo from '@/assets/logo/check-email-logo'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from './check-email.module.scss'

export const CheckEmail = () => {
  return (
    <Card className={s.container}>
      <Typography as={'h1'} className={s.title} variant={'h1'}>
        Check Email
      </Typography>
      <CheckEmailLogo />
      <Typography as={'p'} className={s.description} variant={'body2'}>
        We’ve sent an Email with instructions to example@mail.com
      </Typography>
      <Button fullWidth>
        <Typography variant={'subtitle2'}>Back to Sign In</Typography>
      </Button>
    </Card>
  )
}
