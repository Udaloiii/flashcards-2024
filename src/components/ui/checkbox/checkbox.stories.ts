import { Checkbox } from '@/components/ui/checkbox/checkbox'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const CheckBox: Story = {
  args: {},
}

export const CheckBoxWithLabel: Story = {
  args: {
    label: 'Some label',
  },
}

export const CheckBoxDisabled: Story = {
  args: {
    disabled: true,
    label: 'Some label',
  },
}

export const CheckBoxTrueDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Some label',
  },
}
