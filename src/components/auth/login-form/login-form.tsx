import { useForm } from 'react-hook-form'

import { Button } from '../../ui/button'
import { Textfield } from '../../ui/textfield'

type FormValues = {
  email: string
  password: string
}

export const LoginForm = () => {
  const { handleSubmit, register } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Textfield {...register('email')} label={'email'} />
      <Textfield {...register('password')} label={'password'} variant={'password'} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
