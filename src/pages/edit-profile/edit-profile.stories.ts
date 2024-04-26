import { EditProfile } from '@/pages/edit-profile/edit-profile'
import { Meta, StoryObj } from '@storybook/react'

import icon from '../../assets/img/user-avatar.webp'

const meta = {
  argTypes: {},
  component: EditProfile,
  tags: ['autodocs'],
  title: 'Pages/EditProfile',
} satisfies Meta<typeof EditProfile>

export default meta
type Story = StoryObj<typeof meta>

export const EditProfileExample: Story = {
  args: {
    email: 'j&johnson@gmail.com',
    icon,
    name: 'Eugene',
  },
}
