import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import ClosedEye from '@/assets/logo/closed-eye'
import Eye from '@/assets/logo/eye'
import Search from '@/assets/logo/search'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import s from './textfield.module.scss'

type InputProps = {
  error?: null | string
  label?: string
  variant?: 'password' | 'search' | 'text'
} & ComponentPropsWithoutRef<'input'>
export const Textfield = forwardRef<HTMLInputElement, InputProps>(
  ({ className, disabled, error, label, value, variant = 'text', ...rest }, ref) => {
    const [localValue, setLocalValue] = useState(value)
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

    // handlers
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
      setLocalValue(e.currentTarget.value)

    return (
      <Typography as={'div'} variant={'body1'}>
        {label && (
          <Typography
            as={'label'}
            className={`${s.label} ${disabled && s.disabled}`}
            htmlFor={''}
            variant={'body2'}
          >
            {label}
          </Typography>
        )}
        <div className={`${s.wrap} ${className}`}>
          {variant === 'search' && <span className={s.searchIcon}>{searchCondition}</span>}
          <input
            className={`${s.input} ${iconStyleCondition} ${errCondition}`}
            disabled={disabled}
            onChange={onChangeHandler}
            placeholder={variant}
            ref={ref}
            type={inputType}
            value={localValue}
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
)
