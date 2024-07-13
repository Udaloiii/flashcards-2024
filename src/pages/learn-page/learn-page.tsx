import { useNavigate, useParams } from 'react-router-dom'

import ArrowBack from '@/assets/logo/arrow-back'
import { Typography } from '@/components/ui/typography'
import { LearnCard } from '@/pages/learn-page/learn-card/learn-card'

import s from './learn-page.module.scss'

export const LearnPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  return (
    <div className={s.container}>
      <Typography as={'a'} className={s.backWrap} onClick={() => navigate(-1)} variant={'body2'}>
        <ArrowBack />
        Back to Decks List
      </Typography>
      <div className={s.cardWrap}>
        <LearnCard id={id} />
      </div>
    </div>
  )
}
