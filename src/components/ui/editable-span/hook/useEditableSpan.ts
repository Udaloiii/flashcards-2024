import { useState } from 'react'

export const useEditableSpan = () => {
  const [changeOn, setChangeOn] = useState<boolean>(false)
  const toggleMode = () => setChangeOn(prevState => !prevState)

  return { changeOn, setChangeOn, toggleMode } as const
}
