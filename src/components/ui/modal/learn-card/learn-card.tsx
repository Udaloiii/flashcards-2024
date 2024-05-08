import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Radio } from '@/components/ui/radio'
import { Typography } from '@/components/ui/typography'

import s from './learn-card.module.scss'

type LearnCardProps = {
  answer?: string
  attempts?: number
  question?: string
}
export const LearnCard = ({ answer, attempts, question }: LearnCardProps) => {
  const [showAnswer, setShowAnswer] = useState(false)
  const arrOfRadioGroup = [
    'Did not know',
    'Forgot',
    'A lot of thought',
    'Сonfused',
    'Knew the answer',
  ]

  return (
    <Card className={s.container}>
      <Typography as={'h1'} className={s.title} variant={'h1'}>
        Learn “Deck Name”
      </Typography>
      <Typography variant={'subtitle1'}>Question: {question}</Typography>
      <Typography as={'p'} className={s.attempts} variant={'body2'}>
        Count of attempts: {attempts}
      </Typography>
      {!showAnswer ? (
        <Button fullWidth onClick={() => setShowAnswer(prevState => !prevState)}>
          <Typography variant={'subtitle2'}>Show Answer</Typography>
        </Button>
      ) : (
        <>
          <br />
          <Typography variant={'subtitle1'}>Answer: {answer}</Typography>
          <Typography variant={'subtitle1'}>Rate Yourself:</Typography>
          <Radio defaultValue={arrOfRadioGroup[0]} items={arrOfRadioGroup} />
          <Button fullWidth onClick={() => setShowAnswer(prevState => !prevState)}>
            <Typography variant={'subtitle2'}>Next Question</Typography>
          </Button>
        </>
      )}
    </Card>
  )
}
