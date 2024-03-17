import { Select } from '@/components/ui/select/select'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const SelectExample: Story = {
  args: {
    items: ['apple', 'banana', 'cherry'],
  },
}
