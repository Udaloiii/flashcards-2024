import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Typography } from '@/components/ui/typography'
import { RootState } from '@/services/store'
import { setInfoMessage } from '@/store/app-reducer'

import s from './snackbar.module.scss'

export const Snackbar = () => {
  const message = useSelector<RootState, null | string>(state => state.app.infoMessage)
  const dispatch = useDispatch()

  useEffect(() => {
    if (message) {
      const id = setTimeout(() => {
        dispatch(setInfoMessage({ message: null }))
      }, 5000)

      return () => clearTimeout(id)
    }
  }, [message, dispatch])

  return (
    message && (
      <div className={s.container}>
        <Typography variant={'body1'}> {message}</Typography>
      </div>
    )
  )
}
