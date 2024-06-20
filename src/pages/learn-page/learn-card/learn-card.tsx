import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Radio, RadioItem } from '@/components/ui/radio'
import { Typography } from '@/components/ui/typography'
import {
  useGetDeckByIdQuery,
  useLearnCardQuery,
  useSaveGradeCardMutation,
} from '@/services/decks.service'

import s from './learn-card.module.scss'

type LearnCardProps = {
  className?: string
  id?: string
}

// export type RadioValue = '1' | '2' | '3' | '4' | '5'
type RadioItems = {
  name: string
  value: string // потому что radio принимает value в качестве string
}
export const LearnCard = ({ className, id }: LearnCardProps) => {
  const { data: dataDeck } = useGetDeckByIdQuery({ id: id ?? '' })
  const [saveGrade, otherData] = useSaveGradeCardMutation()
  const newData = otherData?.data

  const { data } = useLearnCardQuery(
    { id: id ?? '' },
    {
      skip: !!newData,
    }
  )

  const learnCardHandler = (grade: number) =>
    saveGrade({ cardId: newData?.id ?? data?.id ?? '', grade: grade }) // отправка грейда на сервер

  const [showAnswer, setShowAnswer] = useState(false)

  const arrOfRadioGroup: RadioItems[] = [
    { name: 'Did not know', value: '1' },
    { name: 'Forgot', value: '2' },
    { name: 'A lot of thought', value: '3' },
    { name: 'Confused', value: '4' },
    { name: 'Knew the answer', value: '5' },
  ]

  const [radioValue, setRadioValue] = useState(arrOfRadioGroup[0].value)

  const handleSubmit = () => {
    learnCardHandler(Number(radioValue))
  }
  const finalData = newData ?? data

  return (
    <Card className={`${s.container} ${className}`}>
      <Typography as={'h1'} className={s.title} variant={'h1'}>
        Learn {dataDeck?.name}
      </Typography>
      <Typography variant={'subtitle1'}>
        Question:
        {newData?.question || data?.question}
      </Typography>
      {finalData?.questionImg && (
        <img
          alt={'question-img'}
          src={finalData?.questionImg}
          style={{ borderRadius: '2px', height: '200px', objectFit: 'contain' }}
        />
      )}
      <Typography as={'p'} className={s.attempts} variant={'body2'}>
        Count of attempts:
        {finalData?.shots}
      </Typography>
      {!showAnswer ? (
        <Button fullWidth onClick={() => setShowAnswer(prevState => !prevState)}>
          <Typography variant={'subtitle2'}>Show Answer</Typography>
        </Button>
      ) : (
        <>
          <br />
          <Typography variant={'subtitle1'}>
            Answer:
            {finalData?.answer}
          </Typography>
          {finalData?.answerImg && (
            <img
              alt={'answer-img'}
              src={finalData?.answerImg}
              style={{ borderRadius: '2px', height: '200px', objectFit: 'contain' }}
            />
          )}
          <Typography variant={'subtitle1'}>Rate Yourself:</Typography>
          <form>
            <Radio defaultValue={arrOfRadioGroup[0].value} onChange={setRadioValue}>
              {arrOfRadioGroup.map((el, ind) => {
                return <RadioItem key={ind} label={el.name} value={el.value} />
              })}
            </Radio>
            <Button
              fullWidth
              onClick={() => {
                handleSubmit()
                setShowAnswer(prevState => !prevState)
              }}
            >
              <Typography variant={'subtitle2'}>Next Question</Typography>
            </Button>
          </form>
        </>
      )}
    </Card>
  )
}
