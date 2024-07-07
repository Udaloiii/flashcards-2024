import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import Image from '@/assets/logo/image'
import { ControlledCheckbox, ControlledTextfield } from '@/components/controlled'
import { Button } from '@/components/ui/button'
import { ModalBody } from '@/components/ui/modal/modal-body/modal-body'
import { ModalFooter } from '@/components/ui/modal/modal-footer/modal-footer'
import { ModalHeader } from '@/components/ui/modal/modal-header/modal-header'
import { useCreateDeckMutation } from '@/services/decks.service'
import { CreateDeckArgs } from '@/services/flashcards-type'
import { setInfoMessage } from '@/store/app-reducer'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './add-new-deck.module.scss'

type AddNewPackProps = {
  onOpenChange?: (open: boolean) => void
}
export const AddNewDeck = ({ onOpenChange }: AddNewPackProps) => {
  const dispatch = useDispatch()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }
  const [cover, setCover] = useState<File | null>(null) // картинка
  const [previewCover, setPreviewCover] = useState<string>('') // картинка для отображения

  const [addDeck] = useCreateDeckMutation()

  const addDeckSchema = z.object({
    isPrivate: z.boolean().default(false),
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
  } = useForm<CreateDeckArgs>({ resolver: zodResolver(addDeckSchema) })

  const addDeckHandler = handleSubmit(data => {
    addDeck({ ...data, cover })
    reset()
    onOpenChange?.(false)
    dispatch(setInfoMessage({ message: 'Deck added' }))
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

  return (
    <div>
      <ModalHeader showCloseBtn title={'Add New Deck'} />
      <form onSubmit={addDeckHandler}>
        <ModalBody>
          <ControlledTextfield
            autoComplete={'off'}
            control={control}
            error={errors.name?.message}
            name={'name'}
          />
          {previewCover && <img alt={'deck-image'} className={s.previewImage} src={previewCover} />}
          {previewCover && (
            <Button fullWidth onClick={removePreviewCover} type={'button'}>
              Remove cover
            </Button>
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
        <ModalFooter titlePrimary={'Add New Deck'} titleSecondary={'Cancel'} />
      </form>
    </div>
  )
}
