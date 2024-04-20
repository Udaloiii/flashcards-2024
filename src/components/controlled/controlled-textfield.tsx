import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { InputProps, Textfield } from '@/components/ui/textfield'

type ControlledTextfieldProps<T extends FieldValues> = UseControllerProps<T> & InputProps
export const ControlledTextfield = <T extends FieldValues>({
  control,
  defaultValue,
  disabled,
  label,
  name,
  rules,
  shouldUnregister,
  variant,
  ...rest
}: ControlledTextfieldProps<T>) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue,
    disabled,
    name,
    rules,
    shouldUnregister,
  })

  return (
    <Textfield
      {...rest}
      disabled={disabled}
      label={label}
      name={name}
      onChange={onChange}
      value={value}
      variant={variant}
    />
  )
}
