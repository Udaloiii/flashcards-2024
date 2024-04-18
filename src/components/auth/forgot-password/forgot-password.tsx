import { useForm } from 'react-hook-form'

import { forgotSchema } from '@/components/auth/forgot-password/forgot-schema'
import { ControlledTextfield } from '@/components/controlled'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './forgot-password.module.scss'

type ForgotFormValues = z.infer<typeof forgotSchema>
export const ForgotPassword = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ForgotFormValues>({
    resolver: zodResolver(forgotSchema),
  })

  const onSubmit = (data: ForgotFormValues) => {
    console.log(data)
  }

  return (
    <Card className={s.container}>
      <Typography as={'h1'} className={s.title} variant={'h1'}>
        Forgot your password?
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextfield
          control={control}
          error={errors.email?.message}
          label={'Email'}
          name={'email'}
        />
        <Typography className={s.description} variant={'body2'}>
          Enter your email address and we will send you further instructions{' '}
        </Typography>
        <Button fullWidth>
          <Typography variant={'subtitle2'}>Send Instructions</Typography>
        </Button>
      </form>
      <Typography as={'div'} className={s.footer} variant={'body2'}>
        <p>Did you remember your password?</p>
        <a>Try logging in</a>
      </Typography>
    </Card>
  )
}
