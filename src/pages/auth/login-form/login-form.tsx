import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { ControlledCheckbox } from '@/components/controlled/controlled-checkbox'
import { ControlledTextfield } from '@/components/controlled/controlled-textfield'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { loginSchema } from '@/pages/auth/login-form/login-schema'
import { useLogInMutation } from '@/services/auth.service'
import { LoginType } from '@/services/flashcards-type'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './login-form.module.scss'

// type FormValues = z.infer<typeof loginSchema> // тяну тип сразу из loginSchema (убрал и заюзал из глоб.типов)

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
  })

  const navigate = useNavigate()

  const [logIn, _] = useLogInMutation()
  const onSubmit = async (data: LoginType) => {
    try {
      await logIn(data)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Card className={s.wrap}>
      <Typography as={'h1'} className={s.title} variant={'h1'}>
        Sign in
      </Typography>
      <form className={s.container} onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextfield
          control={control}
          error={errors.email?.message}
          label={'Email'}
          name={'email'}
          placeholder={'email'}
        />
        <ControlledTextfield
          control={control}
          error={errors.password?.message}
          label={'Password'}
          name={'password'}
          variant={'password'}
        />
        <ControlledCheckbox control={control} label={'remember me'} name={'rememberMe'} />
        <div className={s.forgotButton}>
          <Typography as={'a'} variant={'body2'}>
            Forgot password?
          </Typography>
        </div>
        <Button fullWidth type={'submit'}>
          <Typography variant={'subtitle2'}>Sign In</Typography>
        </Button>
      </form>
      <div className={s.createAcc}>
        <Typography className={s.haveAcc} variant={'body2'}>
          Don`t have an account?
        </Typography>
        <Typography as={'a'} variant={'subtitle1'}>
          Sign Up
        </Typography>
      </div>
    </Card>
  )
}
