import { useState } from 'react'

export const useEditableSpan = () => {
  const [changeOn, setChangeOn] = useState<boolean>(false)
  const toggleModeHandler = () => setChangeOn(prevState => !prevState)

  console.log(changeOn)

  return { changeOn, setChangeOn, toggleModeHandler } as const
}
