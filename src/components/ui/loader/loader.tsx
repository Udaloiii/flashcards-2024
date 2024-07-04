import { useSelector } from 'react-redux'

import { RootState } from '@/services/store'

import s from './loader.module.scss'

export const Loader = () => {
  const isLoading = useSelector<RootState, boolean>(state => state.app.isLoading)

  return isLoading && <div className={s.loader}></div>
}
