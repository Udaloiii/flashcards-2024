import { useForm } from 'react-hook-form'

import { passwordSchema } from '@/components/auth/create-new-password/password-schema'
import { ControlledTextfield } from '@/components/controlled'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './create-new-password.module.scss'

type CreateNewPasswordForm = z.infer<typeof passwordSchema>

export const CreateNewPassword = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<CreateNewPasswordForm>({
    resolver: zodResolver(passwordSchema),
  })

  const onSubmit = (data: CreateNewPasswordForm) => {
    console.log(data)
  }

  return (
    <Card className={s.container}>
      <Typography as={'h1'} className={s.title} variant={'h1'}>
        Create new password
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextfield
          control={control}
          error={errors.password?.message}
          label={'Password'}
          name={'password'}
          variant={'password'}
        />
        <Typography as={'p'} className={s.description} variant={'body2'}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button className={s.submitButton} fullWidth>
          <Typography variant={'subtitle2'}>Create New Password</Typography>
        </Button>
      </form>
    </Card>
  )
}
