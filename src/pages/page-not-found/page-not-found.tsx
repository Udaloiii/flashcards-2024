import ErrorPage from '@/assets/logo/error-page'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import s from './page-not-found.module.scss'

export const PageNotFound = () => {
  return (
    <div className={s.errorPage}>
      <ErrorPage />
      <Typography as={'h3'} variant={'body1'}>
        Sorry! Page not found!
      </Typography>
      <Button>
        <Typography variant={'subtitle2'}>Back to home page</Typography>
      </Button>
    </div>
  )
}
