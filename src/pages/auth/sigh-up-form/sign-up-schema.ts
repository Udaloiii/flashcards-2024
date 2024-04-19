import { z } from 'zod'

export const signUpSchema = z
  .object({
    confirmPassword: z
      .string()
      .trim()
      .min(1, 'Enter password')
      .min(3, 'Password must be 3 or more characters long'),
    email: z.string().email('Invalid email address').trim().min(1, 'Enter email'),
    password: z
      .string()
      .trim()
      .min(1, 'Enter password')
      .min(3, 'Password must be 3 or more characters long')
      .max(30, 'The password must be more than 30 characters long'),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Passwords do not match',
        path: ['confirmPassword'],
      })
    }

    return data
  })
