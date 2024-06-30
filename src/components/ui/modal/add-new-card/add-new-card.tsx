import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import Image from '@/assets/logo/image'
import { ControlledTextfield } from '@/components/controlled'
import { Button } from '@/components/ui/button'
import { ModalBody } from '@/components/ui/modal/modal-body/modal-body'
import { ModalFooter } from '@/components/ui/modal/modal-footer/modal-footer'
import { ModalHeader } from '@/components/ui/modal/modal-header/modal-header'
import { Typography } from '@/components/ui/typography'
import { useCreateCardMutation } from '@/services/decks.service'
import { CreateCardRequest } from '@/services/flashcards-type'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './add-new-card.module.scss'

type AddNewCardProps = {
  onOpenChange?: (open: boolean) => void
}
export const AddNewCard = ({ onOpenChange }: AddNewCardProps) => {
  const { id } = useParams() // чтобы достать id из url

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
  const [previewQuestion, setPreviewQuestion] = useState<string>('') // картинка для отображения

  const [coverAnswer, setCoverAnswer] = useState<File | null>(null) // картинка ответа
  const [previewAnswer, setPreviewAnswer] = useState<string>('') // картинка для отображения

  const [addCard] = useCreateCardMutation()

  const addCardSchema = z.object({
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
  } = useForm<CreateCardRequest>({ resolver: zodResolver(addCardSchema) })

  const addCardHandler = handleSubmit(data => {
    addCard({
      body: { ...data, answerImg: coverAnswer, questionImg: coverQuestion },
      deckId: id ?? '',
    })
    reset()
    onOpenChange?.(false)
  })

  const removePreviewCoverAnswer = () => {
    setPreviewAnswer('')
  }

  const removePreviewCoverQuestion = () => {
    setPreviewQuestion('')
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
    <div className={s.container}>
      <ModalHeader showCloseBtn title={'Add New Card'} />
      <form onSubmit={addCardHandler}>
        <ModalBody>
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
            <Button fullWidth onClick={removePreviewCoverQuestion} type={'button'}>
              Remove cover
            </Button>
          )}
          <Button
            fullWidth
            onClick={handleButtonQuestionClick}
            type={'button'}
            variant={'secondary'}
          >
            <Image />
            Change Image
          </Button>
          <input
            accept={'image/*'}
            onChange={event => setCoverQuestion(event.currentTarget?.files?.[0] ?? null)}
            ref={fileInputQuestionRef}
            style={{ display: 'none' }}
            type={'file'}
          />
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
            <Button fullWidth onClick={removePreviewCoverAnswer} type={'button'}>
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
        <ModalFooter titlePrimary={'Add New Card'} titleSecondary={'Cancel'} />
      </form>
    </div>
  )
}
