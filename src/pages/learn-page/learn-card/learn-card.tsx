import { MouseEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Radio, RadioItem } from '@/components/ui/radio'
import { Typography } from '@/components/ui/typography'
import {
  useGetDeckByIdQuery,
  useLearnCardQuery,
  useSaveGradeCardMutation,
} from '@/services/decks.service'
import { setIsLoading } from '@/store/app-reducer'

import s from './learn-card.module.scss'

type LearnCardProps = {
  className?: string
  id?: string
}

type RadioItems = {
  name: string
  value: string // потому что radio принимает value в качестве string
}
export const LearnCard = ({ className, id }: LearnCardProps) => {
  const dispatch = useDispatch()

  const [saveGrade, otherData] = useSaveGradeCardMutation()
  const dataFromSaveGrade = otherData?.data

  const { data, isFetching, isLoading } = useLearnCardQuery(
    { id: id ?? '' },
    {
      skip: !!dataFromSaveGrade || otherData?.isLoading, // для пропуска запроса если получаю данные из useSaveGradeCardMutation или идёт сохранение грейда
    }
  )

  const { data: dataDeck } = useGetDeckByIdQuery(
    { id: id ?? '' },
    {
      skip: !!data,
    }
  )

  const learnCardHandler = (grade: number) => {
    saveGrade({ cardId: dataFromSaveGrade?.id ?? data?.id ?? '', grade: grade }) // отправка грейда на сервер
  }

  const [showAnswer, setShowAnswer] = useState(false)

  const arrOfRadioGroup: RadioItems[] = [
    { name: 'Did not know', value: '1' },
    { name: 'Forgot', value: '2' },
    { name: 'A lot of thought', value: '3' },
    { name: 'Confused', value: '4' },
    { name: 'Knew the answer', value: '5' },
  ]

  const [radioValue, setRadioValue] = useState(arrOfRadioGroup[0].value)

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault() // сбрасываю поведение (перезагрузка страницы)

    learnCardHandler(Number(radioValue))
    setShowAnswer(prevState => !prevState)
  }

  if (otherData?.isLoading || isLoading || isFetching) {
    dispatch(setIsLoading({ isLoading: true }))

    return
  } else {
    dispatch(setIsLoading({ isLoading: false }))
  }

  const dataCondition = otherData?.isLoading || dataFromSaveGrade ? dataFromSaveGrade : data // брать data сначала от useLearnCardQuery, а потом при сохранении грейда

  return (
    <Card className={`${s.container} ${className}`}>
      <Typography as={'h1'} className={s.title} variant={'h1'}>
        Learn {dataDeck?.name}
      </Typography>
      <Typography variant={'subtitle1'}>Question: {dataCondition?.question}</Typography>
      {dataCondition?.questionImg && (
        <img
          alt={'question-img'}
          src={dataCondition?.questionImg}
          style={{ borderRadius: '2px', height: '200px', objectFit: 'contain' }}
        />
      )}
      <Typography as={'p'} className={s.attempts} variant={'body2'}>
        Count of attempts: {dataCondition?.shots}
      </Typography>
      {!showAnswer ? (
        <Button fullWidth onClick={() => setShowAnswer(prevState => !prevState)}>
          <Typography variant={'subtitle2'}>Show Answer</Typography>
        </Button>
      ) : (
        <>
          <br />
          <Typography variant={'subtitle1'}>Answer: {dataCondition?.answer}</Typography>
          {dataCondition?.answerImg && (
            <img
              alt={'answer-img'}
              src={dataCondition?.answerImg}
              style={{ borderRadius: '2px', height: '200px', objectFit: 'contain' }}
            />
          )}
          <Typography variant={'subtitle1'}>Rate Yourself:</Typography>
          <form className={s.formContainer}>
            <Radio defaultValue={arrOfRadioGroup[0].value} onChange={setRadioValue}>
              {arrOfRadioGroup.map((el, ind) => {
                return <RadioItem key={ind} label={el.name} value={el.value} />
              })}
            </Radio>
            <Button fullWidth onClick={handleSubmit}>
              <Typography variant={'subtitle2'}>Next Question</Typography>
            </Button>
          </form>
        </>
      )}
    </Card>
  )
}
