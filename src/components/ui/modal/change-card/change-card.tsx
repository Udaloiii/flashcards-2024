import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import Image from '@/assets/logo/image'
import { ControlledTextfield } from '@/components/controlled'
import { Button } from '@/components/ui/button'
import { ModalBody } from '@/components/ui/modal/modal-body/modal-body'
import { ModalFooter } from '@/components/ui/modal/modal-footer/modal-footer'
import { ModalHeader } from '@/components/ui/modal/modal-header/modal-header'
import { Typography } from '@/components/ui/typography'
import { useUpdateCardMutation } from '@/services/cards.service'
import { UpdateCardRequest } from '@/services/flashcards-type'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './change-card.module.scss'

type ChangeDeckProps = {
  answer?: string
  answerImg?: string
  cardId?: string
  onOpenChange?: (open: boolean) => void
  question?: string
  questionImg?: string
}
export const ChangeCard = ({
  answer,
  answerImg = '',
  cardId = '',
  onOpenChange,
  question,
  questionImg = '',
}: ChangeDeckProps) => {
  // для связки button-input
  const fileInputAnswerRef = useRef<HTMLInputElement>(null)
  const fileInputQuestionRef = useRef<HTMLInputElement>(null)
  const handleButtonAnswerClick = () => {
    fileInputAnswerRef.current?.click()
  }
  const handleButtonQuestionClick = () => {
    fileInputQuestionRef.current?.click()
  }

  // для изображений вопроса и ответа
  const [coverQuestion, setCoverQuestion] = useState<File | null>(null) // картинка вопроса
  const [previewQuestion, setPreviewQuestion] = useState<string>(questionImg) // картинка для отображения

  const [coverAnswer, setCoverAnswer] = useState<File | null>(null) // картинка ответа
  const [previewAnswer, setPreviewAnswer] = useState<string>(answerImg) // картинка для отображения

  const [updateCard] = useUpdateCardMutation()

  const changeCardSchema = z.object({
    answer: z
      .string()
      .min(3, 'Must be 3 or more characters long')
      .max(100, 'Value must be not longer 100 characters'),
    question: z
      .string()
      .min(3, 'Must be 3 or more characters long')
      .max(150, 'Value must be not longer 150 characters'),
  })
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<UpdateCardRequest>({
    defaultValues: { answer, question },
    resolver: zodResolver(changeCardSchema),
  })

  const updateCardHandler = handleSubmit(data => {
    const newData = { ...data, answerImg: coverAnswer, questionImg: coverQuestion }

    updateCard({ body: newData, id: cardId })
    reset()
    onOpenChange?.(false)
  })

  const removePreviewQuestion = () => {
    setPreviewQuestion('')
  }

  const removePreviewAnswer = () => {
    setPreviewAnswer('')
  }

  useEffect(() => {
    if (coverAnswer) {
      const newPreview = URL.createObjectURL(coverAnswer)

      setPreviewAnswer(newPreview)

      return () => URL.revokeObjectURL(newPreview)
    } else if (coverQuestion) {
      const newPreview = URL.createObjectURL(coverQuestion)

      setPreviewQuestion(newPreview)

      return () => URL.revokeObjectURL(newPreview)
    }
  }, [coverAnswer, coverQuestion])

  return (
    <div>
      <ModalHeader showCloseBtn title={'Edit Card'} />
      <form onSubmit={updateCardHandler}>
        <ModalBody className={s.container}>
          <Typography variant={'subtitle2'}>Question:</Typography>
          <ControlledTextfield
            autoComplete={'off'}
            control={control}
            error={errors.question?.message}
            label={'Question?'}
            name={'question'}
          />
          {previewQuestion && (
            <img alt={'card-image'} className={s.previewImage} src={previewQuestion} />
          )}
          {previewQuestion && (
            <Button fullWidth onClick={removePreviewQuestion} type={'button'}>
              Remove cover
            </Button>
          )}
          <div className={s.buttonUpload}>
            <Button
              fullWidth
              onClick={handleButtonQuestionClick}
              type={'button'}
              variant={'secondary'}
            >
              <Image />
              Upload Image
            </Button>
            <input
              accept={'image/*'}
              onChange={event => setCoverQuestion(event.currentTarget?.files?.[0] ?? null)}
              ref={fileInputQuestionRef}
              style={{ display: 'none' }}
              type={'file'}
            />
          </div>
          <Typography variant={'subtitle2'}>Answer:</Typography>
          <ControlledTextfield
            autoComplete={'off'}
            control={control}
            error={errors.answer?.message}
            label={'Answer?'}
            name={'answer'}
          />
          {previewAnswer && (
            <img alt={'card-image'} className={s.previewImage} src={previewAnswer} />
          )}
          {previewAnswer && (
            <Button fullWidth onClick={removePreviewAnswer} type={'button'}>
              Remove cover
            </Button>
          )}
          <Button fullWidth onClick={handleButtonAnswerClick} type={'button'} variant={'secondary'}>
            <Image />
            Change Image
          </Button>
          <input
            accept={'image/*'}
            onChange={event => setCoverAnswer(event.currentTarget?.files?.[0] ?? null)}
            ref={fileInputAnswerRef}
            style={{ display: 'none' }}
            type={'file'}
          />
        </ModalBody>
        <ModalFooter titlePrimary={'Change Card'} titleSecondary={'Cancel'} />
      </form>
    </div>
  )
}
