import { Dropdown } from '@/components/ui/dropdown/dropdown'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Dropdown,
  tags: ['autodocs'],
  title: 'Components/Dropdown',
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const CardWithButton: Story = {
  args: {
    items: ['example', 'example', 'example'],
  },
}
