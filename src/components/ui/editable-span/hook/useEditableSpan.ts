import { useState } from 'react'

export const useEditableSpan = () => {
  const [changeOn, setChangeOn] = useState<boolean>(false)
  const toggleModeHandler = () => setChangeOn(prevState => !prevState)

  return { changeOn, setChangeOn, toggleModeHandler } as const
}
