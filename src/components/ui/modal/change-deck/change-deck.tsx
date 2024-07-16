import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import Image from '@/assets/logo/image'
import { ControlledCheckbox, ControlledTextfield } from '@/components/controlled'
import { Button } from '@/components/ui/button'
import { ModalBody } from '@/components/ui/modal/modal-body/modal-body'
import { ModalFooter } from '@/components/ui/modal/modal-footer/modal-footer'
import { ModalHeader } from '@/components/ui/modal/modal-header/modal-header'
import { useUpdateDeckMutation } from '@/services/decks.service'
import { CreateDeckArgs } from '@/services/flashcards-type'
import { setInfoMessage, setIsLoading } from '@/store/app-reducer'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './change-deck.module.scss'

type ChangeDeckProps = {
  closeDropdown?: (open: boolean) => void
  deckId?: string
  image?: null | string
  isOpenDropdown?: boolean
  isPrivate?: boolean
  onOpenChange?: (open: boolean) => void
  title?: string
}
export const ChangeDeck = ({
  closeDropdown,
  deckId = '',
  image = '',
  isOpenDropdown,
  isPrivate = false,
  onOpenChange,
  title = '',
}: ChangeDeckProps) => {
  const dispatch = useDispatch()

  const fileInputRef = useRef<HTMLInputElement>(null)
  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }
  const [cover, setCover] = useState<File | null>(null) // картинка
  const [previewCover, setPreviewCover] = useState<null | string>(image) // картинка для отображения

  const [updateDeck, otherData] = useUpdateDeckMutation()

  const changeDeckSchema = z.object({
    isPrivate: z.boolean(),
    name: z
      .string()
      .min(3, 'Must be 3 or more characters long')
      .max(30, 'Value must be not longer 30 characters'),
  })
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<CreateDeckArgs>({
    defaultValues: { isPrivate, name: title },
    resolver: zodResolver(changeDeckSchema),
  })

  const updateDeckHandler = handleSubmit(data => {
    const newData = { ...data, cover }

    updateDeck({ data: newData, id: deckId })
    reset()
    closeDropdown?.(false)
    onOpenChange?.(false)
    dispatch(setInfoMessage({ message: 'Deck updated' }))
  })

  const removePreviewCover = () => {
    setPreviewCover('')
  }

  useEffect(() => {
    if (cover) {
      const newPreview = URL.createObjectURL(cover)

      setPreviewCover(newPreview)

      return () => URL.revokeObjectURL(newPreview)
    }
  }, [cover])

  if (isOpenDropdown) {
    closeDropdown?.(false)
  }
  if (otherData.isLoading) {
    dispatch(setIsLoading({ isLoading: true }))
  } else {
    dispatch(setIsLoading({ isLoading: false }))
  }

  return (
    <div>
      <ModalHeader showCloseBtn title={'Edit Deck'} />
      <form onSubmit={updateDeckHandler}>
        <ModalBody className={s.container}>
          <ControlledTextfield
            autoComplete={'off'}
            control={control}
            error={errors.name?.message}
            name={'name'}
          />
          {previewCover && <img alt={'deck-image'} className={s.previewImage} src={previewCover} />}
          {previewCover && (
            <div className={s.buttonBlock}>
              <Button onClick={removePreviewCover} type={'button'}>
                Remove image
              </Button>
              <Button onClick={handleButtonClick} type={'button'} variant={'secondary'}>
                <Image />
                Changed Image
              </Button>
            </div>
          )}
          <div className={s.buttonUpload}>
            {!previewCover && (
              <Button fullWidth onClick={handleButtonClick} type={'button'} variant={'secondary'}>
                <Image />
                Upload Image
              </Button>
            )}
            <input
              accept={'image/*'}
              onChange={event => setCover(event.currentTarget?.files?.[0] ?? null)}
              ref={fileInputRef}
              style={{ display: 'none' }}
              type={'file'}
            />
          </div>
          <div className={s.checkbox}>
            <ControlledCheckbox control={control} label={'Private Pack'} name={'isPrivate'} />
          </div>
        </ModalBody>
        <ModalFooter titlePrimary={'Change Deck'} titleSecondary={'Cancel'} />
      </form>
    </div>
  )
}
