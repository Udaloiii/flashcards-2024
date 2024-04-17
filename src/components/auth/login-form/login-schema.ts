import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(3, 'Must be 3 or more characters long'),
  rememberMe: z.boolean().default(false),
})
