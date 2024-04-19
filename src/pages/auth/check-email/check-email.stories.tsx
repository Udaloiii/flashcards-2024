import { CheckEmail } from '@/pages/auth/check-email/check-email'
import { Meta, type StoryObj } from '@storybook/react'

const meta = {
  args: ['autodocs'],
  component: CheckEmail,
  title: 'Auth/CheckEmail',
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const CheckEmailForm: Story = {}
