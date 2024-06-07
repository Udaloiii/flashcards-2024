import { useState } from 'react'

export const useEditableSpan = () => {
  // value для textfield
  const [value, setValue] = useState('')
  // error для textfield
  const [error, setError] = useState<null | string>(null)
  const [changeOn, setChangeOn] = useState<boolean>(false)
  const toggleMode = () => setChangeOn(prevState => !prevState)

  return { changeOn, error, setChangeOn, setError, setValue, toggleMode, value } as const
}
