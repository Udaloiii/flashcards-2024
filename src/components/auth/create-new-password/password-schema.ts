import { z } from 'zod'
export const passwordSchema = z.object({
  password: z.string().min(3, 'Must be 3 or more characters long'),
})
