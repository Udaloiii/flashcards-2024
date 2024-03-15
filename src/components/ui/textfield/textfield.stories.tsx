import { Textfield } from '@/components/ui/textfield/textfield'
import { Meta, type StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['text', 'search', 'password'],
    },
  },
  component: Textfield,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Textfield>

export default meta
type Story = StoryObj<typeof meta>

export const InputText: Story = {
  args: {
    variant: 'text',
  },
}

export const InputPassword: Story = {
  args: {
    variant: 'password',
  },
}

export const InputSearch: Story = {
  args: {
    variant: 'search',
  },
}

export const InputDisabled: Story = {
  args: {
    disabled: true,
    variant: 'text',
  },
}
