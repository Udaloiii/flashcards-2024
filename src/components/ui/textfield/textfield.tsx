import { ComponentPropsWithoutRef, useState } from 'react'

import ClosedEye from '@/assets/logo/closedEye'
import Eye from '@/assets/logo/eye'
import Search from '@/assets/logo/search'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import s from './textfield.module.scss'

type InputProps = {
  error?: null | string
  variant?: 'password' | 'search' | 'text'
} & ComponentPropsWithoutRef<'input'>
export const Textfield = ({
  className,
  disabled,
  error,
  variant = 'text',
  ...rest
}: InputProps) => {
  const [show, setShow] = useState(false)
  const [inputType, setInputType] = useState(variant)
  const showPasswordHandler = () => {
    setShow(prevState => !prevState)
    inputType === 'password' ? setInputType('text') : setInputType('password')
  }
  const errCondition = error ? s.error : ''
  const openEyeCondition = variant === 'password' && (show ? <ClosedEye /> : <Eye />)
  const searchCondition = variant === 'search' && <Search />
  const iconStyleCondition =
    // eslint-disable-next-line no-nested-ternary
    variant === 'password' ? s.password : variant === 'search' ? s.search : ''

  return (
    <Typography as={'div'} variant={'body1'}>
      <div className={`${s.wrap} ${className}`}>
        {variant === 'search' && <span className={s.searchIcon}>{searchCondition}</span>}
        <input
          className={`${s.input} ${iconStyleCondition} ${errCondition}`}
          disabled={disabled}
          placeholder={variant}
          type={inputType}
          {...rest}
        />
        {error && <span className={s.errorMessage}>{error}</span>}
        {openEyeCondition && (
          <Button className={s.passwordIcon} onClick={showPasswordHandler} variant={'icon'}>
            {openEyeCondition}
          </Button>
        )}
      </div>
    </Typography>
  )
}
