import { CreateNewPassword } from '@/components/auth/create-new-password/create-new-password'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: CreateNewPassword,
  title: 'Auth/CreateNewPassword',
} satisfies Meta<typeof CreateNewPassword>

export default meta
type Story = StoryObj<typeof meta>
export const CreateNewPass: Story = {}
