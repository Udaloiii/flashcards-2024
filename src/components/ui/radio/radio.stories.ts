import { Radio } from '@/components/ui/radio/radio'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Radio,
  tags: ['autodocs'],
  title: 'Components/Radio',
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

export const RadioExample: Story = {
  args: {
    items: ['hello', 'goodbye', 'zdarova'],
  },
}
