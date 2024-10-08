import { Slider } from '@/components/ui/slider/slider'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const SliderExample: Story = {
  args: {
    maxValue: 100,
    onChange: () => {},
    value: [0, 50],
  },
}
