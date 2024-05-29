import { useEffect, useState } from 'react'

export function useDebounce(value: number | string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState<number | string>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}
