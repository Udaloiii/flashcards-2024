import Delete from '@/assets/logo/delete'
import Edit from '@/assets/logo/edit'
import LogOut from '@/assets/logo/log-out'
import Person from '@/assets/logo/person'
import PlayCircle from '@/assets/logo/play-circle'
import VerticalDots from '@/assets/logo/vertical-dots'
import { Dropdown } from '@/components/ui/dropdown/dropdown'
import { Meta, StoryObj } from '@storybook/react'

import userIcon from '../../../assets/img/user-avatar.webp'

const meta = {
  argTypes: {},
  component: Dropdown,
  tags: ['autodocs'],
  title: 'Components/Dropdown',
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const DropdownWithUserImg: Story = {
  args: {
    iconTrigger: userIcon,
    items: [
      { icon: <Person />, title: 'My Profile' },
      { icon: <LogOut />, title: 'Sign Out' },
    ],
  },
}

export const DropdownWithDots: Story = {
  args: {
    dotsTrigger: <VerticalDots />,
    items: [
      { icon: <PlayCircle />, title: 'Learn' },
      { icon: <Edit />, title: 'Edit' },
      { icon: <Delete />, title: 'Delete' },
    ],
  },
}
