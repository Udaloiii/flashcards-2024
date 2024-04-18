import { z } from 'zod'

export const forgotSchema = z.object({
  email: z.string().min(10).email({ message: 'Invalid email address' }),
})
