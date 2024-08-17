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
    defaultValue: 'apple',
    items: ['apple', 'banana', 'cherry'],
    label: 'Some label',
    placeholder: 'Choice your favorite fruits',
    value: 'asd',
  },
}

export const SelectExampleMore: Story = {
  args: {
    defaultValue: 'apple',
    items: [
      'apasdasdas asdasd asdasd ple',
      'bananasd as asd asd asdasdasd asdasd a',
      'cher asdasd asd asdasd asdasd ry',
      'po asdasdasd asdasd asdasdasd tato',
      'ging asd asd asd aasd asdasdasd er',
      'lemo asd asdas da sdasdasdasd asdasd n',
    ],
    placeholder: 'change some one',
    value: 'asd',
  },
}

export const SelectDisable: Story = {
  args: {
    defaultValue: 'apple',
    disabled: true,
    items: ['apple', 'banana', 'cherry', 'potato', 'ginger', 'lemon'],
    label: 'Some label',
    placeholder: 'change some one',
    value: 'asd',
  },
}
