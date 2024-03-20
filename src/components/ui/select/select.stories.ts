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
    label: 'Some label',
    placeholder: 'Choice your favorite fruits',
  },
}

export const SelectExampleMore: Story = {
  args: {
    items: [
      'apasdasdas asdasd asdasd ple',
      'bananasd as asd asd asdasdasd asdasd a',
      'cher asdasd asd asdasd asdasd ry',
      'po asdasdasd asdasd asdasdasd tato',
      'ging asd asd asd aasd asdasdasd er',
      'lemo asd asdas da sdasdasdasd asdasd n',
    ],
    placeholder: 'change some one',
  },
}

export const SelectDisable: Story = {
  args: {
    disabled: true,
    items: ['apple', 'banana', 'cherry', 'potato', 'ginger', 'lemon'],
    label: 'Some label',
    placeholder: 'change some one',
  },
}
