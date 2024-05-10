import { Link } from 'react-router-dom'

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
        <Typography variant={'subtitle2'}>
          <Link to={'/'}>Back to home page</Link>
        </Typography>
      </Button>
    </div>
  )
}
