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
    items: ['item 1', 'item 2', 'item 3'],
  },
}
