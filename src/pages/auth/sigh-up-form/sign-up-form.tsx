import { useForm } from 'react-hook-form'

import { ControlledTextfield } from '@/components/controlled'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-up-form.module.scss'

import { signUpSchema } from './sign-up-schema'

export const SignUpForm = () => {
  type FormValues = z.infer<typeof signUpSchema>
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: zodResolver(signUpSchema),
  })
  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <Card className={s.wrap}>
      <Typography as={'h1'} className={s.title} variant={'h1'}>
        Sign up
      </Typography>
      <form className={s.container} onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextfield
          control={control}
          error={errors.email?.message}
          label={'Email'}
          name={'email'}
        />
        <ControlledTextfield
          control={control}
          error={errors.password?.message}
          label={'Password'}
          name={'password'}
          variant={'password'}
        />
        <ControlledTextfield
          control={control}
          error={errors.confirmPassword?.message}
          label={'Confirm Password'}
          name={'confirmPassword'}
          variant={'password'}
        />
        <Button fullWidth type={'submit'}>
          <Typography variant={'subtitle2'}>Sign Up</Typography>
        </Button>
      </form>
      <div className={s.haveAcc}>
        <Typography variant={'body2'}>Already have an account?</Typography>
        <Typography as={'a'} variant={'subtitle1'}>
          Sign in
        </Typography>
      </div>
    </Card>
  )
}
